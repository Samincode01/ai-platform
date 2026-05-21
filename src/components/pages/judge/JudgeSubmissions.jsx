import { useState } from "react";

export default function JudgeSubmissions() {
  const [filter, setFilter] = useState("all");

  const submissions = [
    {
      id: 1021,
      participant: "John Doe",
      problem: "A",
      language: "Python",
      score: 92.4,
      status: "Accepted",
      submitted: "12m ago",
    },
    {
      id: 1025,
      participant: "Alice Smith",
      problem: "B",
      language: "Python",
      score: 85.1,
      status: "Pending",
      submitted: "28m ago",
    },
    {
      id: 1030,
      participant: "Rahul Khan",
      problem: "C",
      language: "C++",
      score: 78.5,
      status: "Review",
      submitted: "1h ago",
    },
    {
      id: 1034,
      participant: "Sara Lee",
      problem: "A",
      language: "Python",
      score: 61.2,
      status: "Rejected",
      submitted: "2h ago",
    },
  ];

  const visible =
    filter === "all"
      ? submissions
      : submissions.filter(
          (s) =>
            s.status.toLowerCase() === filter
        );

  return (
    <div className="dash-content">
      <div className="dash-header">
        <div>
          <div className="dash-title">
            Review Submissions
          </div>

          <div className="dash-sub">
            Score and approve participant
            solutions
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <button
            type="button"
            className={`btn btn-sm ${
              filter === "all"
                ? "btn-primary"
                : "btn-outline"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            type="button"
            className={`btn btn-sm ${
              filter === "pending"
                ? "btn-primary"
                : "btn-outline"
            }`}
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>

          <button
            type="button"
            className={`btn btn-sm ${
              filter === "review"
                ? "btn-primary"
                : "btn-outline"
            }`}
            onClick={() => setFilter("review")}
          >
            In Review
          </button>
        </div>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Participant</th>
            <th>Problem</th>
            <th>Language</th>
            <th>Score</th>
            <th>Status</th>
            <th>Submitted</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {visible.map((submission) => (
            <tr key={submission.id}>
              <td className="mono">
                #{submission.id}
              </td>

              <td>
                {submission.participant}
              </td>

              <td>{submission.problem}</td>

              <td>{submission.language}</td>

              <td className="mono">
                {submission.score}
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
                      : submission.status ===
                        "Rejected"
                      ? "badge-red"
                      : "badge-cyan"
                  }`}
                >
                  {submission.status}
                </span>
              </td>

              <td
                style={{
                  color: "var(--text2)",
                  fontSize: 13,
                }}
              >
                {submission.submitted}
              </td>

              <td>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                  >
                    View
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                  >
                    Score
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
