import { Link, useNavigate, useLocation } from "react-router";

function NavLink({ to, children }) {
  const path = useLocation().pathname;
  const active = path === to;

  return (
    <li>
      <Link
        to={to}
        className={active ? "active" : ""}
      >
        {children}
      </Link>
    </li>
  );
}

export function Navbar({
  showSidebarToggle = false,
  sidebarOpen = false,
  onSidebarToggle,
}) {
  const nav = useNavigate();

  return (
    <nav id="navbar">
      <div className="nav-start">
        {showSidebarToggle && (
          <button
            type="button"
            className="nav-hamburger"
            onClick={onSidebarToggle}
            aria-label={
              sidebarOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={sidebarOpen}
          >
            {sidebarOpen ? "✕" : "☰"}
          </button>
        )}

        <Link to="/" className="nav-logo">
          <div className="logo-pulse" />

          Neural
          <em>Arena</em>
        </Link>
      </div>

      <ul className="nav-links">
        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/contests">
          Contests
        </NavLink>

        <NavLink to="/how">
          How to Participate
        </NavLink>

        <NavLink to="/leaderboard">
          Leaderboard
        </NavLink>

        <NavLink to="/faq">
          FAQ
        </NavLink>
      </ul>

      <div className="nav-actions">
        <button
          className="btn btn-outline btn-sm"
          onClick={() => nav("/login")}
        >
          Sign In
        </button>

        <button
          className="btn btn-primary btn-sm"
          onClick={() => nav("/register")}
        >
          Register Now
        </button>
      </div>
    </nav>
  );
}