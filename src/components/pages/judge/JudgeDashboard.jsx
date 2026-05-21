import { Link } from "react-router";

export default function JudgeDashboard() {
  const submissions = [
    {
      id: 1,
      participant: "John Doe",
      problem: "A",
      score: 92.4,
      status: "Accepted",
    },
    {
      id: 2,
      participant: "Alice Smith",
      problem: "B",
      score: 85.1,
      status: "Pending",
    },
    {
      id: 3,
      participant: "Rahul Khan",
      problem: "C",
      score: 78.5,
      status: "Review",
    },
  ];

  const pending = 2;

  return (
    <div className="dash-content">
      <div className="dash-header">
        <div>
          <div className="dash-title">
            Judge Dashboard
          </div>

          <div className="dash-sub">
            Dr. Rahman · Computer
            Vision Track
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <Link
            to="/judge/problems"
            className="btn btn-outline"
          >
            📋 Manage Problems
          </Link>

          <Link
            to="/judge/submissions"
            className="btn btn-primary"
          >
            ⚖️ Review Submissions
          </Link>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">
            Problems
          </div>

          <div className="stat-value">
            12
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Submissions
          </div>

          <div className="stat-value">
            248
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Pending Review
          </div>

          <div className="stat-value">
            {pending}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Contest
          </div>

          <div
            className="stat-value"
            style={{
              fontSize: 22,
              color:
                "var(--success)",
            }}
          >
            Active
          </div>
        </div>
      </div>

      <div
        className="grid-2"
        style={{ gap: 20 }}
      >
        <div>
          <div className="dash-section-header">
            <div className="dash-section-title">
              Contest Controls
            </div>
          </div>

          <div className="card">
            <div
              style={{
                display: "flex",
                flexDirection:
                  "column",
                gap: 9,
              }}
            >
              <button
                className="btn btn-outline"
                style={{
                  justifyContent:
                    "flex-start",
                }}
              >
                ❄️ Freeze Leaderboard
              </button>

              <button
                className="btn btn-outline"
                style={{
                  justifyContent:
                    "flex-start",
                }}
              >
                🔥 Unfreeze
                Leaderboard
              </button>

              <button
                className="btn btn-outline"
                style={{
                  justifyContent:
                    "flex-start",
                }}
              >
                ⏱ Extend Duration
              </button>

              <button
                className="btn btn-outline"
                style={{
                  justifyContent:
                    "flex-start",
                }}
              >
                ⏸ Pause Contest
              </button>

              <button
                className="btn btn-outline"
                style={{
                  justifyContent:
                    "flex-start",
                }}
              >
                🔑 Release Credentials
              </button>

              <button
                className="btn btn-outline"
                style={{
                  justifyContent:
                    "flex-start",
                }}
              >
                🔒 Restrict Login
              </button>

              <button
                className="btn btn-danger"
                style={{
                  justifyContent:
                    "flex-start",
                }}
              >
                🛑 End Contest
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="dash-section-header">
            <div className="dash-section-title">
              Recent Submissions
            </div>

            <Link
              to="/judge/submissions"
              className="btn btn-outline btn-sm"
            >
              See All
            </Link>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Participant</th>
                <th>Problem</th>
                <th>Score</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {submissions.map(
                (submission) => (
                  <tr
                    key={submission.id}
                  >
                    <td>
                      {
                        submission.participant
                      }
                    </td>

                    <td>
                      {
                        submission.problem
                      }
                    </td>

                    <td className="mono">
                      {
                        submission.score
                      }
                    </td>

                    <td>
                      <span
                        className={`badge ${
                          submission.status ===
                          "Accepted"
                            ? "badge-green"
                            : submission.status ===
                              "Pending"
                            ? "badge-yellow"
                            : "badge-cyan"
                        }`}
                      >
                        {
                          submission.status
                        }
                      </span>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}