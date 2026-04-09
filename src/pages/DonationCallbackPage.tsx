import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, XCircle, Loader2, Heart } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Status = "loading" | "completed" | "failed" | "pending";

export default function DonationCallbackPage() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<Status>("loading");
  const [details, setDetails] = useState<Record<string, string>>({});

  const orderTrackingId = searchParams.get("OrderTrackingId") || searchParams.get("orderTrackingId");

  useEffect(() => {
    if (!orderTrackingId) {
      setStatus("failed");
      return;
    }

    const apiBase = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

    fetch(`${apiBase}/api/pesapal/transaction-status?orderTrackingId=${orderTrackingId}`)
      .then((r) => r.json())
      .then((data) => {
        setDetails(data);
        // payment_status_description: 1 = COMPLETED, 2 = FAILED, 3 = REVERSED
        const code = data.payment_status_description ?? data.status_code;
        if (code === "Completed" || code === 1 || data.status === "COMPLETED") {
          setStatus("completed");
        } else if (code === "Failed" || code === 2) {
          setStatus("failed");
        } else {
          setStatus("pending");
        }
      })
      .catch(() => setStatus("failed"));
  }, [orderTrackingId]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main className="pt-32 pb-20 px-4 flex items-center justify-center">
        <div className="max-w-md w-full text-center space-y-6">
          {status === "loading" && (
            <>
              <Loader2 size={56} className="animate-spin text-kenya-green mx-auto" />
              <h1 className="text-2xl font-bold">Verifying your payment...</h1>
              <p className="text-white/40 text-sm">Please wait while we confirm your donation.</p>
            </>
          )}

          {status === "completed" && (
            <>
              <div className="w-24 h-24 bg-kenya-green/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={48} className="text-kenya-green" />
              </div>
              <h1 className="text-3xl font-black">Thank You!</h1>
              <p className="text-white/60">
                Your donation has been received. You're helping transform lives on the Kenyan coast.
              </p>
              {details.amount && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left space-y-2">
                  <p className="text-sm text-white/40">Transaction ID</p>
                  <p className="font-mono text-xs text-white/70 break-all">{orderTrackingId}</p>
                  {details.amount && (
                    <>
                      <p className="text-sm text-white/40 mt-3">Amount</p>
                      <p className="font-bold text-kenya-green">{details.currency} {details.amount}</p>
                    </>
                  )}
                </div>
              )}
              <div className="flex items-center justify-center gap-2 text-kenya-green text-sm">
                <Heart size={14} className="fill-kenya-green" /> A receipt has been sent to your email
              </div>
              <Link
                to="/"
                className="inline-block bg-kenya-green text-white font-bold px-8 py-3 rounded-full hover:bg-kenya-green/90 transition-colors"
              >
                Back to Home
              </Link>
            </>
          )}

          {status === "pending" && (
            <>
              <div className="w-24 h-24 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto">
                <Loader2 size={48} className="text-yellow-400 animate-spin" />
              </div>
              <h1 className="text-2xl font-bold">Payment Pending</h1>
              <p className="text-white/60 text-sm">
                Your payment is being processed. We'll notify you once it's confirmed.
              </p>
              <p className="text-xs text-white/30 font-mono break-all">{orderTrackingId}</p>
              <Link to="/" className="inline-block text-white/50 hover:text-white text-sm transition-colors">
                Return to Home
              </Link>
            </>
          )}

          {status === "failed" && (
            <>
              <div className="w-24 h-24 bg-kenya-red/10 rounded-full flex items-center justify-center mx-auto">
                <XCircle size={48} className="text-kenya-red" />
              </div>
              <h1 className="text-2xl font-bold">Payment Unsuccessful</h1>
              <p className="text-white/60 text-sm">
                Something went wrong with your payment. No charges were made.
              </p>
              <Link
                to="/get-involved/donate"
                className="inline-block bg-kenya-green text-white font-bold px-8 py-3 rounded-full hover:bg-kenya-green/90 transition-colors"
              >
                Try Again
              </Link>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
