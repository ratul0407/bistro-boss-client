import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
function AdminRoute({ children }) {
  const { user, loading } = useAuth();
  const { isAdmin, isAdminLoading } = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading)
    return (
      <div>
        <span className="loading-spinner loading-lg"></span>
      </div>
    );

  if (user && isAdmin) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AdminRoute;
