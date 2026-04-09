/**
 * Run this ONCE after deploying the backend to register your IPN URL with Pesapal.
 * After running, copy the returned ipn_id into your .env as PESAPAL_IPN_ID
 *
 * Usage:
 *   node server/register-ipn.js
 */
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const PESAPAL_BASE =
  process.env.PESAPAL_ENV === "production"
    ? "https://pay.pesapal.com/v3"
    : "https://cybqa.pesapal.com/pesapalv3";

async function main() {
  console.log(`Using Pesapal ${process.env.PESAPAL_ENV} environment`);

  // 1. Get auth token
  const authRes = await axios.post(
    `${PESAPAL_BASE}/api/Auth/RequestToken`,
    {
      consumer_key: process.env.PESAPAL_CONSUMER_KEY,
      consumer_secret: process.env.PESAPAL_CONSUMER_SECRET,
    },
    { headers: { Accept: "application/json", "Content-Type": "application/json" } }
  );

  const token = authRes.data.token;
  console.log("✅ Auth token obtained");

  // 2. Register IPN — must be a publicly accessible URL
  const ipnUrl = `${process.env.FRONTEND_URL}/api/pesapal/ipn`;
  console.log(`Registering IPN URL: ${ipnUrl}`);

  const ipnRes = await axios.post(
    `${PESAPAL_BASE}/api/URLSetup/RegisterIPN`,
    { url: ipnUrl, ipn_notification_type: "GET" },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  console.log("\n✅ IPN registered successfully:");
  console.log(ipnRes.data);
  console.log(`\n👉 Add this to your .env:\n   PESAPAL_IPN_ID=${ipnRes.data.ipn_id}`);
}

main().catch((err) => {
  console.error("❌ Error:", err?.response?.data || err.message);
  process.exit(1);
});
