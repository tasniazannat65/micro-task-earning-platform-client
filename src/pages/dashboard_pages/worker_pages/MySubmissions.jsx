import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared_component/LoadingSpinner";

const MySubmissions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 10; // Number of submissions per page

  const fetchSubmissions = async (page = 1) => {
    if (!user?.email) return;
    setLoading(true);
    try {
      const res = await axiosSecure.get(
        `/worker/my-submissions/${user.email}?page=${page}&limit=${limit}`
      );
      setSubmissions(res.data.submissions);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions(page);
  }, [user?.email, page]);

  if (loading) return <LoadingSpinner />;

  if (submissions.length === 0) {
    return (
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-accent">My Submissions</h1>
            <p className="text-sm text-neutral mt-1">Track your submitted tasks and their status</p>
          </div>
        </div>

        {/* Empty State */}
        <div className="bg-base-100 rounded-xl border-2 border-base-300/60 shadow-xl p-12 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-base-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-accent mb-2">No Submissions Yet</h2>
          <p className="text-neutral mb-6">You haven't submitted any tasks yet. Start completing tasks to build your track record!</p>
          <button
            onClick={() => window.location.href = '/dashboard/worker/task-list'}
            className="btn bg-primary hover:bg-secondary text-white border-none shadow-lg"
          >
            Browse Available Tasks
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-accent">My Submissions</h1>
              <p className="text-sm text-neutral mt-1">Track your submitted tasks and their status</p>
            </div>
          </div>

          {/* Total Count Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <span className="font-bold text-primary">Page {page} of {totalPages}</span>
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-base-100 rounded-xl border-2 border-base-300/60 shadow-xl overflow-hidden">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-base-300/60 px-6 py-4">
          <h2 className="text-lg font-bold text-accent flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Submission History
          </h2>
        </div>

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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Buyer
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
                <th className="text-accent font-bold">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    Submission
                  </div>
                </th>
                <th className="text-accent font-bold">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Date
                  </div>
                </th>
                <th className="text-accent font-bold">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    Status
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub) => (
                <tr key={sub._id} className="border-b border-base-300 hover:bg-base-200 transition-colors">
                  <td className="font-semibold text-accent">{sub.task_title}</td>
                  <td className="text-neutral">{sub.buyer_name}</td>
                  <td>
                    <span className="font-bold text-primary text-lg">${sub.payable_amount}</span>
                  </td>
                  <td className="max-w-xs">
                    <div className="truncate text-neutral" title={sub.submission_details}>
                      {sub.submission_details}
                    </div>
                  </td>
                  <td className="text-neutral">
                    {new Date(sub.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </td>
                  <td>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold capitalize ${
                        sub.status === "pending"
                          ? "bg-warning/10 border border-warning/20 text-warning"
                          : sub.status === "approved"
                          ? "bg-success/10 border border-success/20 text-success"
                          : "bg-error/10 border border-error/20 text-error"
                      }`}
                    >
                      {sub.status === "pending" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                      )}
                      {sub.status === "approved" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                      {sub.status === "rejected" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      )}
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
          {submissions.map((sub) => (
            <div key={sub._id} className="bg-base-200 rounded-xl border border-base-300 p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-accent flex-1">{sub.task_title}</h3>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold capitalize flex-shrink-0 ${
                    sub.status === "pending"
                      ? "bg-warning/10 border border-warning/20 text-warning"
                      : sub.status === "approved"
                      ? "bg-success/10 border border-success/20 text-success"
                      : "bg-error/10 border border-error/20 text-error"
                  }`}
                >
                  {sub.status === "pending" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  )}
                  {sub.status === "approved" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  {sub.status === "rejected" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  )}
                  {sub.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-neutral/70 mb-1">Buyer</p>
                  <p className="text-sm font-medium text-accent">{sub.buyer_name}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-neutral/70 mb-1">Payment</p>
                  <p className="text-xl font-bold text-primary">${sub.payable_amount}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-neutral/70 mb-1">Submission</p>
                <p className="text-sm text-neutral line-clamp-2">{sub.submission_details}</p>
              </div>

              <div>
                <p className="text-xs text-neutral/70 mb-1">Submitted On</p>
                <p className="text-sm font-medium text-accent">
                  {new Date(sub.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

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

export default MySubmissions;