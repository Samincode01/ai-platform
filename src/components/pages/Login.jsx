import { Link } from "react-router";

export default function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">NeuralArena</div>

          <div className="auth-title">
            Welcome Back
          </div>

          <div className="auth-sub">
            Sign in to your account
          </div>
        </div>


        <div className="auth-divider">
          or sign in with credentials
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            placeholder="test@gmail.com"
          />
        </div>

        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            placeholder="••••••••"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              fontSize: 13,
              color: "var(--text2)",
              margin: 0,
              textTransform: "none",
              letterSpacing: 0,
            }}
          >
            <input
              type="checkbox"
              style={{
                width: "auto",
                accentColor: "var(--accent)",
              }}
            />

            Remember me
          </label>

          <a
            style={{
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Forgot password?
          </a>
        </div>

        <button
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          Sign In →
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: 16,
            fontSize: 13.5,
            color: "var(--text2)",
          }}
        >
          New here?{" "}
          <Link to="/register">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}