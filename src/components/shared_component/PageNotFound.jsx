import { motion } from "framer-motion";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-base-100 transition-colors duration-500 relative overflow-hidden">

      {/* Floating Coins Background */}
      <motion.div
        className="absolute text-4xl opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        style={{ top: "15%", left: "10%" }}
      >
        💰
      </motion.div>

      <motion.div
        className="absolute text-5xl opacity-20"
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        style={{ bottom: "20%", right: "15%" }}
      >
        🪙
      </motion.div>

      <motion.div
        className="absolute text-3xl opacity-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        style={{ top: "60%", left: "25%" }}
      >
        💸
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.h1
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-8xl md:text-9xl font-extrabold text-primary"
        >
          404
        </motion.h1>

        <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-base-content">
          Oops! Task Not Found
        </h2>

        <p className="mt-4 max-w-md mx-auto text-neutral">
          Looks like this earning opportunity has disappeared.
          Don’t worry — more tasks are waiting for you!
        </p>

        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="btn bg-primary hover:bg-secondary text-base-100 border-none rounded-full px-8"
          >
            Back to Dashboard
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
