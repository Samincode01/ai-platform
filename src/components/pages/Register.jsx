import { Link } from "react-router";

export default function Register() {
  return (
    <div
      style={{
        padding: "100px 24px 60px",
        maxWidth: 580,
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: 32 }}>
        <p
          className="section-eyebrow"
          style={{ marginBottom: 10 }}
        >
          Join
        </p>

        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: 38,
            fontWeight: 400,
            marginBottom: 8,
          }}
        >
          Create{" "}
          <em
            style={{
              color: "var(--accent)",
              fontStyle: "italic",
            }}
          >
            Account
          </em>
        </h2>

        <p
          style={{
            color: "var(--text2)",
            fontSize: 14.5,
          }}
        >
          Register to participate in NeuralArena Hackathon
        </p>
      </div>

      <form>
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
          <label>Email Address</label>
          <input
            type="email"
            placeholder="john@example.com"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
          />
        </div>

        <div className="grid-2">
          <div className="form-group">
            <label>Institution</label>
            <input placeholder="Your University" />
          </div>

          <div className="form-group">
            <label>Country</label>

            <select>
              <option>Bangladesh</option>
              <option>India</option>
              <option>Pakistan</option>
              <option>USA</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          Create Account →
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: 16,
            fontSize: 13.5,
            color: "var(--text2)",
          }}
        >
          Already registered?{" "}
          <Link to="/login">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}