import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/shared_component/LoadingSpinner";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, loading: roleLoading } = useRole();

  if (loading || roleLoading) {
    return <LoadingSpinner />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/unauthorized" replace />;
};

export default AdminRoute;
