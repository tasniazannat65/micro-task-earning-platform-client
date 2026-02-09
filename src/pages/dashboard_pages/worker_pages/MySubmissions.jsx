import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared_component/LoadingSpinner";

const MySubmissions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      if (!user?.email) return;
      try {
        const res = await axiosSecure.get(`/worker/my-submissions/${user.email}`);
        setSubmissions(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [user?.email, axiosSecure]);

  if (loading) return <LoadingSpinner />;

  if (submissions.length === 0)
    return (
      <div className="p-12 text-center bg-base-100 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-accent mb-2">No Submissions Yet</h2>
        <p className="text-neutral">You haven't submitted any tasks yet.</p>
      </div>
    );

  return (
    <div className="overflow-x-auto bg-base-100 p-6 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-accent mb-4">My Submissions</h2>
      <table className="table w-full">
        <thead className="bg-base-200">
          <tr>
            <th>Task Title</th>
            <th>Buyer Name</th>
            <th>Payable Amount</th>
            <th>Submission Details</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((sub) => (
            <tr key={sub._id} className="hover:bg-base-200 transition-colors">
              <td className="font-semibold text-accent">{sub.task_title}</td>
              <td>{sub.buyer_name}</td>
              <td className="font-bold text-primary">${sub.payable_amount}</td>
              <td className="max-w-xs truncate">{sub.submission_details}</td>
              <td>{new Date(sub.current_date).toLocaleDateString()}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    sub.status === "pending"
                      ? "bg-warning/20 text-warning"
                      : sub.status === "approved"
                      ? "bg-success/20 text-success"
                      : "bg-error/20 text-error"
                  }`}
                >
                  {sub.status.toUpperCase()}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MySubmissions;
