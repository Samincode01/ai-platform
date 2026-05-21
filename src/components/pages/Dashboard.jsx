import { Link } from "react-router";
import { useState } from "react";

export default function Dashboard() {
  const [tab, setTab] = useState("o");

  const user = {
    name: "John Doe",
    track: "Computer Vision",
  };

  const problems = [
    {
      id: "A",
      title:
        "Plant Disease Classification",
      difficulty: "Easy",
      points: 500,
    },
    {
      id: "B",
      title:
        "Sentiment Analysis System",
      difficulty: "Medium",
      points: 750,
    },
    {
      id: "C",
      title: "Object Detection",
      difficulty: "Hard",
      points: 1000,
    },
  ];

  const submissions = [
    {
      id: 1021,
      problem:
        "Plant Disease Classification",
      language: "Python",
      score: 92.4,
      status: "Accepted",
    },
    {
      id: 1025,
      problem:
        "Sentiment Analysis System",
      language: "Python",
      score: 85.7,
      status: "Pending",
    },
  ];

  return (
    <div className="dash-content">
      <div className="dash-header">
        <div>
          <div className="dash-title">
            Good morning,{" "}
            {user.name.split(" ")[0]} 👋
          </div>

          <div className="dash-sub">
            NeuralArena AI Challenge
            2026 · {user.track} · Rank
            #12
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          <div className="live-badge">
            <div className="live-dot" />
            Contest Active
          </div>

          <Link
            to="/problem"
            className="btn btn-primary"
          >
            + Submit Solution
          </Link>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">
            Current Rank
          </div>

          <div className="stat-value">
            #12
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Total Score
          </div>

          <div className="stat-value">
            2,340
          </div>

          <div className="stat-change neutral">
            of 3,000 max
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Submissions
          </div>

          <div className="stat-value">
            14
          </div>

          <div className="stat-change neutral">
            9 accepted
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Queue
          </div>

          <div className="stat-value">
            3
          </div>

          <div className="stat-change neutral">
            in queue
          </div>
        </div>
      </div>

      <div className="tab-nav">
        <button
          className={`tab-btn ${
            tab === "o"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("o")}
        >
          Overview
        </button>

        <button
          className={`tab-btn ${
            tab === "p"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("p")}
        >
          Problems
        </button>

        <button
          className={`tab-btn ${
            tab === "s"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("s")}
        >
          My Submissions
        </button>
      </div>

      {tab === "o" && (
        <div
          className="grid-2"
          style={{ gap: 20 }}
        >
          <div>
            <div className="dash-section-header">
              <div className="dash-section-title">
                Problem Progress
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {problems.map(
                (problem) => (
                  <Link
                    to="/problem"
                    key={problem.id}
                    className="problem-card"
                    style={{
                      textDecoration:
                        "none",
                      color: "inherit",
                    }}
                  >
                    <div className="problem-id">
                      {problem.id}
                    </div>

                    <div className="problem-info">
                      <div className="problem-name">
                        {problem.title}
                      </div>

                      <div
                        className={`problem-sub diff-${problem.difficulty.toLowerCase()}`}
                      >
                        {
                          problem.difficulty
                        }{" "}
                        ·{" "}
                        {
                          problem.points
                        }{" "}
                        pts
                      </div>
                    </div>

                    <span className="badge badge-green">
                      Active
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <div className="dash-section-header">
              <div className="dash-section-title">
                Mini Leaderboard
              </div>
            </div>

            <div
              className="card"
              style={{
                padding: 0,
                overflow: "hidden",
              }}
            >
              <table
                className="data-table"
                style={{
                  border: "none",
                }}
              >
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Participant</th>
                    <th>Score</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <span className="rank-num">
                        #1
                      </span>
                    </td>

                    <td>
                      Alice Smith
                    </td>

                    <td className="mono">
                      2,950
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="rank-num">
                        #2
                      </span>
                    </td>

                    <td>
                      Rahul Khan
                    </td>

                    <td className="mono">
                      2,780
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="rank-num">
                        #12
                      </span>
                    </td>

                    <td
                      style={{
                        color:
                          "var(--accent)",
                        fontWeight: 700,
                      }}
                    >
                      You (John Doe)
                    </td>

                    <td
                      className="mono"
                      style={{
                        color:
                          "var(--accent)",
                      }}
                    >
                      2,340
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Link
              to="/leaderboard"
              className="btn btn-outline btn-sm"
              style={{
                marginTop: 10,
                width: "100%",
              }}
            >
              Full Leaderboard →
            </Link>
          </div>
        </div>
      )}

      {tab === "p" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {problems.map((problem) => (
            <Link
              to="/problem"
              key={problem.id}
              className="problem-card"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="problem-id">
                {problem.id}
              </div>

              <div className="problem-info">
                <div className="problem-name">
                  {problem.title}
                </div>

                <div className="problem-sub">
                  {
                    problem.points
                  }{" "}
                  pts · 10 submissions
                  allowed
                </div>
              </div>

              <span className="badge badge-gray">
                {
                  problem.difficulty
                }
              </span>
            </Link>
          ))}
        </div>
      )}

      {tab === "s" && (
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Language</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {submissions.map((sub) => (
              <tr key={sub.id}>
                <td className="mono">
                  #{sub.id}
                </td>

                <td>
                  {sub.problem}
                </td>

                <td className="mono">
                  {sub.language}
                </td>

                <td className="mono">
                  {sub.score}
                </td>

                <td>
                  <span className="badge badge-green">
                    {sub.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}