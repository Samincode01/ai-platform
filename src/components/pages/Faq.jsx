
import { useState } from "react";

const Q = [
  ["Who can participate?", "Anyone with an interest in AI — students, professionals, researchers. All skill levels welcome."],
  ["How does judging work?", "Automated judge evaluates output vs expected results. Judges may also do manual rubric-based review."],
  ["What languages are supported?", "Python 3.10, C++ 17, Java 17. Common ML libraries pre-installed."],
  ["When do I receive my account?", "24 hours before contest start via email."],
  ["What payment methods?", "SSLCommerz (bKash, Nagad), Stripe, PayPal. ৳500 + ৳25 processing fee."],
  ["Can I get a refund?", "Yes — refunds are available up to 7 days before the contest."],
  ["Is plagiarism detection active?", "Yes. Automated similarity detection. IP tracking is also active."],
  ["Are pre-trained models allowed?", "Yes, unless explicitly restricted in the problem statement."],
];
function Item({ q, a }) {
  const [o, setO] = useState(false);
  return (
    <div className={`faq-item ${o ? "open" : ""}`}>
      <div className="faq-question" onClick={() => setO(!o)}>{q} <span className="faq-toggle">+</span></div>
      <div className="faq-answer" style={{ display: o ? "block" : "none" }}>{a}</div>
    </div>
  );
}
export default function FAQ() {
  return (
    <div style={{ padding: "100px 32px 80px", maxWidth: 720, margin: "0 auto" }}>
      <div style={{ marginBottom: 40 }}>
        <p className="section-eyebrow" style={{ marginBottom: 10 }}>Help</p>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: 42, fontWeight: 400 }}>
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Frequently</em> Asked Questions
        </h2>
      </div>
      <div className="faq-list">{Q.map(([q, a]) => <Item key={q} q={q} a={a} />)}</div>
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <p style={{ color: "var(--text2)", marginBottom: 14, fontSize: 14 }}>Still have questions?</p>
        <a href="mailto:contact@neuralarena.io" className="btn btn-outline">✉️ Contact Us</a>
      </div>
    </div>
  );
}
