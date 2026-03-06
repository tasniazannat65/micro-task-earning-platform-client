import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const GoogleLogin = () => {
  const { googleLogin, refetchUser } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;

      const saveUser = {
        display_name: user.displayName,
        email: user.email,
        photo_url: user.photoURL,
        role: "worker", // default role
        coin: 0,
      };

      //  Save user to DB (if not exists)
      await axios.post("http://localhost:3000/users", saveUser);

      //  Fetch DB user
      await refetchUser(user.email);

      navigate("/dashboard");
    } catch (error) {
      console.error("Google login failed:", error);
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