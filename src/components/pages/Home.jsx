
import { Link } from "react-router";
import { useEffect, useState } from "react";



function useCountdown(target) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  let diff = Math.max(0, target.getTime() - now);
  const days = Math.floor(diff / 86400000); diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000); diff -= hours * 3600000;
  const mins = Math.floor(diff / 60000); diff -= mins * 60000;
  const secs = Math.floor(diff / 1000);
  const pad = (n) => String(n).padStart(2, "0");
  return { days: pad(days), hours: pad(hours), mins: pad(mins), secs: pad(secs) };
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <div className="faq-question" onClick={() => setOpen(!open)}>{q} <span className="faq-toggle">+</span></div>
      <div className="faq-answer" style={{ display: open ? "block" : "none" }}>{a}</div>
    </div>
  );
}

export default function Home() {
  const cd = useCountdown(new Date("2026-06-20T10:00:00+06:00"));
  return (
    <div>
      <section className="hero">
        <div className="hero-canvas">
          <div className="hero-grid" />
          <div className="hero-orb orb1" />
          <div className="hero-orb orb2" />
          <div className="hero-orb orb3" />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-badge"><div className="live-dot" /> Registration Open · Hackathon 2026</div>
          <h1>Build the <span className="italic">Future</span><br />with AI</h1>
          <p className="hero-sub">Bangladesh's premier AI hackathon platform. Compete, collaborate, and push the boundaries of artificial intelligence.</p>
          <div className="hero-actions">
            <Link to="/register" className="btn btn-primary btn-lg">Register Now →</Link>
            <Link to="/contests" className="btn btn-outline btn-lg">View Contests</Link>
            <Link to="/how" className="btn btn-outline btn-lg">How It Works</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="hero-stat-num">2<b> K+</b></div><div className="hero-stat-label">Participants</div></div>
            <div className="hero-stat"><div className="hero-stat-num">৳<b> 5L</b></div><div className="hero-stat-label">Prize Pool</div></div>
            <div className="hero-stat"><div className="hero-stat-num">48<b> h</b></div><div className="hero-stat-label">Contest Duration</div></div>
            <div className="hero-stat"><div className="hero-stat-num"><b>6 </b></div><div className="hero-stat-label"> AI Tracks</div></div>
          </div>
        </div>
      </section>

      <section className="countdown-section">
        <div className="countdown-eyebrow">Next Hackathon Begins In</div>
        <div className="countdown-label">NeuralArena AI Challenge 2026 · June 20, 2026</div>
        <div className="countdown-timer">
          <div className="countdown-unit"><div className="countdown-num">{cd.days}</div><div className="countdown-unit-label">Days</div></div>
          <div className="countdown-unit"><div className="countdown-num">{cd.hours}</div><div className="countdown-unit-label">Hours</div></div>
          <div className="countdown-unit"><div className="countdown-num">{cd.mins}</div><div className="countdown-unit-label">Minutes</div></div>
          <div className="countdown-unit"><div className="countdown-num">{cd.secs}</div><div className="countdown-unit-label">Seconds</div></div>
        </div>
        <div style={{ marginTop: 36, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/register" className="btn btn-primary">Register Now</Link>
          <Link to="/contest" className="btn btn-outline">Contest Details →</Link>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <div className="section-eyebrow">What We Offer</div>
          <h2>Everything You Need<br />to <em>Compete</em></h2>
          <p>From registration to real-time judging — a complete hackathon ecosystem built for AI.</p>
        </div>
        <div className="features-grid">
          {[
            ["⚡", "Real-Time Judging", "Automated evaluation engine processes submissions instantly with WebSocket-powered live leaderboard updates."],
            ["🔒", "Secure Sandbox", "Docker-isolated code execution. Your solution runs safely with IP tracking and anti-cheating detection active."],
            ["🏆", "Live Leaderboard", "Rankings update in real time. Freeze mode for dramatic contest finales controlled by the judge panel."],
            ["🤖", "AI Model Support", "Python, C++, Java supported. Pre-installed ML libraries, TensorFlow, scikit-learn, OpenCV."],
            ["💳", "Easy Payment", "SSLCommerz (bKash, Nagad), Stripe, and PayPal integrated. Instant confirmation and automatic account provisioning."],
            ["📊", "Analytics Dashboard", "Track your performance, submission history, and improvement across multiple hackathons over the years."],
            ["👤", "Auto Account Provisioning", "Contest accounts generated automatically after payment and sent via email 24 hours before the contest starts."],
            ["📋", "Submission Queue", "Redis-backed queue handles peak load. Worker pool ensures fair, ordered evaluation for all participants."],
            ["🌐", "Scalable Infrastructure", "Cloud-deployed on AWS/GCP with 99.9% uptime SLA during contests and automatic load balancing."],
          ].map(([icon, title, desc]) => (
            <div className="feature-card" key={title}>
              <div className="feature-icon">{icon}</div>
              <div className="feature-title">{title}</div>
              <div className="feature-desc">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="tracks-section">
        <div className="section-heading">
          <div className="section-eyebrow">Competition Tracks</div>
          <h2>Choose Your<br /><em>AI Domain</em></h2>
          <p>Specialize in the area you're most passionate about. Each track has dedicated problems and prizes.</p>
        </div>
        <div className="tracks-grid">
          {[
            ["👁️", "Computer Vision", "Image classification, detection, segmentation"],
            ["💬", "NLP", "Language modeling, sentiment, translation"],
            ["🤖", "Robotics", "Control systems, path planning, simulation"],
            ["📈", "Predictive ML", "Forecasting, regression, time series"],
            ["🧬", "Generative AI", "GANs, diffusion models, LLM fine-tuning"],
            ["🔊", "Audio & Speech", "ASR, TTS, audio classification"],
          ].map(([icon, name, desc]) => (
            <div className="track-card" key={name}>
              <div className="track-icon">{icon}</div>
              <div className="track-name">{name}</div>
              <div className="track-desc">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="how-section">
        <div className="section-heading">
          <div className="section-eyebrow">How to Participate</div>
          <h2>Four <em>Simple</em> Steps</h2>
          <p>Go from registration to competing in minutes.</p>
        </div>
        <div className="steps-flow">
          {[
            ["01", "Register", "Fill in your details, choose your track and contest on the registration page."],
            ["02", "Pay Securely", "Complete payment via bKash, Nagad, Stripe or PayPal. ৳500 registration fee."],
            ["03", "Receive Account", "Get your temporary contest credentials by email 24 hours before the contest starts."],
            ["04", "Compete & Win", "Login, submit solutions, watch the live leaderboard update, and claim your prize!"],
          ].map(([num, title, desc]) => (
            <div className="step-box" key={num}>
              <div className="step-num">{num}</div>
              <div className="step-title">{title}</div>
              <div className="step-desc">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rules-section">
        <div className="section-heading">
          <div className="section-eyebrow">Rules & Regulations</div>
          <h2>Play <em>Fair</em>, Win Big</h2>
          <p>All participants must adhere to the contest rules to ensure a fair competition for everyone.</p>
        </div>
        <div className="rules-grid">
          {[
            ["⏱️", "Submission Limits", "One submission per 30 minutes per problem. Each problem has a fixed maximum submission count defined by the judge."],
            ["🔍", "Plagiarism Detection", "Automated similarity detection is active. Code sharing between participants results in immediate disqualification."],
            ["🌐", "External Resources", "Pre-trained models and external APIs are allowed unless explicitly restricted in a problem statement."],
            ["📁", "File Size Limit", "Maximum 100MB per submission. Supported formats: .py, .cpp, .java, .zip containing your solution files."],
            ["🛡️", "IP Tracking", "IP addresses are monitored throughout the contest. VPN usage or account sharing may result in disqualification."],
            ["💻", "Supported Languages", "Python 3.10 (primary), C++ 17, and Java 17. Common ML/AI libraries are pre-installed in the sandbox environment."],
          ].map(([icon, title, text]) => (
            <div className="rule-card" key={title}>
              <div className="rule-icon">{icon}</div>
              <div className="rule-title">{title}</div>
              <div className="rule-text">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="prev-section">
        <div className="section-heading">
          <div className="section-eyebrow">History</div>
          <h2>Previous <em>Hackathons</em></h2>
          <p>Explore past contests, problems, and winning solutions from NeuralArena's history.</p>
        </div>
        <div className="prev-grid">
          {[
            ["2024", "NeuralArena AI Challenge 2024", "847 participants · 5 problems · 48 hours", ["CV", "NLP", "Robotics"], [["🥇", "Team PixelWave — Image Segmentation"], ["🥈", "BanAI Labs — Medical NLP"], ["🥉", "DeepSight BD — Object Detection"]]],
            ["2023", "NeuralArena AI Challenge 2023", "523 participants · 4 problems · 36 hours", ["CV", "NLP"], [["🥇", "AlgoMinds — Text Classification"], ["🥈", "NeuralNomads — Face Recognition"], ["🥉", "CodeCraft BD — OCR System"]]],
          ].map((card) => {
            const [year, title, meta, badges, winners] = card;
            return (
              <div className="prev-card" key={year}>
                <div className="prev-header">
                  <div className="prev-year">// {year}</div>
                  <div className="prev-title">{title}</div>
                </div>
                <div className="prev-body">
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                    {badges.map((b, i) => <span key={b} className={`badge badge-${i === 0 ? "cyan" : i === 1 ? "indigo" : "orange"}`}>{b}</span>)}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 14 }}>{meta}</div>
                  <div>
                    {winners.map(([m, w]) => (
                      <div className="winner-item" key={w}><span>{m}</span><span>{w}</span></div>
                    ))}
                  </div>
                  <Link to="/leaderboard" className="btn btn-outline btn-sm" style={{ marginTop: 18, width: "100%" }}>View Results & Problems →</Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <div className="section-eyebrow">FAQ</div>
          <h2>Common <em>Questions</em></h2>
        </div>
        <div className="faq-list">
          <FAQItem q="Who can participate?" a="Anyone with an interest in AI — students, professionals, researchers, or enthusiasts from Bangladesh or abroad. All skill levels are welcome." />
          <FAQItem q="How does the judging system work?" a="Submissions are evaluated automatically by comparing your output to expected results. Judges can also perform manual rubric-based reviews for open-ended problems." />
          <FAQItem q="What programming languages are supported?" a="Python 3.10 (primary), C++ 17, and Java 17. Common ML libraries pre-installed." />
          <FAQItem q="When do I receive my contest account?" a="24 hours before the contest begins via email." />
          <FAQItem q="What payment methods are accepted?" a="bKash, Nagad, local cards via SSLCommerz; international cards via Stripe; PayPal. ৳500 + ৳25 processing fee." />
          <FAQItem q="Can I get a refund?" a="Yes — refunds are available up to 7 days before the contest." />
        </div>
      </section>

      <footer>
        <div className="footer-logo">NeuralArena</div>
        <div className="footer-sub">Bangladesh's Premier AI Hackathon Platform</div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/contests">Contests</Link>
          <Link to="/how">How to Participate</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <a href="mailto:contact@neuralarena.io">Contact</a>
        </div>
        <div className="footer-copy">© 2026 NeuralArena. All rights reserved. Powered by AI & Community.</div>
      </footer>
    </div>
  );
}
