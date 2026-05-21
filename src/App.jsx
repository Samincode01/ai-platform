import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout, NotFound } from "./components/layout/RootLayout";

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
      { path: "how", element: <How /> },
      { path: "faq", element: <Faq /> },
      { path: "leaderboard", element: <Leaderboard /> },
      { path: "contests", element: <Contests /> },
      { path: "contest", element: <Contest /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "profile", element: <Profile /> },
      { path: "problem", element: <Problem /> },
      { path: "admin", element: <AdminDashboard /> },
      { path: "admin/contests", element: <AdminContests /> },
      { path: "admin/users", element: <AdminUsers /> },
      { path: "admin/payments", element: <AdminPayments /> },
      { path: "judge", element: <JudgeDashboard /> },
      { path: "judge/problems", element: <JudgeProblems /> },
      { path: "judge/submissions", element: <JudgeSubmissions /> },
      { path: "judge/ranklist", element: <JudgeRanklist /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
