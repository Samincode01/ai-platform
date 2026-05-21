export default function JudgeProblems() {
  const problems = [
    {
      id: "A",
      title:
        "Plant Disease Classification",
      track: "Computer Vision",
      points: 500,
      difficulty: "Easy",
      limit: 10,
      attempts: 248,
    },
    {
      id: "B",
      title:
        "Sentiment Analysis System",
      track: "NLP",
      points: 750,
      difficulty: "Medium",
      limit: 8,
      attempts: 174,
    },
    {
      id: "C",
      title:
        "Autonomous Navigation",
      track: "Robotics",
      points: 1000,
      difficulty: "Hard",
      limit: 5,
      attempts: 92,
    },
  ];

  return (
    <div className="dash-content">
      <div className="dash-header">
        <div>
          <div className="dash-title">
            Problem Management
          </div>

          <div className="dash-sub">
            Create and manage
            contest problems
          </div>
        </div>

        <button className="btn btn-primary">
          + Create Problem
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {problems.map((problem) => (
          <div
            key={problem.id}
            className="problem-card"
            style={{
              cursor: "default",
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
                {problem.track} ·{" "}
                {problem.points} pts ·{" "}
                {
                  problem.difficulty
                }{" "}
                · {problem.limit}{" "}
                submissions ·{" "}
                {
                  problem.attempts
                }{" "}
                attempts
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
              }}
            >
              <button className="btn btn-outline btn-sm">
                Edit
              </button>

              <button className="btn btn-danger btn-sm">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}