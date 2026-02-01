import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxios();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const token = await result.user.getIdToken();

      await axiosPublic.post(
        "/users",
        {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
          role: "Worker",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Logged in with Google 🎉");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Google login failed");
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="
        group
        relative
        w-full 
        flex items-center justify-center gap-3
        px-6 py-3.5
        bg-base-100
        hover:bg-base-200
        border-2 border-base-300
        hover:border-primary/40
        text-accent
        font-semibold
        text-base
        rounded-xl
        shadow-md
        hover:shadow-xl
        transition-all duration-300
        hover:scale-105
        active:scale-95
        overflow-hidden
      "
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Google Icon */}
      <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-lg bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
        <FcGoogle className="text-2xl" />
      </div>

      {/* Text */}
      <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
        Continue with Google
      </span>

      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </button>
  );
};

export default GoogleLogin;