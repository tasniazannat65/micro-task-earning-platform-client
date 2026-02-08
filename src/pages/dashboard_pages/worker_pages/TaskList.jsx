import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared_component/LoadingSpinner";

const TaskList = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axiosSecure.get("/worker/task-list");
        setTasks(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, [axiosSecure]);

  if (loading) return <LoadingSpinner />;

  if (tasks.length === 0) {
    return (
      <div className="bg-base-100 p-8 rounded-2xl text-center shadow-md">
        <p className="text-neutral text-lg">No available tasks at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-bold text-accent mb-2">{task.task_title}</h3>
          <p className="text-sm text-neutral mb-1">
            <span className="font-semibold">Buyer:</span> {task.buyer_name}
          </p>
          <p className="text-sm text-neutral mb-1">
            <span className="font-semibold">Completion Date:</span>{" "}
            {new Date(task.completion_date).toLocaleDateString()}
          </p>
          <p className="text-sm text-neutral mb-1">
            <span className="font-semibold">Payable Amount:</span> ${task.payable_amount}
          </p>
          <p className="text-sm text-neutral mb-3">
            <span className="font-semibold">Workers Required:</span> {task.required_workers}
          </p>
          <button
            onClick={() => navigate(`/dashboard/worker/task-details/${task._id}`)}
            className="btn w-full bg-gradient-to-r from-primary to-secondary text-white border-none hover:from-secondary hover:to-primary transition-all"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
