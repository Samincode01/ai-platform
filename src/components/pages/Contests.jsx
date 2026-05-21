import { Link } from "react-router";
import { useState } from "react";

export default function Contests() {
  const [tab, setTab] = useState("up");

  const contest = {
    title: "NeuralArena AI Challenge 2026",
    startAt: "2026-06-20",
    tracks: [
      "Computer Vision",
      "NLP",
      "Robotics",
    ],
  };

  return (
    <div
      style={{
        padding: "100px 32px 60px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: 32 }}>
        <p
          className="section-eyebrow"
          style={{ marginBottom: 10 }}
        >
          Browse
        </p>

        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: 38,
            fontWeight: 400,
            marginBottom: 8,
          }}
        >
          AI{" "}
          <em
            style={{
              color: "var(--accent)",
              fontStyle: "italic",
            }}
          >
            Contests
          </em>
        </h2>

        <p style={{ color: "var(--text2)" }}>
          Compete in live hackathons
          and revisit past challenges
        </p>
      </div>

      <div className="tab-nav">
        <button
          className={`tab-btn ${
            tab === "up"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("up")}
        >
          🟢 Upcoming
        </button>

        <button
          className={`tab-btn ${
            tab === "live"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("live")}
        >
          🔴 Live
        </button>

        <button
          className={`tab-btn ${
            tab === "past"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("past")}
        >
          🏁 Past
        </button>
      </div>

      {tab === "up" && (
        <Link
          to="/contest"
          className="contest-card"
          style={{
            display: "block",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="contest-top">
            <div>
              <div className="contest-name">
                {contest.title}
              </div>

              <div className="contest-meta">
                <span className="meta-item">
                  📅{" "}
                  {new Date(
                    contest.startAt
                  ).toDateString()}
                </span>

                <span className="meta-item">
                  ⏱ 48 hours
                </span>

                <span className="meta-item">
                  🏆 ৳5,00,000 prize
                </span>
              </div>
            </div>

            <span className="badge badge-green">
              Registration Open
            </span>
          </div>

          <div className="contest-tracks">
            {contest.tracks.map(
              (track) => (
                <span
                  key={track}
                  className="badge badge-cyan"
                >
                  {track}
                </span>
              )
            )}
          </div>
        </Link>
      )}

      {tab === "live" && (
        <div className="alert alert-info">
          No live contests at the
          moment.
        </div>
      )}

      {tab === "past" && (
        <div className="contest-card">
          <div className="contest-top">
            <div>
              <div className="contest-name">
                NeuralArena AI Challenge
                2024
              </div>

              <div className="contest-meta">
                <span className="meta-item">
                  📅 Dec 10–12, 2024
                </span>

                <span className="meta-item">
                  👥 847 participants
                </span>
              </div>
            </div>

            <span className="badge badge-gray">
              Completed
            </span>
          </div>

          <div className="contest-tracks">
            <span className="badge badge-cyan">
              CV
            </span>

            <span className="badge badge-indigo">
              NLP
            </span>
          </div>

          <Link
            to="/leaderboard"
            className="btn btn-outline btn-sm"
            style={{ marginTop: 14 }}
          >
            View Results
          </Link>
        </div>
      )}
    </div>
  );
}