import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

function AdminRoute({ children }) {
  const { user, loading } = useAuth();
  const { isAdmin, isAdminLoading } = useAdmin();
  const location = useLocation();

  if ((loading, isAdminLoading))
    return (
      <div className="flex items-center justify-center h-64">
        <span className="loading-spinner loading-lg"></span>
      </div>
    );

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AdminRoute;
