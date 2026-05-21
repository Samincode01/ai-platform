import { Link } from "react-router";
import { useState } from "react";

export default function Detail() {
  const [tab, setTab] = useState("over");

  const contest = {
    title: "NeuralArena AI Challenge 2026",
    description:
      "Join one of the largest AI hackathons and compete with developers, researchers, and students from around the world.",
    fee: 500,
  };

  return (
    <div
      style={{
        padding: "100px 32px 60px",
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 32,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <p
            className="section-eyebrow"
            style={{ marginBottom: 10 }}
          >
            Hackathon 2026
          </p>

          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize:
                "clamp(28px,4vw,42px)",
              fontWeight: 400,
              marginBottom: 10,
            }}
          >
            {contest.title}
          </h2>

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span className="badge badge-green">
              Registration Open
            </span>

            <span
              style={{
                fontSize: 13,
                color: "var(--text2)",
              }}
            >
              📅 48 hours
            </span>
          </div>
        </div>

        <Link
          to="/register"
          className="btn btn-primary btn-lg"
        >
          Register Now →
        </Link>
      </div>

      <div className="tab-nav">
        {[
          ["over", "Overview"],
          ["prob", "Problems"],
          ["prize", "Prizes"],
          ["rules", "Rules"],
        ].map(([key, label]) => (
          <button
            key={key}
            className={`tab-btn ${
              tab === key
                ? "active"
                : ""
            }`}
            onClick={() => setTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "over" && (
        <div className="card">
          <p
            style={{
              fontSize: 14.5,
              color: "var(--text2)",
              lineHeight: 1.8,
              marginBottom: 22,
            }}
          >
            {contest.description}
          </p>

          <div
            className="grid-2"
            style={{ gap: 20 }}
          >
            <div>
              <div className="detail-label">
                Duration
              </div>

              <div
                style={{
                  fontWeight: 700,
                }}
              >
                48 Hours
              </div>
            </div>

            <div>
              <div className="detail-label">
                Fee
              </div>

              <div
                style={{
                  fontWeight: 700,
                }}
              >
                ৳ {contest.fee}
              </div>
            </div>

            <div>
              <div className="detail-label">
                Prize Pool
              </div>

              <div
                style={{
                  fontWeight: 700,
                  color:
                    "var(--accent)",
                }}
              >
                ৳ 5,00,000
              </div>
            </div>

            <div>
              <div className="detail-label">
                Languages
              </div>

              <div
                style={{
                  fontWeight: 700,
                }}
              >
                Python, C++, Java
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "prob" && (
        <div className="alert alert-info">
          Problems will be revealed
          when the contest starts.
        </div>
      )}

      {tab === "prize" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: 16,
          }}
        >
          {[
            [
              "🥇",
              "1st Place",
              "৳ 2,00,000",
              "gold",
            ],
            [
              "🥈",
              "2nd Place",
              "৳ 1,25,000",
              "silver",
            ],
            [
              "🥉",
              "3rd Place",
              "৳ 75,000",
              "bronze",
            ],
          ].map(
            ([emoji, label, value, color]) => (
              <div
                className="card"
                key={label}
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 30,
                    marginBottom: 8,
                  }}
                >
                  {emoji}
                </div>

                <div
                  style={{
                    fontSize: 13,
                    color:
                      "var(--text2)",
                    marginBottom: 4,
                  }}
                >
                  {label}
                </div>

                <div
                  style={{
                    fontFamily:
                      "var(--serif)",
                    fontSize: 26,
                    fontWeight: 400,
                    color: `var(--${color})`,
                    fontStyle:
                      "italic",
                  }}
                >
                  {value}
                </div>
              </div>
            )
          )}
        </div>
      )}

      {tab === "rules" && (
        <div className="card">
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 13,
            }}
          >
            {[
              "One submission per 30 minutes per problem",
              "External APIs allowed unless specified",
              "Code sharing is prohibited",
              "Maximum file size: 100MB",
            ].map((rule) => (
              <li
                key={rule}
                style={{
                  display: "flex",
                  gap: 10,
                  fontSize: 14,
                  color:
                    "var(--text2)",
                }}
              >
                <span
                  style={{
                    color:
                      "var(--accent)",
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>

                {rule}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}