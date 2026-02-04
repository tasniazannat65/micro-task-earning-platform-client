import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loader from "../components/Loader";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isBuyer, loading: roleLoading } = useRole();

  if (loading || roleLoading) {
    return <Loader />;
  }

  if (user && isBuyer) {
    return children;
  }

  return <Navigate to="/unauthorized" replace />;
};

export default BuyerRoute;
