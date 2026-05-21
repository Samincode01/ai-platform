import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";

import { Navbar } from "../app/Navbar";
import { Sidebar, isSidebarRoute } from "../app/Sidebar";
import { Toasts } from "../app/Toasts";

export function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "60vh",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 32px",
      }}
    >
      <div style={{ maxWidth: 420, textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: 96,
            fontWeight: 400,
            lineHeight: 1,
            color: "var(--accent)",
          }}
        >
          404
        </h1>

        <h2
          style={{
            marginTop: 16,
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          Page not found
        </h2>

        <p
          style={{
            marginTop: 8,
            color: "var(--text2)",
            fontSize: 14,
          }}
        >
          The page you're looking for
          doesn't exist or has been
          moved.
        </p>

        <div style={{ marginTop: 24 }}>
          <Link to="/" className="btn btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export function RootLayout() {
  const path = useLocation().pathname;

  const withSidebar =
    isSidebarRoute(path);

  const [mobileSidebarOpen, setMobileSidebarOpen] =
    useState(false);

  const [sidebarPath, setSidebarPath] =
    useState(path);

  if (path !== sidebarPath) {
    setSidebarPath(path);
    setMobileSidebarOpen(false);
  }

  return (
    <>
      <Navbar
        showSidebarToggle={withSidebar}
        sidebarOpen={mobileSidebarOpen}
        onSidebarToggle={() =>
          setMobileSidebarOpen(
            (open) => !open
          )
        }
      />

      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onMobileClose={() =>
          setMobileSidebarOpen(false)
        }
      />

      <div
        id="main-content"
        className={
          withSidebar
            ? "with-sidebar"
            : ""
        }
      >
        <Outlet />
      </div>

      <Toasts />
    </>
  );
}