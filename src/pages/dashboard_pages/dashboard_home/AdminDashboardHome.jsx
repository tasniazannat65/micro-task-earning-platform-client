import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared_component/LoadingSpinner";

const AdminDashboardHome = () => {
  const axiosSecure = useAxiosSecure();

  //  Stats
  const { data: stats, isLoading } = useQuery({
    queryKey: ["adminHomeStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/home-stats");
      return res.data;
    },
  });

  //  Withdraw Requests
  const {
    data: withdraws = [],
    refetch,
    isLoading: withdrawLoading,
  } = useQuery({
    queryKey: ["withdrawRequests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/withdraw-requests");
      return res.data;
    },
  });

  const handleApprove = async (id) => {
    const res = await axiosSecure.patch(
      `/admin/withdraw-approve/${id}`
    );
    if (res.data) {
      Swal.fire("Success", "Withdrawal approved", "success");
      refetch();
    }
  };

  if (isLoading || withdrawLoading) return <LoadingSpinner />;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Admin Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Stat title="Total Workers" value={stats.totalWorker} />
        <Stat title="Total Buyers" value={stats.totalBuyer} />
        <Stat title="Total Coins" value={stats.totalAvailableCoin} />
        <Stat title="Total Payments ($)" value={stats.totalPayments} />
      </div>

      {/* Withdraw Requests */}
      <div className="bg-base-200 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4">
          Pending Withdraw Requests
        </h3>

        <table className="table">
          <thead>
            <tr>
              <th>Worker</th>
              <th>Coins</th>
              <th>Amount ($)</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {withdraws.map((w) => (
              <tr key={w._id}>
                <td>{w.worker_name}</td>
                <td>{w.withdrawal_coin}</td>
                <td>{w.withdrawal_amount}</td>
                <td>{w.payment_system}</td>
                <td>
                  <button
                    onClick={() => handleApprove(w._id)}
                    className="btn btn-success btn-sm"
                  >
                    Payment Success
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Stat = ({ title, value }) => (
  <div className="p-6 rounded-xl bg-base-200 shadow">
    <p className="text-sm opacity-70">{title}</p>
    <h3 className="text-3xl font-bold">{value}</h3>
  </div>
);

export default AdminDashboardHome;
