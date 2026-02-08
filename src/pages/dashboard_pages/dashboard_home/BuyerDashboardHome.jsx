import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/shared_component/LoadingSpinner";
import Swal from "sweetalert2";

const BuyerDashboardHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  // Stats
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["buyerHomeStats", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/buyer/home-stats/${user.email}`
      );
      return res.data;
    },
  });

  // Pending Submissions
  const {
    data: submissions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyerPendingSubmissions", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/buyer/pending-submissions/${user.email}`
      );
      return res.data;
    },
  });

  if (statsLoading || isLoading) return <LoadingSpinner />;

  const handleApprove = async (id) => {
    await axiosSecure.patch(`/buyer/submission/approve/${id}`);
    Swal.fire("Approved!", "", "success");
    refetch();
  };

  const handleReject = async (id) => {
    await axiosSecure.patch(`/buyer/submission/reject/${id}`);
    Swal.fire("Rejected!", "", "info");
    refetch();
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-accent">Buyer Dashboard</h1>
          <p className="text-sm text-neutral mt-1">Overview of your tasks and submissions</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Total Tasks */}
        <div className="group bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-neutral/70 font-medium mb-1">Total Tasks Posted</p>
          <h2 className="text-4xl font-bold text-primary">{stats.totalTasks}</h2>
        </div>

        {/* Pending Workers */}
        <div className="group bg-gradient-to-br from-warning/10 to-error/10 border border-warning/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-warning to-error flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-neutral/70 font-medium mb-1">Pending Review</p>
          <h2 className="text-4xl font-bold text-warning">{stats.pendingWorkers}</h2>
        </div>

        {/* Total Paid */}
        <div className="group bg-gradient-to-br from-success/10 to-secondary/10 border border-success/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-success to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-neutral/70 font-medium mb-1">Total Amount Paid</p>
          <h2 className="text-4xl font-bold text-success">${stats.totalPaid}</h2>
        </div>
      </div>

      {/* Submissions Table */}
      <div className="bg-base-100 rounded-xl border-2 border-base-300/60 shadow-xl overflow-hidden">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-base-300/60 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-accent flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              Tasks to Review
            </h2>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/10 border border-warning/20">
              <div className="w-2 h-2 bg-warning rounded-full animate-pulse" />
              <span className="text-sm font-bold text-warning">{submissions.length} Pending</span>
            </span>
          </div>
        </div>

        {/* Empty State */}
        {submissions.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-base-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-accent mb-2">All Caught Up!</h3>
            <p className="text-neutral">No pending submissions to review at the moment</p>
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
                        Worker
                      </div>
                    </th>
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
                        Payment
                      </div>
                    </th>
                    <th className="text-accent font-bold">Details</th>
                    <th className="text-accent font-bold">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {submissions.map((s) => (
                    <tr key={s._id} className="border-b border-base-300 hover:bg-base-200 transition-colors">
                      <td className="font-semibold text-accent">{s.worker_name}</td>
                      <td className="text-neutral">{s.task_title}</td>
                      <td>
                        <span className="font-bold text-success text-lg">
                          ${s.payable_amount}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm bg-primary/20 hover:bg-primary border-primary/40 hover:border-primary text-primary hover:text-white transition-all duration-300"
                          onClick={() => setSelectedSubmission(s)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          View
                        </button>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleApprove(s._id)}
                            className="btn btn-sm bg-success/20 hover:bg-success border-success/40 hover:border-success text-success hover:text-white transition-all duration-300"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(s._id)}
                            className="btn btn-sm bg-error/20 hover:bg-error border-error/40 hover:border-error text-error hover:text-white transition-all duration-300"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden p-4 space-y-4">
              {submissions.map((s) => (
                <div key={s._id} className="bg-base-200 rounded-xl border border-base-300 p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-accent">{s.task_title}</h3>
                      <p className="text-sm text-neutral mt-1">by {s.worker_name}</p>
                    </div>
                    <span className="font-bold text-success text-xl">${s.payable_amount}</span>
                  </div>

                  <button
                    className="btn btn-sm w-full bg-primary/20 hover:bg-primary border-primary/40 text-primary hover:text-white"
                    onClick={() => setSelectedSubmission(s)}
                  >
                    View Details
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleApprove(s._id)}
                      className="flex-1 btn btn-sm bg-success/20 hover:bg-success border-success/40 text-success hover:text-white"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(s._id)}
                      className="flex-1 btn btn-sm bg-error/20 hover:bg-error border-error/40 text-error hover:text-white"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      {selectedSubmission && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-base-100 border-2 border-base-300/60 rounded-xl shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-base-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl text-accent">Submission Details</h3>
                <p className="text-sm text-neutral">Review worker's submission</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="space-y-4">
              <div className="bg-base-200 rounded-xl p-4">
                <p className="text-xs text-neutral/70 font-medium mb-2">Task</p>
                <p className="font-bold text-accent">{selectedSubmission.task_title}</p>
              </div>

              <div className="bg-base-200 rounded-xl p-4">
                <p className="text-xs text-neutral/70 font-medium mb-2">Worker</p>
                <p className="font-bold text-accent">{selectedSubmission.worker_name}</p>
              </div>

              <div className="bg-base-200 rounded-xl p-4">
                <p className="text-xs text-neutral/70 font-medium mb-2">Payment Amount</p>
                <p className="font-bold text-success text-xl">${selectedSubmission.payable_amount}</p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-4">
                <p className="text-xs text-neutral/70 font-medium mb-2">Submission Details</p>
                <p className="text-neutral leading-relaxed">{selectedSubmission.submission_details}</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="modal-action mt-6 pt-4 border-t border-base-300">
              <button
                className="btn bg-base-200 hover:bg-base-300 border-2 border-base-300 hover:border-neutral text-accent"
                onClick={() => setSelectedSubmission(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                Close
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop bg-base-300/50 backdrop-blur-sm">
            <button onClick={() => setSelectedSubmission(null)}>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default BuyerDashboardHome;