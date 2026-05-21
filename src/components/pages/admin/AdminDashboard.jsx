import { Link } from "react-router";

export default function AdminDashboard() {
  const users = 1248;
  const participants = 1086;
  const submissions = 4321;
  const revenue = 524000;
  const pending = 14;
  const queue = 3;

  return (
    <div className="dash-content">
      <div className="dash-header">
        <div>
          <div className="dash-title">
            Admin Dashboard
          </div>

          <div className="dash-sub">
            NeuralArena Platform
            Control Center
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <Link
            to="/admin/contests"
            className="btn btn-outline"
          >
            Manage Contests
          </Link>

          <button className="btn btn-primary">
            + New Contest
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">
            Total Users
          </div>

          <div className="stat-value">
            {users}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Participants
          </div>

          <div className="stat-value">
            {participants}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Submissions
          </div>

          <div className="stat-value">
            {submissions}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Revenue (BDT)
          </div>

          <div className="stat-value">
            ৳
            {revenue.toLocaleString()}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Pending Payments
          </div>

          <div className="stat-value">
            {pending}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Queue Length
          </div>

          <div className="stat-value">
            {queue}
          </div>
        </div>
      </div>

      <div
        className="grid-2"
        style={{ gap: 20 }}
      >
        <div className="dash-section">
          <div className="dash-section-header">
            <div className="dash-section-title">
              Recent Registrations
            </div>

            <Link
              to="/admin/users"
              className="btn btn-outline btn-sm"
            >
              View All
            </Link>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Track</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>John Doe</td>

                <td>
                  <span className="badge badge-cyan">
                    CV
                  </span>
                </td>

                <td>
                  <span className="badge badge-green">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>Alice Smith</td>

                <td>
                  <span className="badge badge-cyan">
                    NLP
                  </span>
                </td>

                <td>
                  <span className="badge badge-yellow">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>Rahul Khan</td>

                <td>
                  <span className="badge badge-cyan">
                    Robotics
                  </span>
                </td>

                <td>
                  <span className="badge badge-green">
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="dash-section">
          <div className="dash-section-header">
            <div className="dash-section-title">
              System Status
            </div>

            <span
              style={{
                fontSize: 12,
                color:
                  "var(--success)",
              }}
            >
              All systems operational
            </span>
          </div>

          <div className="card">
            <div
              style={{
                display: "flex",
                flexDirection:
                  "column",
                gap: 12,
              }}
            >
              {[
                [
                  "Judge Engine",
                  "Online",
                ],
                [
                  "Submission Queue",
                  `${queue} queued`,
                ],
                [
                  "WebSocket Server",
                  "Online",
                ],
                [
                  "Payment Gateway",
                  "Online",
                ],
                [
                  "Database",
                  "Healthy",
                ],
              ].map(
                ([name, value]) => (
                  <div
                    key={name}
                    style={{
                      display:
                        "flex",
                      justifyContent:
                        "space-between",
                      alignItems:
                        "center",
                      fontSize: 13.5,
                    }}
                  >
                    <span
                      style={{
                        color:
                          "var(--text2)",
                      }}
                    >
                      {name}
                    </span>

                    <span>
                      <span className="status-dot status-online" />

                      <span
                        style={{
                          fontSize: 12,
                          color:
                            "var(--success)",
                        }}
                      >
                        {value}
                      </span>
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}