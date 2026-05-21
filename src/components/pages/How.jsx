import { Link } from "react-router";



const STEPS = [
  ["01", "Register on the Platform", "Visit the registration page and fill in your name, email, institution, and country. Select your preferred AI track. Optionally upload your CV or portfolio."],
  ["02", "Complete Payment", "Pay the ৳500 registration fee (+ ৳25 processing) via bKash/Nagad through SSLCommerz, or use Stripe/PayPal. Payment is automatically verified."],
  ["03", "Receive Contest Credentials", "Exactly 24 hours before the contest starts, you'll receive a temporary contest account via email."],
  ["04", "Compete in the Hackathon", "Login when the hackathon begins. Access problem statements, download datasets, and submit your solutions."],
  ["05", "Results & Prizes", "After the contest ends, the judge panel finalizes rankings. Prize money is distributed within 7 business days."],
];

export default function How() {
  return (
    <div style={{ padding: "100px 32px 80px", maxWidth: 900, margin: "0 auto" }}>
      <p className="section-eyebrow" style={{ marginBottom: 12 }}>Guide</p>
      <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px,5vw,52px)", fontWeight: 400, marginBottom: 16 }}>
        How to <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Participate</em>
      </h2>
      <p style={{ color: "var(--text2)", fontSize: 15, marginBottom: 52, maxWidth: 600 }}>
        Everything you need to know about registering, paying, and competing in NeuralArena.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {STEPS.map(([num, title, desc]) => (
          <div className="card" key={num}>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--accent3)", border: "1.5px solid var(--border2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--mono)", fontSize: 18, color: "var(--accent)", flexShrink: 0, fontWeight: 500 }}>{num}</div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.75 }}>{desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <Link to="/register" className="btn btn-primary btn-lg">Register Now →</Link>
      </div>
    </div>
  );
}