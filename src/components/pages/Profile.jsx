import { useState } from "react";

export default function Profile() {
  const [tab, setTab] = useState("h");

  const user = {
    name: "John Doe",
    email: "john@example.com",
    institution: "MIT",
    country: "USA",
    track: "Computer Vision",
  };

  return (
    <div
      style={{
        padding: "100px 32px 60px",
        maxWidth: 800,
        margin: "0 auto",
      }}
    >
      <div
        className="card"
        style={{ marginBottom: 22 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 24,
            flexWrap: "wrap",
          }}
        >
          <div className="avatar avatar-lg">
            JD
          </div>

          <div>
            <div
              style={{
                fontFamily:
                  "var(--serif)",
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              {user.name}
            </div>

            <div
              style={{
                color:
                  "var(--text2)",
                fontSize: 13.5,
                marginTop: 2,
              }}
            >
              {user.email} ·{" "}
              {user.institution} ·{" "}
              {user.country}
            </div>

            <div style={{ marginTop: 8 }}>
              <span className="badge badge-cyan">
                {user.track}
              </span>
            </div>
          </div>

          <button
            className="btn btn-outline btn-sm"
            style={{
              marginLeft: "auto",
            }}
          >
            Edit Profile
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3,1fr)",
            textAlign: "center",
            borderTop:
              "1px solid var(--border)",
            paddingTop: 20,
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                fontFamily:
                  "var(--serif)",
                fontSize: 26,
                fontStyle: "italic",
              }}
            >
              1
            </div>

            <div className="profile-stat-label">
              Hackathons
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily:
                  "var(--serif)",
                fontSize: 26,
                color:
                  "var(--accent)",
                fontStyle: "italic",
              }}
            >
              #12
            </div>

            <div className="profile-stat-label">
              Best Rank
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily:
                  "var(--serif)",
                fontSize: 26,
                fontStyle: "italic",
              }}
            >
              24
            </div>

            <div className="profile-stat-label">
              Submissions
            </div>
          </div>
        </div>
      </div>

      <div className="tab-nav">
        <button
          className={`tab-btn ${
            tab === "h"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("h")}
        >
          History
        </button>

        <button
          className={`tab-btn ${
            tab === "s"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("s")}
        >
          Settings
        </button>
      </div>

      {tab === "h" && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Hackathon</th>
              <th>Track</th>
              <th>Final Rank</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                NeuralArena 2026
              </td>

              <td>
                <span className="badge badge-cyan">
                  {user.track}
                </span>
              </td>

              <td
                className="mono"
                style={{
                  color:
                    "var(--accent)",
                }}
              >
                #12 (ongoing)
              </td>
            </tr>
          </tbody>
        </table>
      )}

      {tab === "s" && (
        <div className="card">
          <div className="form-group">
            <label>
              Full Name
            </label>

            <input
              defaultValue={user.name}
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              defaultValue={user.email}
            />
          </div>

          <div className="form-group">
            <label>
              Institution
            </label>

            <input
              defaultValue={
                user.institution
              }
            />
          </div>

          <button className="btn btn-primary">
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}