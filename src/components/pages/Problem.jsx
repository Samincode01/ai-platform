import { useState } from "react";

export default function Problems() {
  const [tab, setTab] = useState("s");
  const [lang, setLang] =
    useState("Python 3.10");

  const problem = {
    id: "A",
    title:
      "Plant Disease Classification",
    track: "Computer Vision",
    points: 500,
    difficulty: "Medium",
    limit: 10,
    metric: "Accuracy (%)",
  };

  return (
    <div
      style={{
        padding: "100px 32px 60px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: 300,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 22,
            }}
          >
            <div
              className="problem-id"
              style={{
                fontSize: 15,
                padding: "7px 16px",
              }}
            >
              {problem.id}
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
                {problem.title}
              </div>

              <div
                style={{
                  fontSize: 13,
                  color:
                    "var(--text2)",
                }}
              >
                {problem.track} ·{" "}
                {problem.points} pts ·{" "}
                <span className="diff-medium">
                  {problem.difficulty}
                </span>
              </div>
            </div>
          </div>

          <div className="tab-nav">
            <button
              className={`tab-btn ${
                tab === "s"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setTab("s")
              }
            >
              Statement
            </button>

            <button
              className={`tab-btn ${
                tab === "u"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setTab("u")
              }
            >
              Submit
            </button>

            <button
              className={`tab-btn ${
                tab === "m"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setTab("m")
              }
            >
              My Submissions
            </button>
          </div>

          {tab === "s" && (
            <div>
              <div
                className="card"
                style={{
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color:
                      "var(--accent)",
                    marginBottom: 10,
                    letterSpacing:
                      ".08em",
                    textTransform:
                      "uppercase",
                  }}
                >
                  Problem Statement
                </div>

                <p
                  style={{
                    fontSize: 14,
                    color:
                      "var(--text2)",
                    lineHeight: 1.8,
                  }}
                >
                  Build a machine
                  learning model that
                  classifies plant
                  diseases from leaf
                  images with the
                  highest possible
                  accuracy.
                </p>
              </div>

              <div className="card">
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color:
                      "var(--accent)",
                    marginBottom: 12,
                    letterSpacing:
                      ".08em",
                    textTransform:
                      "uppercase",
                  }}
                >
                  Constraints
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "1fr 1fr",
                    gap: 10,
                    fontSize: 13,
                  }}
                >
                  <div>
                    <span
                      style={{
                        color:
                          "var(--text3)",
                      }}
                    >
                      Max file size:
                    </span>{" "}
                    100 MB
                  </div>

                  <div>
                    <span
                      style={{
                        color:
                          "var(--text3)",
                      }}
                    >
                      Time limit:
                    </span>{" "}
                    10 mins
                  </div>

                  <div>
                    <span
                      style={{
                        color:
                          "var(--text3)",
                      }}
                    >
                      Memory:
                    </span>{" "}
                    8 GB
                  </div>

                  <div>
                    <span
                      style={{
                        color:
                          "var(--text3)",
                      }}
                    >
                      Submissions:
                    </span>{" "}
                    {problem.limit}
                  </div>

                  <div>
                    <span
                      style={{
                        color:
                          "var(--text3)",
                      }}
                    >
                      GPU:
                    </span>{" "}
                    Available
                  </div>

                  <div>
                    <span
                      style={{
                        color:
                          "var(--text3)",
                      }}
                    >
                      Metric:
                    </span>{" "}
                    {problem.metric}
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === "u" && (
            <div>
              <div className="form-group">
                <label>
                  Language
                </label>

                <select
                  value={lang}
                  onChange={(e) =>
                    setLang(
                      e.target.value
                    )
                  }
                >
                  <option>
                    Python 3.10
                  </option>

                  <option>
                    C++ 17
                  </option>

                  <option>
                    Java 17
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  Upload Solution
                </label>

                <div className="file-drop">
                  <div className="file-drop-icon">
                    📤
                  </div>

                  <div className="file-drop-title">
                    Upload your
                    solution file
                  </div>

                  <div className="file-drop-sub">
                    .py, .cpp, .java,
                    .zip — Max 100MB
                  </div>
                </div>
              </div>

              <div
                style={{
                  background:
                    "var(--bg3)",
                  borderRadius:
                    "var(--radius-sm)",
                  padding: 12,
                  fontSize: 13,
                  color:
                    "var(--text2)",
                  marginBottom: 16,
                }}
              >
                📌 Remaining
                submissions:{" "}
                <strong
                  style={{
                    color:
                      "var(--text)",
                  }}
                >
                  7 of 10
                </strong>
              </div>

              <button
                className="btn btn-primary"
                style={{
                  width: "100%",
                }}
              >
                ⚡ Submit Solution
              </button>
            </div>
          )}

          {tab === "m" && (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Sub #</th>
                  <th>Score</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="mono">
                    #1021
                  </td>

                  <td className="mono">
                    92.4
                  </td>

                  <td>
                    <span className="badge badge-green">
                      Accepted
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="mono">
                    #1018
                  </td>

                  <td className="mono">
                    85.1
                  </td>

                  <td>
                    <span className="badge badge-yellow">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}