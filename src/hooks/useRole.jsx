import useAuth from "./useAuth";

const useRole = () => {
  const {  dbUser, loading } = useAuth();

  if (loading) {
    return { role: null, isAdmin: false, isWorker: false, isBuyer: false, loading: true };
  }

  const role = dbUser?.role || null;

  return {
    role,
    isAdmin: role === "admin",
    isWorker: role === "worker",
    isBuyer: role === "buyer",
    loading: false,
  };
};

export default useRole;
