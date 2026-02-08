import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const AddTasks = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { dbUser, refetchUser, user } = useAuth();

  const onSubmit = async (data) => {
    const requiredWorkers = Number(data.required_workers);
    const payableAmount = Number(data.payable_amount);
    const totalPayable = requiredWorkers * payableAmount;

    if (totalPayable > dbUser.coins) {
      Swal.fire({
        icon: "error",
        title: "Not available Coin",
        text: "Purchase Coin",
      });
      navigate("/dashboard/buyer/purchase-coin");
      return;
    }

    try {
      const res = await axiosSecure.post("/tasks", data);

      if (res.data.success) {
        await refetchUser(user.email);

        Swal.fire({
          icon: "success",
          title: "Task added successfully",
        });

        reset();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response?.data?.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-accent">Add New Task</h1>
            <p className="text-sm text-neutral mt-1">Create a new task for workers to complete</p>
          </div>
        </div>

        {/* Coin Balance Info */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-lg">$</span>
          </div>
          <div>
            <p className="text-xs text-neutral/70 font-medium">Available Balance</p>
            <p className="text-xl font-bold text-primary">{dbUser?.coins || 0} coins</p>
          </div>
          <div className="ml-auto">
            <button
              onClick={() => navigate("/dashboard/buyer/purchase-coin")}
              className="btn btn-sm bg-primary hover:bg-secondary text-white border-none shadow-md hover:shadow-lg transition-all duration-300"
            >
              Purchase Coins
            </button>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-base-100 rounded-xl shadow-2xl border-2 border-base-300/60 overflow-hidden">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-base-300/60 px-8 py-6">
          <h2 className="text-xl font-bold text-accent flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Task Details
          </h2>
          <p className="text-sm text-neutral mt-1">Fill in the information below to create your task</p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          
          {/* Task Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-accent flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Task Title
                <span className="text-error">*</span>
              </span>
            </label>
            <input
              {...register("task_title", { required: true })}
              className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              placeholder="Enter a clear and concise task title"
            />
            {errors.task_title && (
              <label className="label">
                <span className="label-text-alt text-error">Task title is required</span>
              </label>
            )}
          </div>

          {/* Task Detail */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-accent flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                Task Description
                <span className="text-error">*</span>
              </span>
            </label>
            <textarea
              {...register("task_detail", { required: true })}
              className="textarea textarea-bordered w-full h-32 bg-base-200 border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
              placeholder="Provide detailed instructions for workers..."
            />
            {errors.task_detail && (
              <label className="label">
                <span className="label-text-alt text-error">Task description is required</span>
              </label>
            )}
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Required Workers */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-accent flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Required Workers
                  <span className="text-error">*</span>
                </span>
              </label>
              <input
                type="number"
                {...register("required_workers", { required: true, min: 1 })}
                className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="e.g., 10"
                min="1"
              />
              {errors.required_workers && (
                <label className="label">
                  <span className="label-text-alt text-error">Required workers must be at least 1</span>
                </label>
              )}
            </div>

            {/* Payable Amount */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-accent flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  Payment per Worker
                  <span className="text-error">*</span>
                </span>
              </label>
              <input
                type="number"
                {...register("payable_amount", { required: true, min: 1 })}
                className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="e.g., 5"
                min="1"
              />
              {errors.payable_amount && (
                <label className="label">
                  <span className="label-text-alt text-error">Payment amount must be at least 1 coin</span>
                </label>
              )}
            </div>
          </div>

          {/* Completion Date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-accent flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Completion Date
                <span className="text-error">*</span>
              </span>
            </label>
            <input
              type="date"
              {...register("completion_date", { required: true })}
              className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            />
            {errors.completion_date && (
              <label className="label">
                <span className="label-text-alt text-error">Completion date is required</span>
              </label>
            )}
          </div>

          {/* Submission Info */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-accent flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                Submission Instructions
                <span className="text-error">*</span>
              </span>
            </label>
            <input
              {...register("submission_info", { required: true })}
              className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              placeholder="e.g., Submit screenshot of completed work"
            />
            {errors.submission_info && (
              <label className="label">
                <span className="label-text-alt text-error">Submission instructions are required</span>
              </label>
            )}
          </div>

          {/* Task Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-accent flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                Task Image URL
                <span className="text-neutral/60 text-xs font-normal">(Optional)</span>
              </span>
            </label>
            <input
              {...register("task_image_url")}
              className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              placeholder="https://example.com/image.jpg"
            />
            <label className="label">
              <span className="label-text-alt text-neutral/60">Add a reference image for better understanding</span>
            </label>
          </div>

          {/* Divider */}
          <div className="divider"></div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
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
                text-base
                h-12
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
              </svg>
              Create Task
            </button>

            <button 
              type="button"
              onClick={() => reset()}
              className="
                btn 
                bg-base-200 
                hover:bg-base-300 
                border-2 border-base-300 
                hover:border-neutral 
                text-neutral
                hover:text-accent
                shadow-md 
                hover:shadow-lg 
                transition-all duration-300
                text-base
                h-12
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="1 4 1 10 7 10" />
                <polyline points="23 20 23 14 17 14" />
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
              </svg>
              Reset Form
            </button>
          </div>
        </form>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-base-100 border border-base-300/60 rounded-xl p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-accent mb-1">Clear Instructions</h4>
            <p className="text-xs text-neutral/70">Provide detailed task descriptions for better results</p>
          </div>
        </div>

        <div className="bg-base-100 border border-base-300/60 rounded-xl p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-accent mb-1">Fair Pricing</h4>
            <p className="text-xs text-neutral/70">Set competitive rates to attract quality workers</p>
          </div>
        </div>

        <div className="bg-base-100 border border-base-300/60 rounded-xl p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-accent mb-1">Set Deadlines</h4>
            <p className="text-xs text-neutral/70">Choose realistic completion dates for tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTasks;