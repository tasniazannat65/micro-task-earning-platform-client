import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/shared_component/LoadingSpinner";

const WorkerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isWorker, loading: roleLoading } = useRole();

  if (loading || roleLoading) {
    return <LoadingSpinner />;
  }

  if (user && isWorker) {
    return children;
  }

  return <Navigate to="/unauthorized" replace />;
};

export default WorkerRoute;
