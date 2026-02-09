import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axiosSecure.get("/admin/manage-users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This user will be deleted!",
      icon: "warning",
      showCancelButton: true,
    });
    if (!confirm.isConfirmed) return;

    const res = await axiosSecure.delete(`/admin/manage-users/${id}`);
    if (res.data.success) {
      Swal.fire("Deleted!", "User has been removed.", "success");
      fetchUsers();
    }
  };

  const handleRoleChange = async (id, newRole) => {
    await axiosSecure.patch(`/admin/manage-users/${id}/role`, { role: newRole });
    Swal.fire("Updated!", "User role has been updated.", "success");
    fetchUsers();
  };

  return (
    <div className="overflow-x-auto bg-base-100 rounded-2xl shadow-xl p-4">
      <table className="table w-full">
        <thead className="bg-base-200">
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Coin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id} className="hover:bg-base-200 transition-colors">
              <td>
                <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  className="select select-sm"
                >
                  <option value="admin">Admin</option>
                  <option value="buyer">Buyer</option>
                  <option value="worker">Worker</option>
                </select>
              </td>
              <td>{user.coin || 0}</td>
              <td>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => handleDelete(user._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
