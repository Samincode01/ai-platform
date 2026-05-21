export default function JudgeRanklist() {
  const leaderboard = [
    {
      id: 1,
      name: "Alice Smith",
      scores: [500, 750, 1000],
      total: 2250,
    },
    {
      id: 2,
      name: "John Doe",
      scores: [480, 700, 920],
      total: 2100,
    },
    {
      id: 3,
      name: "Rahul Khan",
      scores: [450, 680, 870],
      total: 2000,
    },
  ];

  const problems = [
    { id: "A" },
    { id: "B" },
    { id: "C" },
  ];

  return (
    <div className="dash-content">
      <div className="dash-header">
        <div>
          <div className="dash-title">
            Ranklist Control
          </div>

          <div className="dash-sub">
            Manage leaderboard and
            rankings
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <button className="btn btn-outline">
            ❄️ Freeze
          </button>

          <button className="btn btn-outline">
            🔥 Unfreeze
          </button>

          <button className="btn btn-primary">
            ↻ Recalculate
          </button>
        </div>
      </div>

      <div className="alert alert-info">
        Leaderboard is currently{" "}
        <strong>LIVE</strong>.
        Rankings update in real-time.
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Rank</th>

            <th>Participant</th>

            {problems.map((problem) => (
              <th key={problem.id}>
                Prob {problem.id}
              </th>
            ))}

            <th>Total</th>

            <th>Override</th>
          </tr>
        </thead>

        <tbody>
          {leaderboard.map(
            (user, index) => (
              <tr
                key={user.id}
                className={
                  index === 0
                    ? "rank-1"
                    : index === 1
                    ? "rank-2"
                    : index === 2
                    ? "rank-3"
                    : ""
                }
              >
                <td>
                  <span className="rank-num">
                    #{index + 1}
                  </span>
                </td>

                <td>
                  {user.name}
                </td>

                {user.scores.map(
                  (
                    score,
                    scoreIndex
                  ) => (
                    <td
                      key={
                        scoreIndex
                      }
                      className="mono"
                    >
                      {score}
                    </td>
                  )
                )}

                <td
                  className="mono"
                  style={
                    index === 0
                      ? {
                          color:
                            "var(--accent)",
                        }
                      : undefined
                  }
                >
                  {user.total.toLocaleString()}
                </td>

                <td>
                  <button className="btn btn-outline btn-sm">
                    Edit
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}