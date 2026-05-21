import { useState } from "react";

export default function Users() {
  const [tab, setTab] = useState("p");

  const participants = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      institution: "MIT",
      track: "CV",
      paymentStatus: "Completed",
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice@example.com",
      institution: "Stanford",
      track: "NLP",
      paymentStatus: "Pending",
    },
  ];

  const judges = [
    {
      id: 1,
      name: "Dr. Rahman",
      specialty: "Computer Vision",
      email: "judge@example.com",
    },
  ];

  const admins = [
    {
      id: 1,
      name: "Admin User",
    },
  ];

  return (
    <div className="dash-content">
      <div className="dash-header">
        <div>
          <div className="dash-title">
            User Management
          </div>

          <div className="dash-sub">
            Manage participants,
            judges, and admins
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <input
            type="text"
            placeholder="Search users..."
            style={{ width: 220 }}
          />

          <button className="btn btn-outline">
            + Create Judge
          </button>

          <button className="btn btn-primary">
            ↓ Export
          </button>
        </div>
      </div>

      <div className="tab-nav">
        <button
          className={`tab-btn ${
            tab === "p"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("p")}
        >
          Participants (
          {participants.length})
        </button>

        <button
          className={`tab-btn ${
            tab === "j"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("j")}
        >
          Judges ({judges.length})
        </button>

        <button
          className={`tab-btn ${
            tab === "a"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("a")}
        >
          Admins ({admins.length})
        </button>
      </div>

      {tab === "p" && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Institution</th>
              <th>Track</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {participants.map(
              (user) => (
                <tr key={user.id}>
                  <td>
                    <div
                      style={{
                        display:
                          "flex",
                        alignItems:
                          "center",
                        gap: 8,
                      }}
                    >
                      <div
                        className="avatar"
                        style={{
                          width: 28,
                          height: 28,
                          fontSize: 10,
                        }}
                      >
                        {user.name
                          .split(
                            " "
                          )
                          .map(
                            (
                              n
                            ) =>
                              n[0]
                          )
                          .join(
                            ""
                          )}
                      </div>

                      {user.name}
                    </div>
                  </td>

                  <td
                    style={{
                      color:
                        "var(--text2)",
                      fontSize: 13,
                    }}
                  >
                    {user.email}
                  </td>

                  <td
                    style={{
                      color:
                        "var(--text2)",
                      fontSize: 13,
                    }}
                  >
                    {
                      user.institution
                    }
                  </td>

                  <td>
                    <span className="badge badge-cyan">
                      {user.track}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        user.paymentStatus ===
                        "Completed"
                          ? "badge-green"
                          : "badge-yellow"
                      }`}
                    >
                      {
                        user.paymentStatus
                      }
                    </span>
                  </td>

                  <td>
                    <div
                      style={{
                        display:
                          "flex",
                        gap: 6,
                      }}
                    >
                      <button className="btn btn-success btn-sm">
                        Approve
                      </button>

                      <button className="btn btn-danger btn-sm">
                        Ban
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}

      {tab === "j" && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Judge</th>
              <th>Specialty</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {judges.map(
              (judge) => (
                <tr key={judge.id}>
                  <td>
                    {judge.name}
                  </td>

                  <td>
                    {
                      judge.specialty
                    }
                  </td>

                  <td>
                    {judge.email}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}

      {tab === "a" && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Admin</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {admins.map(
              (admin) => (
                <tr key={admin.id}>
                  <td>
                    {admin.name}
                  </td>

                  <td>
                    <span className="badge badge-red">
                      Admin
                    </span>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}