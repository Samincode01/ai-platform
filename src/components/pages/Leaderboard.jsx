export default function Leaderboard() {
  return (
    <div
      style={{
        padding: "100px 32px 60px",
        maxWidth: 1040,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
            Live Rankings
          </p>

          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: 38,
              fontWeight: 400,
              marginBottom: 4,
            }}
          >
            Leader
            <em
              style={{
                color: "var(--accent)",
                fontStyle: "italic",
              }}
            >
              board
            </em>
          </h2>

          <p
            style={{
              color: "var(--text2)",
              fontSize: 13.5,
            }}
          >
            NeuralArena AI Challenge ·
            Updated just now
          </p>
        </div>

        <div className="live-badge">
          <div className="live-dot" />
          Live
        </div>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Participant</th>
            <th>Institution</th>
            <th>Track</th>
            <th>Score</th>
            <th>Subs</th>
            <th>Last Submit</th>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
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
                  JD
                </div>

                John Doe
              </div>
            </td>

            <td
              style={{
                color: "var(--text2)",
                fontSize: 13,
              }}
            >
              MIT
            </td>

            <td>
              <span className="badge badge-cyan">
                NLP
              </span>
            </td>

            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span className="mono">
                  9,850
                </span>

                <div className="score-bar-bg">
                  <div
                    className="score-bar"
                    style={{ width: "98%" }}
                  />
                </div>
              </div>
            </td>

            <td className="mono">
              42
            </td>

            <td
              style={{
                color: "var(--text3)",
                fontSize: 12.5,
              }}
            >
              2 mins ago
            </td>
          </tr>

          <tr>
            <td>
              <span className="rank-num">
                #2
              </span>
            </td>

            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
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
                  AS
                </div>

                Alice Smith
              </div>
            </td>

            <td
              style={{
                color: "var(--text2)",
                fontSize: 13,
              }}
            >
              Stanford
            </td>

            <td>
              <span className="badge badge-cyan">
                Vision
              </span>
            </td>

            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span className="mono">
                  9,420
                </span>

                <div className="score-bar-bg">
                  <div
                    className="score-bar"
                    style={{ width: "94%" }}
                  />
                </div>
              </div>
            </td>

            <td className="mono">
              37
            </td>

            <td
              style={{
                color: "var(--text3)",
                fontSize: 12.5,
              }}
            >
              5 mins ago
            </td>
          </tr>

          <tr>
            <td>
              <span className="rank-num">
                #3
              </span>
            </td>

            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
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
                  RK
                </div>

                Rahul Khan
              </div>
            </td>

            <td
              style={{
                color: "var(--text2)",
                fontSize: 13,
              }}
            >
              BUET
            </td>

            <td>
              <span className="badge badge-cyan">
                Robotics
              </span>
            </td>

            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span className="mono">
                  8,970
                </span>

                <div className="score-bar-bg">
                  <div
                    className="score-bar"
                    style={{ width: "89%" }}
                  />
                </div>
              </div>
            </td>

            <td className="mono">
              31
            </td>

            <td
              style={{
                color: "var(--text3)",
                fontSize: 12.5,
              }}
            >
              9 mins ago
            </td>
          </tr>
        </tbody>
      </table>

      <div
        style={{
          textAlign: "center",
          marginTop: 14,
          fontSize: 13,
          color: "var(--text3)",
        }}
      >
        Showing 3 participants
      </div>
    </div>
  );
}