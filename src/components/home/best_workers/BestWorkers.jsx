import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxios from "../../../hooks/useAxios";
import Container from "../../shared_component/Container";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BestWorkers = () => {
  const axiosPublic = useAxios();
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    axiosPublic.get("/best-workers")
      .then(res => setWorkers(res.data))
      .catch(err => console.error(err));
  }, [axiosPublic]);

  return (
    <section className="pt-10 md:pt-16 lg:pt-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 relative z-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>Top Performers</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6">
            Our{" "}
            <span className="text-primary relative">
              Best Workers
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M2 5.5C50 2.5 150 2.5 198 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-secondary" />
              </svg>
            </span>
          </h2>

          <p className="text-neutral text-base md:text-lg leading-relaxed">
            Meet our top performers who earned the most coins by completing tasks.
            <br />
            <span className="font-semibold text-primary">They're setting the bar high!</span>
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{workers.length}</div>
              <div className="text-sm text-neutral">Top Workers</div>
            </div>
            <div className="w-px h-12 bg-base-300" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-neutral">Success Rate</div>
            </div>
            <div className="w-px h-12 bg-base-300" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Elite</div>
              <div className="text-sm text-neutral">Status</div>
            </div>
          </div>
        </motion.div>

        {/* Workers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {workers.map((worker, index) => (
            <motion.div
              key={worker._id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className="
                group
                bg-base-200
                rounded-2xl
                p-8
                border-2 border-base-300/60
                shadow-xl
                hover:shadow-2xl
                hover:border-primary/40
                transition-all duration-500
                relative
                overflow-hidden
              "
            >
              {/* Rank Badge */}
              {index < 3 && (
                <div className="absolute top-4 right-4 z-10">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg
                    ${index === 0 ? 'bg-gradient-to-br from-warning to-error' : ''}
                    ${index === 1 ? 'bg-gradient-to-br from-neutral to-base-300' : ''}
                    ${index === 2 ? 'bg-gradient-to-br from-warning/60 to-warning/40' : ''}
                  `}>
                    #{index + 1}
                  </div>
                </div>
              )}

              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Trophy Icon Background */}
              <div className="absolute bottom-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-24 w-24 text-primary" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              {/* Avatar */}
              <div className="flex justify-center mb-6 relative">
                <div className="relative">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-primary/30 group-hover:ring-primary transition-all duration-500 shadow-xl">
                    <img
                      src={worker.image}
                      alt={worker.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-3 border-base-100 shadow-lg">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 text-white" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center relative z-10">
                <h3 className="text-xl font-bold text-accent group-hover:text-primary transition-colors duration-300 mb-2">
                  {worker.name}
                </h3>

                {/* Divider */}
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 group-hover:w-16 transition-all duration-500" />

                {/* Coins Badge */}
                <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 shadow-md group-hover:shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">$</span>
                  </div>
                  <div className="text-left">
                    <span className="block text-2xl font-bold text-primary">
                      {worker.coins}
                    </span>
                    <span className="block text-xs text-neutral -mt-1">Coins Earned</span>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 text-success text-xs font-semibold">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-3.5 w-3.5" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Top Performer
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 relative z-10"
        >
          <p className="text-neutral mb-4 text-lg">
            Ready to become a top performer?
          </p>
          <button className="
            group
            px-8 py-4
            bg-gradient-to-r from-primary to-secondary
            hover:from-secondary hover:to-primary
            text-white
            font-bold
            text-base
            rounded-2xl
            shadow-xl shadow-primary/30
            hover:shadow-2xl hover:shadow-secondary/40
            hover:scale-105
            active:scale-95
            transition-all duration-300
            flex items-center gap-3
            mx-auto
          ">
            Start Earning Now
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </Container>
    </section>
  );
};

export default BestWorkers;