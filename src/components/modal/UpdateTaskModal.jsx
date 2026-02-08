import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateTaskModal = ({ task, closeModal, refetchTasks }) => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      task_title: task.task_title,
      task_detail: task.task_detail,
      submission_info: task.submission_info,
    },
  });

  const onSubmit = async (data) => {
    try {
      await axiosSecure.patch(`/buyer/tasks/${task._id}`, data);
      Swal.fire("Updated!", "Task updated successfully", "success");
      refetchTasks();
      closeModal();
    } catch {
      Swal.fire("Error", "Failed to update task", "error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-base-100 p-6 rounded-xl w-full max-w-lg">
        <h3 className="text-xl font-bold mb-4">Update Task</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input
            {...register("task_title", { required: true })}
            className="input input-bordered w-full"
            placeholder="Task Title"
          />

          <textarea
            {...register("task_detail", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Task Detail"
          />

          <input
            {...register("submission_info", { required: true })}
            className="input input-bordered w-full"
            placeholder="Submission Info"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={closeModal}
              className="btn btn-ghost"
            >
              Cancel
            </button>
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTaskModal;
