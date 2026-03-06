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
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-accent">Admin Dashboard</h1>
          <p className="text-sm text-neutral mt-1">Monitor platform statistics and manage withdrawals</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Workers" 
          value={stats.totalWorker}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          }
          gradient="from-primary to-secondary"
        />
        <StatCard 
          title="Total Buyers" 
          value={stats.totalBuyer}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <polyline points="17 11 19 13 23 9" />
            </svg>
          }
          gradient="from-success to-secondary"
        />
        <StatCard 
          title="Total Coins" 
          value={stats.totalAvailableCoin}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          }
          gradient="from-warning to-error"
        />
        <StatCard 
          title="Total Payments" 
          value={`$${stats.totalPayments}`}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          }
          gradient="from-secondary to-primary"
        />
      </div>

      {/* Withdraw Requests Table */}
      <div className="bg-base-100 rounded-xl border-2 border-base-300/60 shadow-xl overflow-hidden">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-base-300/60 px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-accent flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              Pending Withdrawal Requests
            </h3>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/10 border border-warning/20">
              <div className="w-2 h-2 bg-warning rounded-full animate-pulse" />
              <span className="text-sm font-bold text-warning">{withdraws.length} Pending</span>
            </span>
          </div>
        </div>

        {/* Empty State */}
        {withdraws.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-base-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-accent mb-2">All Caught Up!</h3>
            <p className="text-neutral">No pending withdrawal requests at the moment</p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="table w-full">
                <thead className="bg-base-200">
                  <tr className="border-b border-base-300">
                    <th className="text-accent font-bold">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        Worker Name
                      </div>
                    </th>
                    <th className="text-accent font-bold">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        Coins
                      </div>
                    </th>
                    <th className="text-accent font-bold">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                        Amount (USD)
                      </div>
                    </th>
                    <th className="text-accent font-bold">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                        </svg>
                        Payment Method
                      </div>
                    </th>
                    <th className="text-accent font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {withdraws.map((w) => (
                    <tr key={w._id} className="border-b border-base-300 hover:bg-base-200 transition-colors">
                      <td className="font-semibold text-accent">{w.worker_name}</td>
                      <td>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-warning/10 border border-warning/20 text-warning font-bold text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                          {w.withdrawal_coin}
                        </span>
                      </td>
                      <td>
                        <span className="font-bold text-success text-lg">${w.withdrawal_amount}</span>
                      </td>
                      <td>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-base-200 border border-base-300 text-accent font-medium text-sm capitalize">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                          </svg>
                          {w.payment_system}
                        </span>
                      </td>
                      <td>
                        <button
                          onClick={() => handleApprove(w._id)}
                          className="btn btn-sm bg-success/20 hover:bg-success border-success/40 hover:border-success text-success hover:text-white transition-all duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Approve Payment
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden p-4 space-y-4">
              {withdraws.map((w) => (
                <div key={w._id} className="bg-base-200 rounded-xl border border-base-300 p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-accent">{w.worker_name}</h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-base-100 border border-base-300 text-accent font-medium text-xs capitalize">
                      {w.payment_system}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-neutral/70 mb-1">Coins</p>
                      <span className="inline-flex items-center gap-1 text-warning font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                        {w.withdrawal_coin}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-neutral/70 mb-1">Amount</p>
                      <p className="text-xl font-bold text-success">${w.withdrawal_amount}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleApprove(w._id)}
                    className="btn btn-sm w-full bg-success/20 hover:bg-success border-success/40 text-success hover:text-white"
                  >
                    Approve Payment
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, gradient }) => (
  <div className="group bg-gradient-to-br from-base-100 to-base-200 border border-base-300/60 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-center justify-between mb-4">
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
    </div>
    <p className="text-sm text-neutral/70 font-medium mb-1">{title}</p>
    <h3 className="text-4xl font-bold text-accent">{value}</h3>
  </div>
);

export default AdminDashboardHome;