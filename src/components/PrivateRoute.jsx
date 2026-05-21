import { Navigate } from "react-router";

export default function PrivateRoute({
  children,
  role,
}) {
  const user = {
    role: "admin",
  };

  if (!user) {
    return (
      <Navigate to="/login" />
    );
  }

  if (
    role &&
    user.role !== role
  ) {
    return (
      <Navigate to="/" />
    );
  }

  return children;
}