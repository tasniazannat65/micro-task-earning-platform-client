import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared_component/LoadingSpinner";

const WorkerDashboardHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  //  stats
  const { data: stats, isLoading } = useQuery({
    queryKey: ["workerHomeStats", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/worker/home-stats/${user.email}`
      );
      return res.data;
    },
  });

  //  approved submissions
  const { data: approvedSubmissions = [] } = useQuery({
    queryKey: ["approvedSubmissions", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/worker/approved-submissions/${user.email}`
      );
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Worker Dashboard</h2>

      {/*  STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-base-200 p-6 rounded-xl shadow">
          <p className="text-sm opacity-70">Total Submissions</p>
          <h3 className="text-3xl font-bold">
            {stats?.totalSubmissions || 0}
          </h3>
        </div>

        <div className="bg-base-200 p-6 rounded-xl shadow">
          <p className="text-sm opacity-70">Pending Submissions</p>
          <h3 className="text-3xl font-bold text-warning">
            {stats?.pendingSubmissions || 0}
          </h3>
        </div>

        <div className="bg-base-200 p-6 rounded-xl shadow">
          <p className="text-sm opacity-70">Total Earning ($)</p>
          <h3 className="text-3xl font-bold text-success">
            {stats?.totalEarning || 0}
          </h3>
        </div>
      </div>

      {/* APPROVED SUBMISSIONS TABLE */}
      <div className="bg-base-100 rounded-xl shadow border">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">
            Approved Submissions
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-base-200">
              <tr>
                <th>Task Title</th>
                <th>Payable Amount</th>
                <th>Buyer Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {approvedSubmissions.map((sub) => (
                <tr key={sub._id}>
                  <td>{sub.task_title}</td>
                  <td>${sub.payable_amount}</td>
                  <td>{sub.buyer_name}</td>
                  <td>
                    <span className="badge badge-success">
                      {sub.status}
                    </span>
                  </td>
                </tr>
              ))}

              {approvedSubmissions.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6">
                    No approved submissions yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboardHome;
