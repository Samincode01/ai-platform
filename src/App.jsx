import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import {
  RootLayout,
  NotFound,
} from "./components/layout/RootLayout";

import PrivateRoute from "./components/PrivateRoute";

import Home from "./components/pages/Home";
import How from "./components/pages/How";
import Faq from "./components/pages/Faq";
import Leaderboard from "./components/pages/Leaderboard";
import Contests from "./components/pages/Contests";
import Contest from "./components/pages/Contest";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Problem from "./components/pages/Problem";

import AdminDashboard from "./components/pages/admin/AdminDashboard";
import AdminContests from "./components/pages/admin/AdminContests";
import AdminUsers from "./components/pages/admin/AdminUsers";
import AdminPayments from "./components/pages/admin/AdminPayments";

import JudgeDashboard from "./components/pages/judge/JudgeDashboard";
import JudgeProblems from "./components/pages/judge/JudgeProblems";
import JudgeSubmissions from "./components/pages/judge/JudgeSubmissions";
import JudgeRanklist from "./components/pages/judge/JudgeRanklist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "how",
        element: <How />,
      },

      {
        path: "faq",
        element: <Faq />,
      },

      {
        path: "leaderboard",
        element: <Leaderboard />,
      },

      {
        path: "contests",
        element: <Contests />,
      },

      {
        path: "contest",
        element: <Contest />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },

      // User Routes
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },

      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },

      {
        path: "problem",
        element: (
          <PrivateRoute>
            <Problem />
          </PrivateRoute>
        ),
      },

      // Admin Routes
      {
        path: "admin",
        element: (
          <PrivateRoute role="admin">
            <AdminDashboard />
          </PrivateRoute>
        ),
      },

      {
        path: "admin/contests",
        element: (
          <PrivateRoute role="admin">
            <AdminContests />
          </PrivateRoute>
        ),
      },

      {
        path: "admin/users",
        element: (
          <PrivateRoute role="admin">
            <AdminUsers />
          </PrivateRoute>
        ),
      },

      {
        path: "admin/payments",
        element: (
          <PrivateRoute role="admin">
            <AdminPayments />
          </PrivateRoute>
        ),
      },

      // Judge Routes
      {
        path: "judge",
        element: (
          <PrivateRoute role="judge">
            <JudgeDashboard />
          </PrivateRoute>
        ),
      },

      {
        path: "judge/problems",
        element: (
          <PrivateRoute role="judge">
            <JudgeProblems />
          </PrivateRoute>
        ),
      },

      {
        path: "judge/submissions",
        element: (
          <PrivateRoute role="judge">
            <JudgeSubmissions />
          </PrivateRoute>
        ),
      },

      {
        path: "judge/ranklist",
        element: (
          <PrivateRoute role="judge">
            <JudgeRanklist />
          </PrivateRoute>
        ),
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider
      router={router}
    />
  );
}