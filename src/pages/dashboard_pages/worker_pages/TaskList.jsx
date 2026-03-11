import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared_component/LoadingSpinner";

const TaskList = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

 useEffect(() => {
  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axiosSecure.get(`/worker/task-list?page=${currentPage}&limit=6`);

      setTasks(res.data.tasks);
      setTotalPages(res.data.totalPages);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  fetchTasks();
}, [axiosSecure, currentPage]);

  if (loading) return <LoadingSpinner />;

  if (tasks.length === 0) {
    return (
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-accent">Available Tasks</h1>
            <p className="text-sm text-neutral mt-1">Browse and complete tasks to earn coins</p>
          </div>
        </div>

        {/* Empty State */}
        <div className="bg-base-100 rounded-xl border-2 border-base-300/60 shadow-xl p-12 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-base-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-accent mb-2">No Available Tasks</h3>
          <p className="text-neutral text-lg">Check back soon for new opportunities!</p>
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
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-accent">Available Tasks</h1>
              <p className="text-sm text-neutral mt-1">Browse and complete tasks to earn coins</p>
            </div>
          </div>

          {/* Task Count Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="font-bold text-primary">{tasks.length} {tasks.length === 1 ? 'Task' : 'Tasks'} Available</span>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-accent text-sm mb-1">How it works</h4>
            <p className="text-xs text-neutral/70">Select a task, complete it before the deadline, and submit your work for review. Once approved, you'll earn the payment amount!</p>
          </div>
        </div>
      </div>

      {/* Task Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="group bg-base-100 rounded-xl border-2 border-base-300/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            {/* Card Header with Gradient */}
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 p-6 border-b border-base-300/60">
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
              
              {/* Task Icon */}
              <div className="relative mb-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
              </div>

              {/* Task Title */}
              <h3 className="text-xl font-bold text-accent mb-2 line-clamp-2 min-h-[3.5rem]">
                {task.task_title}
              </h3>
            </div>

            {/* Card Body */}
            <div className="p-6 space-y-4">
              {/* Buyer Info */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-base-200 border border-base-300">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-neutral/70 font-medium">Posted by</p>
                  <p className="text-sm font-bold text-accent truncate">{task.buyer_name}</p>
                </div>
              </div>

              {/* Task Details Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Completion Date */}
                <div className="p-3 rounded-xl bg-base-200 border border-base-300">
                  <div className="flex items-center gap-2 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <p className="text-xs text-neutral/70 font-medium">Deadline</p>
                  </div>
                  <p className="text-sm font-bold text-accent">
                    {new Date(task.completion_date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </div>

                {/* Workers Required */}
                <div className="p-3 rounded-xl bg-base-200 border border-base-300">
                  <div className="flex items-center gap-2 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <p className="text-xs text-neutral/70 font-medium">Slots</p>
                  </div>
                  <p className="text-sm font-bold text-accent">{task.required_workers} Left</p>
                </div>
              </div>

              {/* Payment Badge */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-success/10 to-secondary/10 border border-success/20">
                <span className="text-sm font-semibold text-neutral/70">Payment</span>
                <div className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <span className="text-2xl font-bold text-success">{task.payable_amount}</span>
                </div>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => navigate(`/dashboard/worker/task-details/${task._id}`)}
                className="
                  w-full
                  btn
                  bg-gradient-to-r from-primary to-secondary
                  hover:from-secondary hover:to-primary
                  text-white
                  border-none
                  shadow-lg
                  hover:shadow-xl
                  hover:scale-105
                  active:scale-95
                  transition-all duration-300
                  text-base
                  h-12
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
        {/* Pagination */}
        <div className="border-t border-base-300/60 bg-base-200/50 px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral">
              Showing page <span className="font-bold text-accent">{currentPage}</span> of <span className="font-bold text-accent">{totalPages}</span>
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
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
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
                        ${currentPage === pageNum 
                          ? 'bg-primary text-white shadow-md' 
                          : 'bg-base-100 text-accent hover:bg-base-300 border border-base-300'
                        }
                      `}
                      onClick={() => setCurrentPage(pageNum)}
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
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
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
  );
};

export default TaskList;