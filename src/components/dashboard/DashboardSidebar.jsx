import { Link } from "react-router";
import { NavLink } from "react-router";
import useRole from "../../hooks/useRole";

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { isAdmin, isWorker, isBuyer } = useRole();

  return (
    <aside   className={`
    fixed md:static
    top-0 left-0
    z-50
    w-72
    min-h-screen        
    bg-base-100
    border-r border-base-300
    transform transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `}
     
    >
      <div className="flex flex-col min-h-screen">
         <button
        onClick={() => setSidebarOpen(false)}
        className="absolute top-4 right-4 md:hidden btn btn-sm btn-circle"
      >
        ✕
      </button>
        {/* Logo Section */}
        <div className="p-6 border-b border-base-300/60">
          <Link to={'/'} className="flex items-center gap-3 group">
            {/* Logo Icon */}
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" className="opacity-20" fill="currentColor" />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M9 12l2 2 4-4"
                  />
                  <circle cx="17" cy="7" r="2.5" fill="currentColor" className="text-secondary" />
                  <text x="17" y="8.5" fontSize="3" textAnchor="middle" fill="white" fontWeight="bold">$</text>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-success rounded-full animate-pulse" />
            </div>

            {/* Logo Text */}
            <div>
              <h1 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                Zentaskly
              </h1>
              <p className="text-xs text-neutral mt-0.5 font-medium">
                Dashboard Panel
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          
          {/* Common Section */}
          <div>
            <h3 className="text-xs font-bold text-neutral/60 uppercase tracking-wider mb-3 px-3">
              Overview
            </h3>
            <NavLink 
              to="/dashboard"
              className={({ isActive }) => `
                flex items-center gap-3
                px-4 py-3
                rounded-xl
                font-semibold
                text-sm
                transition-all duration-300
                ${isActive 
                  ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary shadow-sm' 
                  : 'text-neutral hover:bg-base-200 hover:text-primary border-l-4 border-transparent'
                }
              `}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home</span>
            </NavLink>
          </div>

          {/* Worker Routes */}
          {isWorker && (
            <div>
              <h3 className="text-xs font-bold text-neutral/60 uppercase tracking-wider mb-3 px-3">
                Worker Panel
              </h3>
              <div className="space-y-1">
                <NavLink 
                  to="/dashboard/worker/task-list"
                  className={({ isActive }) => `
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    font-semibold
                    text-sm
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary shadow-sm' 
                      : 'text-neutral hover:bg-base-200 hover:text-primary border-l-4 border-transparent'
                    }
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span>Task List</span>
                </NavLink>

                <NavLink 
                  to="/dashboard/worker/my-submissions"
                  className={({ isActive }) => `
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    font-semibold
                    text-sm
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary shadow-sm' 
                      : 'text-neutral hover:bg-base-200 hover:text-primary border-l-4 border-transparent'
                    }
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span>My Submissions</span>
                </NavLink>

                <NavLink 
                  to="/dashboard/worker/withdrawals"
                  className={({ isActive }) => `
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    font-semibold
                    text-sm
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary shadow-sm' 
                      : 'text-neutral hover:bg-base-200 hover:text-primary border-l-4 border-transparent'
                    }
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <span>Withdrawals</span>
                </NavLink>

                <NavLink 
                  to="/dashboard/payment-history"
                  className={({ isActive }) => `
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    font-semibold
                    text-sm
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary shadow-sm' 
                      : 'text-neutral hover:bg-base-200 hover:text-primary border-l-4 border-transparent'
                    }
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>Payment History</span>
                </NavLink>
              </div>
            </div>
          )}

          {/* Buyer Routes */}
          {isBuyer && (
            <div>
              <h3 className="text-xs font-bold text-neutral/60 uppercase tracking-wider mb-3 px-3">
                Buyer Panel
              </h3>
              <div className="space-y-1">
                <NavLink 
                  to="/dashboard/buyer/add-task"
                  className={({ isActive }) => `
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    font-semibold
                    text-sm
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary shadow-sm' 
                      : 'text-neutral hover:bg-base-200 hover:text-primary border-l-4 border-transparent'
                    }
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                  <span>Add New Task</span>
                </NavLink>

                <NavLink 
                  to="/dashboard/buyer/my-tasks"
                  className={({ isActive }) => `
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    font-semibold
                    text-sm
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary shadow-sm' 
                      : 'text-neutral hover:bg-base-200 hover:text-primary border-l-4 border-transparent'
                    }
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  </svg>
                  <span>My Tasks</span>
                </NavLink>

                <NavLink 
                  to="/dashboard/buyer/purchase-coin"
                  className={({ isActive }) => `
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    font-semibold
                    text-sm
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary shadow-sm' 
                      : 'text-neutral hover:bg-base-200 hover:text-primary border-l-4 border-transparent'
                    }
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span>Purchase Coins</span>
                </NavLink>

                <NavLink 
                  to="/dashboard/payment-history"
                  className={({ isActive }) => `
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    font-semibold
                    text-sm
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary shadow-sm' 
                      : 'text-neutral hover:bg-base-200 hover:text-primary border-l-4 border-transparent'
                    }
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>Payment History</span>
                </NavLink>
              </div>
            </div>
          )}

          {/* Admin Routes */}
          {isAdmin && (
            <div>
              <h3 className="text-xs font-bold text-neutral/60 uppercase tracking-wider mb-3 px-3">
                Admin Panel
              </h3>
              <div className="space-y-1">
                <NavLink 
                  to="/dashboard/admin/manage-users"
                  className={({ isActive }) => `
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    font-semibold
                    text-sm
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary shadow-sm' 
                      : 'text-neutral hover:bg-base-200 hover:text-primary border-l-4 border-transparent'
                    }
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>Manage Users</span>
                </NavLink>

                <NavLink 
                  to="/dashboard/admin/manage-task"
                  className={({ isActive }) => `
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    font-semibold
                    text-sm
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary shadow-sm' 
                      : 'text-neutral hover:bg-base-200 hover:text-primary border-l-4 border-transparent'
                    }
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                  <span>Manage Tasks</span>
                </NavLink>
              </div>
            </div>
          )}
        </nav>

        {/* Bottom Section - Help Card */}
        <div className="p-4 border-t border-base-300/60">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm text-accent mb-1">Need Help?</h4>
                <p className="text-xs text-neutral/70 mb-3">Check our documentation or contact support</p>
                <button className="text-xs font-semibold text-primary hover:text-secondary transition-colors">
                  Get Support →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;