import { Outlet } from "react-router";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardTopbar from "../components/dashboard/BashboardTopbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 text-base-content relative overflow-hidden">
      {/* Decorative Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="flex relative z-10">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Area */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Topbar */}
          <DashboardTopbar />

          {/* Page Content */}
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              <Outlet />
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-base-300/60 bg-base-100/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Copyright */}
                <p className="text-sm text-neutral/80">
                  © {new Date().getFullYear()}{" "}
                  <span className="font-semibold text-primary">Zentaskly</span>
                  {" "}Dashboard. All rights reserved.
                </p>

                {/* Footer Links */}
                <div className="flex items-center gap-6 text-xs text-neutral/70">
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms
                  </a>
                </div>

                {/* Version */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-base-200 border border-base-300/50">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-xs text-neutral font-medium">v1.0.0</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;