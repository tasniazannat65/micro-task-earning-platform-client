import useAuth from "../../hooks/useAuth";

const DashboardTopbar = ({ setSidebarOpen }) => {
  const { user, dbUser, signOutUser } = useAuth();

  return (
    <header className="
      sticky top-0 z-50
      h-20
      bg-base-100/95
      backdrop-blur-xl
      border-b border-base-300/60
      shadow-sm
    ">
      <div className="h-full px-4 md:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left Section - Coins & Actions */}
        <div className="flex items-center gap-4">
            <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden btn btn-sm btn-ghost"
          >
            ☰
          </button>
          {/* Coin Balance */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">$</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-base-100 animate-pulse" />
            </div>
            <div>
              <p className="text-xs text-neutral/70 font-medium">Your Balance</p>
              <p className="text-lg font-bold text-primary">
                {dbUser?.coins ?? 0} <span className="text-sm text-neutral/70">coins</span>
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={signOutUser}
            className="
              group
              flex items-center gap-2
              px-4 py-2.5
              rounded-xl
              bg-base-200
              hover:bg-error/10
              border border-base-300
              hover:border-error/40
              text-neutral
              hover:text-error
              font-semibold
              text-sm
              transition-all duration-300
              hover:scale-105
              active:scale-95
            "
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>

        {/* Right Section - Notifications & Profile */}
        <div className="flex items-center gap-4">
          
          {/* Notification Bell */}
          <div className="relative group">
            <button className="
              relative
              w-11 h-11
              rounded-xl
              bg-base-200
              hover:bg-base-300
              border border-base-300
              hover:border-primary/40
              flex items-center justify-center
              transition-all duration-300
              hover:scale-105
              active:scale-95
            ">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-neutral group-hover:text-primary transition-colors" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-error text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-base-100 animate-pulse">
                3
              </span>
            </button>

            {/* Notification Tooltip */}
            <div className="absolute right-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-base-100 border border-base-300 rounded-xl shadow-xl p-2 text-xs whitespace-nowrap">
                <span className="text-neutral">3 new notifications</span>
              </div>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-base-200 border border-base-300 hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer group">
            {/* Avatar */}
            <div className="relative">
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                className="w-10 h-10 rounded-xl border-2 border-primary/50 object-cover group-hover:border-primary transition-colors duration-300"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-base-100" />
            </div>

            {/* User Info */}
            <div className="hidden md:block">
              <p className="text-sm font-bold text-accent group-hover:text-primary transition-colors duration-300">
                {user?.displayName}
              </p>
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <span className="text-xs font-semibold text-primary capitalize">
                    {dbUser?.role}
                  </span>
                </span>
              </div>
            </div>

            {/* Dropdown Arrow */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 text-neutral group-hover:text-primary transition-transform duration-300 group-hover:rotate-180 hidden md:block" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardTopbar;