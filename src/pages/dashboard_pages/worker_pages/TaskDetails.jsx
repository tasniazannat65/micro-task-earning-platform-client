import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared_component/LoadingSpinner";

const TaskDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submissionDetails, setSubmissionDetails] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axiosSecure.get(`/worker/task-details/${id}`);
        setTask(res.data);
        console.log('data', res.data)
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        Swal.fire("Error", "Failed to load task details", "error");
      }
    };
    fetchTask();
  }, [id, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!submissionDetails.trim()) return Swal.fire("Error", "Please add submission details", "warning");

    try {
      const res = await axiosSecure.post(`/worker/task-submit/${id}`, {
        submission_details: submissionDetails,
      });

      if (res.data.success) {
        Swal.fire("Success", "Submission added successfully", "success");
        setSubmissionDetails("");
        navigate("/dashboard/worker/task-list"); 
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to submit task", "error");
    }
  };

  if (loading) return <LoadingSpinner />;

  if (!task) return <p className="text-center text-red-500">Task not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-base-100 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-accent">{task.task_title}</h2>
      <div className="space-y-2">
        <p><strong>Buyer Name:</strong> {task.buyerName}</p>
        <p><strong>Buyer Email:</strong> {task.buyerEmail}</p>
        <p><strong>Completion Date:</strong> {new Date(task.completion_date).toLocaleDateString()}</p>
        <p><strong>Payable Amount:</strong> ${task.payable_amount}</p>
        <p><strong>Required Workers Left:</strong> {task.required_workers}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm font-semibold text-neutral">
          Submission Details
        </label>
        <textarea
          value={submissionDetails}
          onChange={(e) => setSubmissionDetails(e.target.value)}
          className="w-full border border-base-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          rows={5}
  placeholder="Enter your work details here. Be clear and specific."
          required
        />
        <button
          type="submit"
          className="btn bg-primary hover:bg-secondary text-white w-full"
        >
          Submit Task
        </button>
      </form>
    </div>
  );
};

export default TaskDetails;
