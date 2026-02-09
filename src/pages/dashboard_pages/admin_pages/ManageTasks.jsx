import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared_component/LoadingSpinner";

const ManageTasks = () => {
  const axiosSecure = useAxiosSecure();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await axiosSecure.get("/admin/manage-tasks");
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This task will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await axiosSecure.delete(`/admin/manage-tasks/${id}`);
      if (res.data.success) {
        Swal.fire("Deleted!", "Task has been deleted.", "success");
        fetchTasks();
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-7xl mx-auto bg-base-100 rounded-2xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold text-accent mb-4">Manage Tasks</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Task Title</th>
              <th>Buyer Name</th>
              <th>Payable Amount</th>
              <th>Required Workers</th>
              <th>Completion Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id} className="hover:bg-base-200">
                <td>{task.task_title}</td>
                <td>{task.buyerName}</td>
                <td>${task.payable_amount}</td>
                <td>{task.required_workers}</td>
                <td>{new Date(task.completion_date).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(task._id)}
                  >
                    Delete
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

export default ManageTasks;
