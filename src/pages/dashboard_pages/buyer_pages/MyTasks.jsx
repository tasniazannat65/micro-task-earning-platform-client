import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../components/shared_component/LoadingSpinner";
import UpdateTaskModal from "../../../components/modal/UpdateTaskModal";

const MyTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user, refetchUser } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTasks = async () => {
    if (!user?.email) return;

    setLoading(true);
    const res = await axiosSecure.get(`/buyer/tasks/${user.email}`);
    setTasks(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, [user?.email]);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Uncompleted workers coin will be refunded",
      icon: "warning",
      showCancelButton: true,
    });

    if (!confirm.isConfirmed) return;

    const res = await axiosSecure.delete(`/buyer/tasks/${id}`);

    if (res.data.success) {
      Swal.fire(
        "Deleted!",
        `Refunded ${res.data.refunded} coins`,
        "success"
      );
      await fetchTasks();   
      refetchUser();
    }
  };

  if (loading) return <LoadingSpinner />;
  const totalTasks = tasks.length;
  const totalWorkers = tasks.reduce((sum, task) => sum + task.required_workers, 0);
  const totalPayable = tasks.reduce((sum, task) => sum + (task.required_workers * task.payable_amount), 0);

  return (
   <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-accent">My Tasks</h1>
              <p className="text-sm text-neutral mt-1">Manage and monitor your posted tasks</p>
            </div>
          </div>

          <button
            onClick={() => window.location.href = '/dashboard/buyer/add-task'}
            className="
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
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            Add New Task
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral/70 font-medium mb-1">Total Tasks</p>
                <p className="text-3xl font-bold text-primary">{totalTasks}</p>
              </div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-success/10 to-warning/10 border border-success/20 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral/70 font-medium mb-1">Total Workers</p>
                <p className="text-3xl font-bold text-success">{totalWorkers}</p>
              </div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-success to-warning flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral/70 font-medium mb-1">Total Payable</p>
                <p className="text-3xl font-bold text-secondary">{totalPayable}</p>
              </div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks Table/Cards */}
      {tasks.length === 0 ? (
        <div className="bg-base-100 rounded-xl border-2 border-base-300/60 shadow-xl p-12 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-base-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-accent mb-2">No Tasks Yet</h3>
          <p className="text-neutral mb-6">You haven't created any tasks. Start by adding your first task!</p>
          <button
            onClick={() => window.location.href = '/dashboard/buyer/add-task'}
            className="btn bg-primary hover:bg-secondary text-white border-none shadow-lg"
          >
            Create Your First Task
          </button>
        </div>
      ) : (
        <div className="bg-base-100 rounded-xl border-2 border-base-300/60 shadow-xl overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-base-300/60 px-6 py-4">
            <h2 className="text-lg font-bold text-accent">Task List</h2>
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
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                      Task Title
                    </div>
                  </th>
                  <th className="text-accent font-bold">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      Workers Left
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
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Deadline
                    </div>
                  </th>
                  <th className="text-accent font-bold">Actions</th>
                </tr>
              </thead>

              <tbody>
                {tasks.map((task) => (
                  <tr key={task._id} className="border-b border-base-300 hover:bg-base-200 transition-colors">
                    <td className="font-semibold text-accent">{task.task_title}</td>
                    <td>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 border border-success/20 text-success font-semibold text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                        {task.required_workers}
                      </span>
                    </td>
                    <td>
                      <span className="inline-flex items-center gap-1 font-bold text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                        {task.payable_amount}
                      </span>
                    </td>
                    <td className="text-neutral">{new Date(task.completion_date).toLocaleDateString()}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <button
                          className="btn btn-sm bg-warning/20 hover:bg-warning border-warning/40 hover:border-warning text-warning hover:text-white transition-all duration-300"
                          onClick={() => setSelectedTask(task)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                          </svg>
                          Update
                        </button>
                        <button
                          className="btn btn-sm bg-error/20 hover:bg-error border-error/40 hover:border-error text-error hover:text-white transition-all duration-300"
                          onClick={() => handleDelete(task._id)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                          Delete
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
            {tasks.map((task) => (
              <div key={task._id} className="bg-base-200 rounded-xl border border-base-300 p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-accent text-lg flex-1">{task.task_title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-neutral/70 mb-1">Workers Left</p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/10 border border-success/20 text-success font-semibold text-sm">
                      {task.required_workers}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-neutral/70 mb-1">Payment</p>
                    <span className="font-bold text-primary">${task.payable_amount}</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-neutral/70 mb-1">Deadline</p>
                  <p className="text-sm text-neutral">{new Date(task.completion_date).toLocaleDateString()}</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    className="flex-1 btn btn-sm bg-warning/20 hover:bg-warning border-warning/40 text-warning hover:text-white"
                    onClick={() => setSelectedTask(task)}
                  >
                    Update
                  </button>
                  <button
                    className="flex-1 btn btn-sm bg-error/20 hover:bg-error border-error/40 text-error hover:text-white"
                    onClick={() => handleDelete(task._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

     {selectedTask && (
    <UpdateTaskModal
      task={selectedTask}
      closeModal={() => setSelectedTask(null)}
      refetchTasks={fetchTasks} 
    />
  )}
    </div>
  );
};

export default MyTasks;
