import { Navigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

export default function PrivateRoute({
  isAuthenticated,
  children,
}: PrivateRouteProps) {
  return isAuthenticated ? children : <Navigate to={ROUTES.LOGIN} />;
}
