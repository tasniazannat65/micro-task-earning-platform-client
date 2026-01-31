import React from 'react';
import Container from "../../shared_component/Container";
import { BsFillPersonCheckFill, BsFillChatDotsFill, BsCodeSlash, BsBarChartFill, BsImageFill, BsGiftFill } from "react-icons/bs";

const categories = [
  { 
    id: 1, 
    name: "Social Media Tasks", 
    icon: <BsFillChatDotsFill />,
    desc: "Like, share, and comment on social posts",
    color: "from-primary to-secondary",
    tasks: "500+ tasks",
  },
  { 
    id: 2, 
    name: "Survey & Feedback", 
    icon: <BsBarChartFill />,
    desc: "Complete surveys and share opinions",
    color: "from-secondary to-success",
    tasks: "300+ tasks",
  },
  { 
    id: 3, 
    name: "App & Website Testing", 
    icon: <BsCodeSlash />,
    desc: "Test apps and report bugs",
    color: "from-success to-warning",
    tasks: "200+ tasks",
  },
  { 
    id: 4, 
    name: "Content Engagement", 
    icon: <BsImageFill />,
    desc: "Watch videos and engage with content",
    color: "from-warning to-error",
    tasks: "400+ tasks",
  },
  { 
    id: 5, 
    name: "Data Verification", 
    icon: <BsFillPersonCheckFill />,
    desc: "Verify and label data accurately",
    color: "from-primary to-success",
    tasks: "250+ tasks",
  },
  { 
    id: 6, 
    name: "Bonus Micro Tasks", 
    icon: <BsGiftFill />,
    desc: "Limited-time high-reward tasks",
    color: "from-secondary to-primary",
    tasks: "50+ tasks",
    featured: true,
  },
];

const TaskCategories = () => {
  return (
    <section className="pt-10 md:pt-16 lg:pt-20  relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at center, var(--color-primary) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary text-sm font-bold mb-6 animate-slide-down">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
            <span>Choose Your Category</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6 animate-fade-in">
            Task{" "}
            <span className="text-primary relative inline-block">
              Categories
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 3 150 3 198 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary opacity-60" />
              </svg>
            </span>
          </h2>

          <p className="text-neutral text-base md:text-lg leading-relaxed">
            Explore tasks in different categories and earn coins in your comfort zone.
            <br />
            <span className="font-semibold text-primary">Pick what you love and start earning!</span>
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3  relative z-10">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              className={`
                group
                relative
                bg-base-200
                border-2 border-base-300/60
                rounded-2xl
                p-8
                flex flex-col items-center
                justify-center
                text-center
                shadow-lg
                hover:shadow-2xl
                transition-all duration-500
                hover:-translate-y-4
                hover:border-primary/40
                cursor-pointer
                overflow-hidden
                animate-fade-in-scale
                ${cat.featured ? 'ring-2 ring-warning/40 ring-offset-2 ring-offset-base-200' : ''}
              `}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Featured Badge */}
              {cat.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-warning to-error text-white text-xs font-bold shadow-lg animate-pulse flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    HOT
                  </div>
                </div>
              )}

              {/* Decorative gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Animated corner accent */}
              <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${cat.color} opacity-20 rounded-br-full transform -translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`} />

              {/* Icon Container */}
              <div className="relative mb-6 z-10">
                <div className={`
                  w-24 h-24
                  flex items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br ${cat.color}
                  text-white
                  text-5xl
                  shadow-xl
                  group-hover:scale-110 group-hover:rotate-12
                  transition-all duration-500
                  relative
                `}>
                  {cat.icon}
                  
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-2xl bg-white/30 animate-ping opacity-0 group-hover:opacity-75" />
                </div>

                {/* Outer glow */}
                <div className={`
                  absolute inset-0 
                  rounded-2xl 
                  bg-gradient-to-br ${cat.color}
                  opacity-0 group-hover:opacity-40
                  scale-100 group-hover:scale-150
                  transition-all duration-500
                  blur-xl
                `} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
                  {cat.name}
                </h3>

                <p className="text-sm text-neutral leading-relaxed mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.desc}
                </p>

                {/* Task Count Badge */}
                <div className={`
                  inline-flex items-center gap-2 
                  px-4 py-2 
                  rounded-full 
                  bg-gradient-to-r ${cat.color}
                  bg-opacity-10
                  border border-primary/20
                  transform translate-y-2 opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500
                `}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span className="text-xs font-bold text-primary">{cat.tasks}</span>
                </div>
              </div>

              {/* Bottom action button */}
              <button className={`
                mt-6
                px-6 py-3
                rounded-2xl
                bg-gradient-to-r ${cat.color}
                text-white
                font-semibold
                text-sm
                shadow-lg
                transform translate-y-4 opacity-0
                group-hover:translate-y-0 group-hover:opacity-100
                hover:scale-105
                active:scale-95
                transition-all duration-500
                flex items-center gap-2
                z-10
              `}>
                Browse Tasks
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              {/* Bottom gradient line */}
              <div className={`
                absolute bottom-0 left-0 right-0 
                h-1.5 
                bg-gradient-to-r ${cat.color}
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
                rounded-b-3xl
              `} />

              {/* Hover sparkle effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-primary mb-2">1,700+</div>
            <div className="text-sm text-neutral font-semibold">Total Active Tasks</div>
          </div>
          <div className="bg-gradient-to-br from-success/10 to-warning/10 border-2 border-success/30 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-success mb-2">Daily</div>
            <div className="text-sm text-neutral font-semibold">New Tasks Added</div>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/30 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-secondary mb-2">6</div>
            <div className="text-sm text-neutral font-semibold">Task Categories</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 relative z-10">
          <p className="text-neutral mb-6 text-lg">
            Can't find what you're looking for?
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
            View All Tasks
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
        </div>
      </Container>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default TaskCategories;