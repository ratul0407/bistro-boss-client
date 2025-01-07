import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
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
