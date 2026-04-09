import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

const app = express();
app.use(express.json());

// Allow requests from the production domain and localhost in dev
const allowedOrigins = [
  process.env.FRONTEND_URL || "https://pwaniyouthnetwork.org",
  "http://localhost:5173",
  "http://localhost:4173",
];
app.use(
  cors({
    origin: (origin, cb) => {
      // Allow server-to-server (no origin) and listed origins
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

const PESAPAL_BASE =
  process.env.PESAPAL_ENV === "production"
    ? "https://pay.pesapal.com/v3"
    : "https://cybqa.pesapal.com/pesapalv3";

const CONSUMER_KEY = process.env.PESAPAL_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.PESAPAL_CONSUMER_SECRET;

// In-memory token cache (valid ~5 min per Pesapal docs)
let cachedToken = null;
let tokenExpiry = null;

async function getAuthToken() {
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
    return cachedToken;
  }
  const res = await axios.post(
    `${PESAPAL_BASE}/api/Auth/RequestToken`,
    { consumer_key: CONSUMER_KEY, consumer_secret: CONSUMER_SECRET },
    { headers: { Accept: "application/json", "Content-Type": "application/json" } }
  );
  cachedToken = res.data.token;
  tokenExpiry = Date.now() + 4.5 * 60 * 1000; // expire 30s early
  return cachedToken;
}

// ── POST /api/pesapal/register-ipn ────────────────────────────────────────────
app.post("/api/pesapal/register-ipn", async (req, res) => {
  try {
    const token = await getAuthToken();
    const { ipn_url } = req.body;
    const response = await axios.post(
      `${PESAPAL_BASE}/api/URLSetup/RegisterIPN`,
      { url: ipn_url, ipn_notification_type: "GET" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error("IPN registration error:", err?.response?.data || err.message);
    res.status(500).json({ error: "Failed to register IPN" });
  }
});

// ── POST /api/pesapal/submit-order ────────────────────────────────────────────
app.post("/api/pesapal/submit-order", async (req, res) => {
  try {
    const token = await getAuthToken();
    const { amount, currency, email, phone, first_name, last_name, description } = req.body;

    if (!amount || !email) {
      return res.status(400).json({ error: "amount and email are required" });
    }

    const orderId = uuidv4();
    const callbackUrl = `${process.env.FRONTEND_URL}/donate/callback`;

    const orderPayload = {
      id: orderId,
      currency: currency || "KES",
      amount: parseFloat(amount),
      description: description || "Donation to Pwani Youth Network",
      callback_url: callbackUrl,
      notification_id: process.env.PESAPAL_IPN_ID,
      billing_address: {
        email_address: email,
        phone_number: phone || "",
        first_name: first_name || "Donor",
        last_name: last_name || "",
      },
    };

    const response = await axios.post(
      `${PESAPAL_BASE}/api/Transactions/SubmitOrderRequest`,
      orderPayload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error("Submit order error:", err?.response?.data || err.message);
    res.status(500).json({ error: "Failed to submit order" });
  }
});

// ── GET /api/pesapal/transaction-status ───────────────────────────────────────
app.get("/api/pesapal/transaction-status", async (req, res) => {
  try {
    const token = await getAuthToken();
    const { orderTrackingId } = req.query;

    if (!orderTrackingId) {
      return res.status(400).json({ error: "orderTrackingId is required" });
    }

    const response = await axios.get(
      `${PESAPAL_BASE}/api/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`,
      { headers: { Authorization: `Bearer ${token}`, Accept: "application/json" } }
    );

    res.json(response.data);
  } catch (err) {
    console.error("Transaction status error:", err?.response?.data || err.message);
    res.status(500).json({ error: "Failed to get transaction status" });
  }
});

// ── GET /api/pesapal/ipn — Pesapal calls this webhook on payment events ───────
app.get("/api/pesapal/ipn", async (req, res) => {
  try {
    const { orderTrackingId, orderMerchantReference, orderNotificationType } = req.query;
    console.log("IPN received:", { orderTrackingId, orderMerchantReference, orderNotificationType });

    const token = await getAuthToken();
    const statusRes = await axios.get(
      `${PESAPAL_BASE}/api/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`,
      { headers: { Authorization: `Bearer ${token}`, Accept: "application/json" } }
    );

    console.log("IPN transaction status:", statusRes.data);
    // Must respond 200 so Pesapal marks the notification as delivered
    res.status(200).json({ orderNotificationType, orderTrackingId, orderMerchantReference });
  } catch (err) {
    console.error("IPN handler error:", err.message);
    res.status(500).json({ error: "IPN processing failed" });
  }
});

// ── Health check ──────────────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Pesapal server running on port ${PORT}`));
