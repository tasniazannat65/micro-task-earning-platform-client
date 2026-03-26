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

  if (!task) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-base-100 rounded-xl border-2 border-error/60 shadow-xl p-12 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-error/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-error" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-accent mb-2">Task Not Found</h3>
          <p className="text-neutral mb-6">The task you're looking for doesn't exist or has been removed</p>
          <button
            onClick={() => navigate('/dashboard/worker/task-list')}
            className="btn bg-primary hover:bg-secondary text-white border-none"
          >
            Back to Task List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => navigate('/dashboard/worker/task-list')}
          className="w-10 h-10 rounded-xl bg-base-200 hover:bg-base-300 border border-base-300 flex items-center justify-center transition-all duration-300 hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>
        <div>
          <h1 className="text-3xl font-bold text-accent">Task Details</h1>
          <p className="text-sm text-neutral mt-1">Review task information and submit your work</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Task Information Card */}
        <div className="bg-base-100 rounded-xl border-2 border-base-300/60 shadow-xl overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-base-300/60 px-8 py-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-accent mb-2">{task.task_title}</h2>
                <p className="text-sm text-neutral">Complete this task before the deadline to earn your payment</p>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-8 space-y-6">
            {/* Buyer Information */}
            <div>
              <h3 className="text-sm font-bold text-neutral/70 uppercase tracking-wider mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Task Posted By
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-base-200 rounded-xl p-4 border border-base-300">
                  <p className="text-xs text-neutral/70 font-medium mb-1">Buyer Name</p>
                  <p className="text-base font-bold text-accent">{task.buyerName}</p>
                </div>
                <div className="bg-base-200 rounded-xl p-4 border border-base-300">
                  <p className="text-xs text-neutral/70 font-medium mb-1">Buyer Email</p>
                  <p className="text-base font-bold text-accent truncate">{task.buyerEmail}</p>
                </div>
              </div>
            </div>

            {/* Task Details Grid */}
            <div>
              <h3 className="text-sm font-bold text-neutral/70 uppercase tracking-wider mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                Task Information
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {/* Completion Date */}
                <div className="bg-gradient-to-br from-warning/10 to-error/10 border border-warning/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-warning/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-warning" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <p className="text-xs text-neutral/70 font-medium">Deadline</p>
                  </div>
                  <p className="text-lg font-bold text-warning">
                    {new Date(task.completion_date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>

                {/* Payable Amount */}
                <div className="bg-gradient-to-br from-success/10 to-secondary/10 border border-success/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <p className="text-xs text-neutral/70 font-medium">Your Earnings</p>
                  </div>
                  <p className="text-2xl font-bold text-success">${task.payable_amount}</p>
                </div>

                {/* Workers Left */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <p className="text-xs text-neutral/70 font-medium">Slots Left</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">{task.required_workers}</p>
                </div>
              </div>
            </div>

            {/* Task Description (if available) */}
            {task.task_detail && (
              <div>
                <h3 className="text-sm font-bold text-neutral/70 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                  Task Description
                </h3>
                <div className="bg-base-200 rounded-xl p-5 border border-base-300">
                  <p className="text-neutral leading-relaxed">{task.task_detail}</p>
                </div>
              </div>
            )}

            {/* Submission Info */}
            {task.submission_info && (
              <div>
                <h3 className="text-sm font-bold text-neutral/70 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  Submission Requirements
                </h3>
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-5">
                  <p className="text-neutral leading-relaxed">{task.submission_info}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Submission Form Card */}
        <div className="bg-base-100 rounded-xl border-2 border-base-300/60 shadow-xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-base-300/60 px-8 py-5">
            <h3 className="text-xl font-bold text-accent flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
              </svg>
              Submit Your Work
            </h3>
            <p className="text-sm text-neutral mt-1">Provide detailed information about your completed work</p>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-accent flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                  Submission Details
                  <span className="text-error">*</span>
                </span>
              </label>
              <textarea
                value={submissionDetails}
                onChange={(e) => setSubmissionDetails(e.target.value)}
                className="textarea textarea-bordered w-full h-40 bg-base-200 border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                placeholder="Enter your work details here. Be clear and specific about what you've accomplished..."
                required
              />
              <label className="label">
                <span className="label-text-alt text-neutral/60">
                  Provide comprehensive details about your completed work
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => navigate('/dashboard/worker/task-list')}
                className="
                  flex-1
                  btn
                  bg-base-200
                  hover:bg-base-300
                  border-2 border-base-300
                  hover:border-neutral
                  text-accent
                  hover:text-accent
                  transition-all duration-300
                  h-12
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                Cancel
              </button>
              <button
                type="submit"
                className="
                  flex-1
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
                  h-12
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                  <polyline points="17 21 17 13 7 13 7 21" />
                  <polyline points="7 3 7 8 15 8" />
                </svg>
                Submit Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;