import { useState } from "react";

function Shell({ title, children }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-title">
            {title}
          </div>

          <button className="modal-close">
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

export function CreateContestModal() {
  const [tracks, setTracks] = useState({
    "Computer Vision": true,
  });

  const toggle = (track) => {
    setTracks((prev) => ({
      ...prev,
      [track]: !prev[track],
    }));
  };

  return (
    <Shell title="Create Contest">
      <div className="form-group">
        <label>Contest Title</label>
        <input placeholder="NeuralArena 2026" />
      </div>

      <div className="form-group">
        <label>Description</label>

        <textarea
          rows={4}
          placeholder="Describe your contest..."
        />
      </div>

      <div className="grid-2">
        <div className="form-group">
          <label>Start Date</label>
          <input type="datetime-local" />
        </div>

        <div className="form-group">
          <label>End Date</label>
          <input type="datetime-local" />
        </div>
      </div>

      <div className="grid-2">
        <div className="form-group">
          <label>Registration Fee</label>
          <input type="number" placeholder="500" />
        </div>

        <div className="form-group">
          <label>Max Participants</label>
          <input type="number" placeholder="1000" />
        </div>
      </div>

      <div className="form-group">
        <label>Tracks</label>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            marginTop: 8,
          }}
        >
          {[
            "Computer Vision",
            "NLP",
            "Robotics",
            "Generative AI",
          ].map((track) => (
            <label
              key={track}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={!!tracks[track]}
                onChange={() => toggle(track)}
              />

              {track}
            </label>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 10,
          marginTop: 20,
        }}
      >
        <button className="btn btn-outline">
          Cancel
        </button>

        <button className="btn btn-primary">
          Create Contest
        </button>
      </div>
    </Shell>
  );
}

export function CreateProblemModal() {
  return (
    <Shell title="Create Problem">
      <div className="form-group">
        <label>Problem Title</label>
        <input placeholder="Image Classification" />
      </div>

      <div className="form-group">
        <label>Problem Statement</label>

        <textarea
          rows={5}
          placeholder="Describe the problem..."
        />
      </div>

      <div className="grid-2">
        <div className="form-group">
          <label>Points</label>
          <input type="number" placeholder="500" />
        </div>

        <div className="form-group">
          <label>Difficulty</label>

          <select>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Judging Type</label>

        <select>
          <option>Automated</option>
          <option>Manual</option>
          <option>Hybrid</option>
        </select>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 10,
          marginTop: 20,
        }}
      >
        <button className="btn btn-outline">
          Cancel
        </button>

        <button className="btn btn-primary">
          Create Problem
        </button>
      </div>
    </Shell>
  );
}

export function CreateJudgeModal() {
  return (
    <Shell title="Create Judge">
      <div className="grid-2">
        <div className="form-group">
          <label>First Name</label>
          <input placeholder="John" />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input placeholder="Doe" />
        </div>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="judge@example.com"
        />
      </div>

      <div className="form-group">
        <label>Specialty</label>

        <select>
          <option>Computer Vision</option>
          <option>NLP</option>
          <option>Robotics</option>
          <option>Generative AI</option>
        </select>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 10,
          marginTop: 20,
        }}
      >
        <button className="btn btn-outline">
          Cancel
        </button>

        <button className="btn btn-primary">
          Create Judge
        </button>
      </div>
    </Shell>
  );
}