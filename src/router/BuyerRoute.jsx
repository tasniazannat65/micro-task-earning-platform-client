import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/shared_component/LoadingSpinner";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isBuyer, loading: roleLoading } = useRole();

  if (loading || roleLoading) {
    return <LoadingSpinner />;
  }

  if (user && isBuyer) {
    return children;
  }

  return <Navigate to="/unauthorized" replace />;
};

export default BuyerRoute;
