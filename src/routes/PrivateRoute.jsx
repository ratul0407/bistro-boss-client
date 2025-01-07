import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading-spinner loading-lg"></span>
      </div>
    );
  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
