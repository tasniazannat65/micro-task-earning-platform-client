import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared_component/LoadingSpinner";
import { useState } from "react";

const WorkerDashboardHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [page, setPage] = useState(1);
const limit = 5;

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
 const { data: approvedData = {}, isLoading: submissionsLoading } = useQuery({
  queryKey: ["approvedSubmissions", user?.email, page],
  enabled: !!user?.email,
  queryFn: async () => {
    const res = await axiosSecure.get(
      `/worker/approved-submissions/${user.email}?page=${page}&limit=${limit}`
    );
    return res.data;
  },
});
const approvedSubmissions = approvedData?.submissions || [];
const totalPages = approvedData?.totalPages || 1;

  if (isLoading || submissionsLoading) return <LoadingSpinner />;

  return (
    <div className="max-w-7xl mx-auto space-y-8">
            <title>Zantaskly || Worker Dashboard Home Page </title>

      {/* Page Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-accent">Worker Dashboard</h1>
          <p className="text-sm text-neutral mt-1">Track your tasks and earnings</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Submissions */}
        <div className="group bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-neutral/70 font-medium mb-1">Total Submissions</p>
          <h3 className="text-4xl font-bold text-primary">
            {stats?.totalSubmissions || 0}
          </h3>
        </div>

        {/* Pending Submissions */}
        <div className="group bg-gradient-to-br from-warning/10 to-error/10 border border-warning/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-warning to-error flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-neutral/70 font-medium mb-1">Pending Review</p>
          <h3 className="text-4xl font-bold text-warning">
            {stats?.pendingSubmissions || 0}
          </h3>
        </div>

        {/* Total Earning */}
        <div className="group bg-gradient-to-br from-success/10 to-secondary/10 border border-success/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-success to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-neutral/70 font-medium mb-1">Total Earnings</p>
          <h3 className="text-4xl font-bold text-success">
            ${stats?.totalEarning || 0}
          </h3>
        </div>
      </div>

      {/* Approved Submissions Table */}
      <div className="bg-base-100 rounded-xl border-2 border-base-300/60 shadow-xl overflow-hidden">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-base-300/60 px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-accent flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Approved Submissions
            </h3>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-bold text-success">{approvedSubmissions.length} Approved</span>
            </span>
          </div>
        </div>

        {/* Empty State */}
        {approvedSubmissions.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-base-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-accent mb-2">No Approved Submissions Yet</h3>
            <p className="text-neutral mb-6">Complete tasks to see your approved work here</p>
            <button
              onClick={() => window.location.href = '/dashboard/worker/task-list'}
              className="btn bg-primary hover:bg-secondary text-white border-none shadow-lg"
            >
              Browse Available Tasks
            </button>
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
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        </svg>
                        Task Title
                      </div>
                    </th>
                    <th className="text-accent font-bold">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                        Earnings
                      </div>
                    </th>
                    <th className="text-accent font-bold">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                        </svg>
                        Buyer
                      </div>
                    </th>
                    <th className="text-accent font-bold">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Status
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {approvedSubmissions.map((sub) => (
                    <tr key={sub._id} className="border-b border-base-300 hover:bg-base-200 transition-colors">
                      <td className="font-semibold text-accent">{sub.task_title}</td>
                      <td>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 border border-success/20 text-success font-bold text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="1" x2="12" y2="23" />
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                          </svg>
                          ${sub.payable_amount}
                        </span>
                      </td>
                      <td className="text-neutral">{sub.buyer_name}</td>
                      <td>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 text-success font-semibold text-sm capitalize">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {sub.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden p-4 space-y-4">
              {approvedSubmissions.map((sub) => (
                <div key={sub._id} className="bg-base-200 rounded-xl border border-base-300 p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-accent flex-1">{sub.task_title}</h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/10 border border-success/20 text-success font-semibold text-xs capitalize">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {sub.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-neutral/70 mb-1">Buyer</p>
                      <p className="text-sm font-medium text-accent">{sub.buyer_name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-neutral/70 mb-1">Earnings</p>
                      <p className="text-xl font-bold text-success">${sub.payable_amount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
         {/* Pagination */}
        <div className="border-t border-base-300/60 bg-base-200/50 px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral">
              Showing page <span className="font-bold text-accent">{page}</span> of <span className="font-bold text-accent">{totalPages}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                className="
                  btn btn-sm
                  bg-base-100
                  hover:bg-primary
                  border border-base-300
                  hover:border-primary
                  text-accent
                  hover:text-white
                  transition-all duration-300
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Previous
              </button>

              <div className="hidden sm:flex items-center gap-1">
                {[...Array(Math.min(totalPages, 5))].map((_, idx) => {
                  const pageNum = idx + 1;
                  return (
                    <button
                      key={pageNum}
                      className={`
                        w-8 h-8 rounded-lg
                        font-semibold text-sm
                        transition-all duration-300
                        ${page === pageNum 
                          ? 'bg-primary text-white shadow-md' 
                          : 'bg-base-100 text-accent hover:bg-base-300 border border-base-300'
                        }
                      `}
                      onClick={() => setPage(pageNum)}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                {totalPages > 5 && <span className="text-neutral px-2">...</span>}
              </div>

              <button
                className="
                  btn btn-sm
                  bg-base-100
                  hover:bg-primary
                  border border-base-300
                  hover:border-primary
                  text-accent
                  hover:text-white
                  transition-all duration-300
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
              >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

   
      </div>
     
    </div>
  );
};

export default WorkerDashboardHome;