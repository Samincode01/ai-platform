import {
  Link,
  useNavigate,
  useLocation,
} from "react-router";

function NavLink({
  to,
  children,
}) {
  const path =
    useLocation().pathname;

  const active = path === to;

  return (
    <li>
      <Link
        to={to}
        className={
          active ? "active" : ""
        }
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
    <nav
      id="navbar"
      className="flex items-center justify-between gap-2 px-3 py-3"
    >
      {/* Left */}
      <div className="flex items-center gap-2 min-w-0">
        {showSidebarToggle && (
          <button
            type="button"
            className="nav-hamburger flex-shrink-0"
            onClick={
              onSidebarToggle
            }
            aria-label={
              sidebarOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={
              sidebarOpen
            }
          >
            {sidebarOpen
              ? "✕"
              : "☰"}
          </button>
        )}

        <Link
          to="/"
          className="nav-logo flex items-center gap-2 whitespace-nowrap text-base sm:text-lg md:text-2xl"
        >
          <div className="logo-pulse" />

          <span>
            Neural
            <em>Arena</em>
          </span>
        </Link>
      </div>

      {/* Center */}
      <ul className="nav-links hidden xl:flex">
        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/contests">
          Contests
        </NavLink>

        <NavLink to="/how">
          How
        </NavLink>

        <NavLink to="/leaderboard">
          Leaderboard
        </NavLink>

        <NavLink to="/faq">
          FAQ
        </NavLink>
      </ul>

      {/* Right */}
      <div className="nav-actions flex items-center gap-2 flex-shrink-0">
        <button
          className="btn btn-outline btn-sm px-3"
          onClick={() =>
            nav("/login")
          }
        >
          Sign In
        </button>

        <button
          className="btn btn-primary btn-sm px-3"
          onClick={() =>
            nav("/register")
          }
        >
          Register
        </button>
      </div>
    </nav>
  );
}