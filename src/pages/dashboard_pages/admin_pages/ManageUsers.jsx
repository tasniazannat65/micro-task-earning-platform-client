import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  const limit = 5;

  const fetchUsers = async () => {
    try {

      const res = await axiosSecure.get(
        `/admin/manage-users?page=${currentPage}&limit=${limit}`
      );

      setUsers(res.data.users);
      setTotalPages(res.data.totalPages);
      setTotalUsers(res.data.totalUsers);

    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

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

  // Calculate stats
  const admins = users.filter(u => u.role === 'admin').length;
  const buyers = users.filter(u => u.role === 'buyer').length;
  const workers = users.filter(u => u.role === 'worker').length;

  return (
    <div className="max-w-7xl mx-auto">
            <title>Zantaskly || Manage Users Page </title>

      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-accent">Manage Users</h1>
            <p className="text-sm text-neutral mt-1">Control user roles and manage platform access</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-4">
            <p className="text-xs text-neutral/70 font-medium mb-1">Total Users</p>
            <p className="text-2xl font-bold text-primary">{totalUsers}</p>
          </div>
          <div className="bg-gradient-to-br from-error/10 to-warning/10 border border-error/20 rounded-xl p-4">
            <p className="text-xs text-neutral/70 font-medium mb-1">Admins</p>
            <p className="text-2xl font-bold text-error">{admins}</p>
          </div>
          <div className="bg-gradient-to-br from-success/10 to-secondary/10 border border-success/20 rounded-xl p-4">
            <p className="text-xs text-neutral/70 font-medium mb-1">Buyers</p>
            <p className="text-2xl font-bold text-success">{buyers}</p>
          </div>
          <div className="bg-gradient-to-br from-warning/10 to-error/10 border border-warning/20 rounded-xl p-4">
            <p className="text-xs text-neutral/70 font-medium mb-1">Workers</p>
            <p className="text-2xl font-bold text-warning">{workers}</p>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-base-100 rounded-xl border-2 border-base-300/60 shadow-xl overflow-hidden">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-base-300/60 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-accent flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              User Management
            </h2>
            <span className="text-sm text-neutral/70">
              {totalUsers} {totalUsers === 1 ? 'user' : 'users'} registered
            </span>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-base-200">
              <tr className="border-b border-base-300">
                <th className="text-accent font-bold">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    User
                  </div>
                </th>
                <th className="text-accent font-bold">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Email
                  </div>
                </th>
                <th className="text-accent font-bold">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Role
                  </div>
                </th>
                <th className="text-accent font-bold">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    Coins
                  </div>
                </th>
                <th className="text-accent font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id} className="border-b border-base-300 hover:bg-base-200 transition-colors">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-12 h-12 rounded-xl border-2 border-primary/30">
                          <img src={user.image} alt={user.name} />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-accent">{user.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-neutral">{user.email}</td>
                  <td>
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user._id, e.target.value)}
                      className={`
                        select select-sm select-bordered
                        font-semibold capitalize
                        transition-all duration-300
                        ${user.role === 'admin' 
                          ? 'bg-error/10 border-error/30 text-error' 
                          : user.role === 'buyer'
                          ? 'bg-success/10 border-success/30 text-success'
                          : 'bg-warning/10 border-warning/30 text-warning'
                        }
                      `}
                    >
                      <option value="admin">Admin</option>
                      <option value="buyer">Buyer</option>
                      <option value="worker">Worker</option>
                    </select>
                  </td>
                  <td>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      {user.coins || 0}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm bg-error/20 hover:bg-error border-error/40 hover:border-error text-error hover:text-white transition-all duration-300"
                      onClick={() => handleDelete(user._id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                      </svg>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden p-4 space-y-4">
          {users.map(user => (
            <div key={user._id} className="bg-base-200 rounded-xl border border-base-300 p-4 space-y-3">
              {/* User Info */}
              <div className="flex items-start gap-3">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-xl border-2 border-primary/30">
                    <img src={user.image} alt={user.name} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-accent truncate">{user.name}</h3>
                  <p className="text-sm text-neutral truncate">{user.email}</p>
                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      {user.coins || 0} coins
                    </span>
                  </div>
                </div>
              </div>

              {/* Role Select */}
              <div>
                <label className="text-xs text-neutral/70 font-medium mb-1 block">Role</label>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  className={`
                    select select-sm select-bordered w-full
                    font-semibold capitalize
                    ${user.role === 'admin' 
                      ? 'bg-error/10 border-error/30 text-error' 
                      : user.role === 'buyer'
                      ? 'bg-success/10 border-success/30 text-success'
                      : 'bg-warning/10 border-warning/30 text-warning'
                    }
                  `}
                >
                  <option value="admin">Admin</option>
                  <option value="buyer">Buyer</option>
                  <option value="worker">Worker</option>
                </select>
              </div>

              {/* Remove Button */}
              <button
                className="btn btn-sm w-full bg-error/20 hover:bg-error border-error/40 text-error hover:text-white"
                onClick={() => handleDelete(user._id)}
              >
                Remove User
              </button>
            </div>
          ))}
         
        </div>
                 {/* Pagination */}
        <div className="border-t border-base-300/60 bg-base-200/50 px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral">
              Showing page <span className="font-bold text-accent">{currentPage}</span> of <span className="font-bold text-accent">{totalPages}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                className="
                  btn btn-sm
                  bg-base-100
                  hover:bg-primary
                  border border-base-300
                  hover:border-primary
                  text-accent
                  hover:text-white
                  transition-all duration-300
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Previous
              </button>

              <div className="hidden sm:flex items-center gap-1">
                {[...Array(Math.min(totalPages, 5))].map((_, idx) => {
                  const pageNum = idx + 1;
                  return (
                    <button
                      key={pageNum}
                      className={`
                        w-8 h-8 rounded-lg
                        font-semibold text-sm
                        transition-all duration-300
                        ${currentPage === pageNum 
                          ? 'bg-primary text-white shadow-md' 
                          : 'bg-base-100 text-accent hover:bg-base-300 border border-base-300'
                        }
                      `}
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                {totalPages > 5 && <span className="text-neutral px-2">...</span>}
              </div>

              <button
                className="
                  btn btn-sm
                  bg-base-100
                  hover:bg-primary
                  border border-base-300
                  hover:border-primary
                  text-accent
                  hover:text-white
                  transition-all duration-300
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;