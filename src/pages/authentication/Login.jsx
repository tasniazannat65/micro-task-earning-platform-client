import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      toast.success("Login successful ✅");
      navigate("/dashboard");
    } catch {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-200 relative overflow-hidden py-12 px-4">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-success rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="w-full max-w-md relative z-10 animate-fade-in-up">
        {/* Card Container */}
        <div className="bg-base-100 p-8 md:p-10 rounded-2xl shadow-2xl border-2 border-base-300/60 backdrop-blur-sm">
          
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
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
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-success rounded-full animate-pulse" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-2">
              Welcome Back
            </h2>
            <p className="text-neutral text-sm">
              Sign in to continue to <span className="text-primary font-semibold">Zentaskly</span>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-accent flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email Address
                </span>
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="you@example.com"
              />
              {errors.email && (
                <label className="label">
                  <span className="label-text-alt text-error flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    {errors.email.message}
                  </span>
                </label>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-accent flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Password
                </span>
              </label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="••••••••"
              />
              {errors.password && (
                <label className="label">
                  <span className="label-text-alt text-error flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    {errors.password.message}
                  </span>
                </label>
              )}
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="checkbox checkbox-primary checkbox-sm" 
                />
                <span className="text-neutral group-hover:text-primary transition-colors">
                  Remember me
                </span>
              </label>
              <a 
                href="#" 
                className="text-primary hover:text-secondary font-semibold transition-colors duration-300 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button className="btn w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white border-none shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-neutral/60 text-sm my-6">OR CONTINUE WITH</div>

          {/* Google Login */}
          <GoogleLogin />

          {/* Footer Link */}
          <p className="text-center mt-6 text-sm text-neutral">
            Don't have an account?{" "}
            <Link 
              to="/register" 
              className="text-primary font-semibold hover:text-secondary transition-colors duration-300 hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100/50 backdrop-blur-sm border border-base-300/50 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-xs text-neutral font-medium">
              Secure login with encryption
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Login;