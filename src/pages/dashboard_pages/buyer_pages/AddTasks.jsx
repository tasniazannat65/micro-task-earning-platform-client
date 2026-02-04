import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const AddTasks = () => {
  const { register, handleSubmit, reset } = useForm();
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
        // 🔥 THIS IS THE FIX
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
    <div className="max-w-4xl mx-auto bg-base-100 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Add New Task</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <input
          {...register("task_title", { required: true })}
          className="input input-bordered"
          placeholder="Task Title"
        />

        <textarea
          {...register("task_detail", { required: true })}
          className="textarea textarea-bordered"
          placeholder="Task Detail"
        />

        <input
          type="number"
          {...register("required_workers", { required: true })}
          className="input input-bordered"
          placeholder="Required Workers"
        />

        <input
          type="number"
          {...register("payable_amount", { required: true })}
          className="input input-bordered"
          placeholder="Payable Amount per Worker"
        />

        <input
          type="date"
          {...register("completion_date", { required: true })}
          className="input input-bordered"
        />

        <input
          {...register("submission_info", { required: true })}
          className="input input-bordered"
          placeholder="Submission Info"
        />

        <input
          {...register("task_image_url")}
          className="input input-bordered"
          placeholder="Task Image URL"
        />

        <button className="btn btn-primary w-full">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTasks;
