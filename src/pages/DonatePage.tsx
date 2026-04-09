import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";
import {
  Heart,
  Users,
  Banknote,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const IMPACT_TIERS = [
  { amount: 500, label: "Starter", impact: "Provides school supplies for 1 student" },
  { amount: 1000, label: "Supporter", impact: "Funds a youth health workshop session" },
  { amount: 2500, label: "Champion", impact: "Sponsors entrepreneurship training for 2 youth" },
  { amount: 5000, label: "Patron", impact: "Covers a full scholarship for one term" },
  { amount: 10000, label: "Visionary", impact: "Funds a community climate action project" },
];

const STATS = [
  { icon: Users, value: "15,000+", label: "Youth Reached" },
  { icon: Globe, value: "6 Counties", label: "Active Programs" },
  { icon: Banknote, value: "12 Years", label: "Of Impact" },
];

type Step = "amount" | "details" | "processing";

export default function DonatePage() {
  const [step, setStep] = useState<Step>("amount");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [currency, setCurrency] = useState("KES");
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", phone: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const finalAmount = selectedAmount ?? (customAmount ? parseFloat(customAmount) : null);

  const impactTier = IMPACT_TIERS.slice()
    .reverse()
    .find((t) => finalAmount !== null && finalAmount >= t.amount);

  function handlePreset(amt: number) {
    setSelectedAmount(amt);
    setCustomAmount("");
  }

  function handleCustom(val: string) {
    setCustomAmount(val);
    setSelectedAmount(null);
  }

  function handleNext() {
    if (!finalAmount || finalAmount < 10) {
      setError("Please enter a valid amount (minimum 10).");
      return;
    }
    setError("");
    setStep("details");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email) { setError("Email is required."); return; }
    setError("");
    setLoading(true);
    setStep("processing");

    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
      const res = await fetch(`${apiBase}/api/pesapal/submit-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalAmount,
          currency,
          email: form.email,
          phone: form.phone,
          first_name: form.first_name,
          last_name: form.last_name,
          description: `Donation to Pwani Youth Network — ${impactTier?.label ?? "General"}`,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.redirect_url) {
        throw new Error(data.error || "Payment initiation failed.");
      }

      // Redirect to Pesapal hosted payment page
      window.location.href = data.redirect_url;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setError(msg);
      setStep("details");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <SEO
        title="Donate - Support Youth Empowerment"
        description="Support Pwani Youth Network's mission to empower coastal Kenya youth. Your donation helps fund programs in health, education, climate action, and economic empowerment."
        keywords="donate to youth organization, support coastal Kenya, youth empowerment donation, Kenya NGO donation, Pwani Youth Network support"
        url="https://pwaniyouthnetwork.org/get-involved/donate"
      />
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-kenya-green/20 via-transparent to-coast-ocean/20 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-kenya-green/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center space-y-5">
            <span className="inline-flex items-center gap-2 bg-kenya-green/10 border border-kenya-green/30 text-kenya-green text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
              <Heart size={12} className="fill-kenya-green" /> Make an Impact
            </span>
            <h1 className="text-5xl sm:text-6xl font-black leading-tight">
              Fuel the{" "}
              <span className="bg-gradient-to-r from-kenya-green via-coast-ocean to-kenya-green bg-clip-text text-transparent">
                Next Generation
              </span>
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Every shilling you give directly transforms a young life on the Kenyan coast.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <div className="border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-3 divide-x divide-white/10">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 px-4">
                <Icon size={18} className="text-kenya-green mb-1" />
                <span className="text-xl font-bold">{value}</span>
                <span className="text-xs text-white/40">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Donation card */}
        <section className="py-16 px-4">
          <div className="max-w-xl mx-auto">
            <div className="relative bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
              {/* Progress indicator */}
              <div className="flex border-b border-white/10">
                {(["amount", "details"] as Step[]).map((s, i) => (
                  <div
                    key={s}
                    className={`flex-1 py-3 text-center text-xs font-semibold uppercase tracking-widest transition-colors ${
                      step === s || (step === "processing" && s === "details")
                        ? "text-kenya-green border-b-2 border-kenya-green"
                        : i === 0 && step !== "amount"
                        ? "text-white/40"
                        : "text-white/20"
                    }`}
                  >
                    {i + 1}. {s === "amount" ? "Choose Amount" : "Your Details"}
                  </div>
                ))}
              </div>

              <div className="p-8">
                {/* ── Step 1: Amount ── */}
                {step === "amount" && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold">Select Amount</h2>
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="bg-white/10 border border-white/20 text-white text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-kenya-green"
                      >
                        <option value="KES">KES</option>
                        <option value="USD">USD</option>
                        <option value="UGX">UGX</option>
                        <option value="TZS">TZS</option>
                      </select>
                    </div>

                    {/* Preset amounts */}
                    <div className="grid grid-cols-3 gap-3">
                      {IMPACT_TIERS.map(({ amount: amt, label }) => (
                        <button
                          key={amt}
                          onClick={() => handlePreset(amt)}
                          className={`py-3 px-2 rounded-xl font-semibold text-sm transition-all border flex flex-col items-center gap-0.5 ${
                            selectedAmount === amt
                              ? "bg-kenya-green border-kenya-green text-white shadow-lg shadow-kenya-green/30"
                              : "bg-white/5 border-white/10 text-white/70 hover:border-kenya-green/50 hover:text-white"
                          }`}
                        >
                          <span>{amt.toLocaleString()}</span>
                          <span className={`text-[10px] font-normal ${selectedAmount === amt ? "text-white/80" : "text-white/30"}`}>
                            {label}
                          </span>
                        </button>
                      ))}
                      <button
                        onClick={() => { setSelectedAmount(null); setCustomAmount(""); }}
                        className={`py-3 rounded-xl font-semibold text-sm transition-all border ${
                          selectedAmount === null && customAmount === ""
                            ? "border-white/20 text-white/40"
                            : "bg-white/5 border-white/10 text-white/70 hover:border-kenya-green/50"
                        }`}
                      >
                        Custom
                      </button>
                    </div>

                    {/* Custom input */}
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-sm font-medium">
                        {currency}
                      </span>
                      <input
                        type="number"
                        min="10"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => handleCustom(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-14 pr-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-kenya-green transition-colors"
                      />
                    </div>

                    {/* Impact tier */}
                    {impactTier && (
                      <div className="flex items-start gap-3 bg-kenya-green/10 border border-kenya-green/20 rounded-xl p-4">
                        <CheckCircle2 size={18} className="text-kenya-green mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-kenya-green">{impactTier.label} Donor</p>
                          <p className="text-xs text-white/60 mt-0.5">{impactTier.impact}</p>
                        </div>
                      </div>
                    )}

                    {error && <p className="text-kenya-red text-sm">{error}</p>}

                    <button
                      onClick={handleNext}
                      className="w-full bg-kenya-green hover:bg-kenya-green/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-kenya-green/20 hover:shadow-kenya-green/40"
                    >
                      Continue <ArrowRight size={18} />
                    </button>
                  </div>
                )}

                {/* ── Step 2: Donor Details ── */}
                {(step === "details" || step === "processing") && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold">Your Details</h2>
                      <button
                        type="button"
                        onClick={() => setStep("amount")}
                        className="text-xs text-white/40 hover:text-white transition-colors"
                      >
                        ← Back
                      </button>
                    </div>

                    {/* Amount summary */}
                    <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between">
                      <span className="text-sm text-white/50">Donating</span>
                      <span className="font-bold text-kenya-green text-lg">
                        {currency} {finalAmount?.toLocaleString()}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="First name"
                        value={form.first_name}
                        onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-kenya-green transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Last name"
                        value={form.last_name}
                        onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-kenya-green transition-colors"
                      />
                    </div>

                    <input
                      type="email"
                      required
                      placeholder="Email address *"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-kenya-green transition-colors"
                    />

                    <input
                      type="tel"
                      placeholder="Phone (e.g. 0712345678)"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-kenya-green transition-colors"
                    />

                    {error && <p className="text-kenya-red text-sm">{error}</p>}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-kenya-green hover:bg-kenya-green/90 disabled:opacity-60 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-kenya-green/20"
                    >
                      {loading ? (
                        <><Loader2 size={18} className="animate-spin" /> Redirecting to Pesapal...</>
                      ) : (
                        <><Zap size={18} /> Proceed to Payment</>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-white/30">
                      <Shield size={12} />
                      Secured by Pesapal · M-Pesa, Visa, Mastercard accepted
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: Shield, label: "Bank-level SSL" },
                { icon: Zap, label: "Instant Processing" },
                { icon: CheckCircle2, label: "Verified NGO" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="bg-white/[0.03] border border-white/5 rounded-xl py-3 px-2">
                  <Icon size={16} className="text-kenya-green mx-auto mb-1" />
                  <p className="text-xs text-white/40">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What your donation supports */}
        <section className="py-16 px-4 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">Where Your Money Goes</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { emoji: "🏥", title: "Health Programs", desc: "Adolescent health & young mothers support" },
                { emoji: "📚", title: "Education", desc: "Scholarships and academic support" },
                { emoji: "💼", title: "Entrepreneurship", desc: "Training and startup grants for youth" },
                { emoji: "🌿", title: "Climate Action", desc: "Environmental conservation projects" },
                { emoji: "⚽", title: "Sports Academy", desc: "Bangla Talent Sports development" },
                { emoji: "🎨", title: "Creative Arts", desc: "Digital skills and arts training" },
              ].map(({ emoji, title, desc }) => (
                <div
                  key={title}
                  className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:border-kenya-green/20 transition-colors"
                >
                  <span className="text-2xl mb-3 block">{emoji}</span>
                  <h3 className="font-semibold text-sm mb-1">{title}</h3>
                  <p className="text-xs text-white/40">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
