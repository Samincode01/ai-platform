import { Link, useLocation } from "react-router";

const DASH_ROUTES = [
  "/dashboard",
  "/admin",
  "/admin/users",
  "/admin/payments",
  "/admin/contests",
  "/judge",
  "/judge/problems",
  "/judge/submissions",
  "/judge/ranklist",
  "/profile",
  "/problem",
];

function Item({ to, icon, children, onNavigate }) {
  const path = useLocation().pathname;
  const active = path === to;

  return (
    <Link
      to={to}
      className={`sidebar-item ${
        active ? "active" : ""
      }`}
      onClick={onNavigate}
    >
      <span className="sidebar-icon">
        {icon}
      </span>

      {children}
    </Link>
  );
}

function SidebarPanel({
  mobileOpen,
  onMobileClose,
  children,
}) {
  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          className="sidebar-backdrop"
          onClick={onMobileClose}
          aria-label="Close menu"
        />
      )}

      <div
        id="sidebar"
        className={`show${
          mobileOpen
            ? " mobile-open"
            : ""
        }`}
      >
        {children}
      </div>
    </>
  );
}

export function Sidebar({
  mobileOpen = false,
  onMobileClose,
}) {
  const path = useLocation().pathname;

  if (!DASH_ROUTES.includes(path)) {
    return null;
  }

  const close = onMobileClose;

  return (
    <SidebarPanel
      mobileOpen={mobileOpen}
      onMobileClose={onMobileClose}
    >
      <div className="sidebar-section">
        <div className="sidebar-label">
          Navigation
        </div>

        <Item
          to="/dashboard"
          icon="🏠"
          onNavigate={close}
        >
          Dashboard
        </Item>

        <Item
          to="/contests"
          icon="🏆"
          onNavigate={close}
        >
          Contests
        </Item>

        <Item
          to="/problem"
          icon="📋"
          onNavigate={close}
        >
          Problems
        </Item>

        <Item
          to="/leaderboard"
          icon="📈"
          onNavigate={close}
        >
          Leaderboard
        </Item>

        <Item
          to="/profile"
          icon="👤"
          onNavigate={close}
        >
          Profile
        </Item>
      </div>
    </SidebarPanel>
  );
}

export function isSidebarRoute(path) {
  return DASH_ROUTES.includes(path);
}