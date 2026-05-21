import { Link } from "react-router";

export default function AdminContests() {
  const contests = [
    {
      id: 1,
      title:
        "NeuralArena AI Challenge 2026",
      startAt: "2026-06-20",
      status: "Active",
      tracks: [
        "Computer Vision",
        "NLP",
        "Robotics",
      ],
      participants: 1248,
    },
    {
      id: 2,
      title:
        "Deep Learning Sprint 2026",
      startAt: "2026-08-12",
      status: "Upcoming",
      tracks: [
        "Generative AI",
        "LLMs",
      ],
      participants: 842,
    },
  ];

  return (
    <div className="dash-content">
      <div className="dash-header">
        <div>
          <div className="dash-title">
            Contest Management
          </div>

          <div className="dash-sub">
            Create and manage
            hackathons
          </div>
        </div>

        <button className="btn btn-primary">
          + New Contest
        </button>
      </div>

      {contests.map((contest) => (
        <div
          className="contest-card"
          key={contest.id}
          style={{
            marginBottom: 14,
          }}
        >
          <div className="contest-top">
            <div>
              <div className="contest-name">
                {contest.title}
              </div>

              <div className="contest-meta">
                <span className="meta-item">
                  📅{" "}
                  {new Date(
                    contest.startAt
                  ).toDateString()}
                </span>

                <span className="meta-item">
                  👥{" "}
                  {
                    contest.participants
                  }{" "}
                  registered
                </span>
              </div>
            </div>

            <span
              className={`badge ${
                contest.status ===
                "Active"
                  ? "badge-green"
                  : "badge-cyan"
              }`}
            >
              {contest.status}
            </span>
          </div>

          <div className="contest-tracks">
            {contest.tracks.map(
              (track) => (
                <span
                  key={track}
                  className="badge badge-cyan"
                >
                  {track}
                </span>
              )
            )}
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 18,
              flexWrap: "wrap",
            }}
          >
            <button className="btn btn-outline btn-sm">
              ⚖️ Assign Judges
            </button>

            <Link
              to="/judge/ranklist"
              className="btn btn-outline btn-sm"
            >
              📊 Ranklist
            </Link>

            <button className="btn btn-danger btn-sm">
              ⏸ Pause
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}