import React from 'react';
import Container from "../../shared_component/Container";
import {
  BsMortarboard,
  BsLaptop,
  BsHouseDoor,
  BsRocket,
  BsGlobe,
  BsClock,
} from "react-icons/bs";

const personas = [
  {
    id: 1,
    title: "Students",
    desc: "Earn pocket money without affecting your studies.",
    icon: <BsMortarboard />,
    color: "from-primary to-secondary",
    highlight: "Flexible Schedule",
  },
  {
    id: 2,
    title: "Freelancers",
    desc: "Make extra income between your freelance projects.",
    icon: <BsLaptop />,
    color: "from-secondary to-success",
    highlight: "Quick Tasks",
  },
  {
    id: 3,
    title: "Stay-at-Home Users",
    desc: "Flexible earning from the comfort of your home.",
    icon: <BsHouseDoor />,
    color: "from-success to-warning",
    highlight: "Work from Home",
  },
  {
    id: 4,
    title: "Beginners",
    desc: "No experience needed to start earning.",
    icon: <BsRocket />,
    color: "from-warning to-error",
    highlight: "Zero Experience",
  },
  {
    id: 5,
    title: "Remote Workers",
    desc: "Work from anywhere and earn anytime.",
    icon: <BsGlobe />,
    color: "from-primary to-success",
    highlight: "Location Free",
  },
  {
    id: 6,
    title: "Part-time Earners",
    desc: "Perfect for anyone looking for side income in free time.",
    icon: <BsClock />,
    color: "from-secondary to-primary",
    highlight: "Side Income",
  },
];

const PlatformFor = () => {
    return (
        <section className="pt-10 md:pt-16 lg:pt-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-primary rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border-4 border-secondary rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 text-secondary text-sm font-bold mb-6 animate-slide-down">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>Built For Everyone</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6 animate-fade-in">
            Who Is This{" "}
            <span className="text-primary relative inline-block">
              Platform For?
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 3 150 3 198 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary opacity-60" />
              </svg>
            </span>
          </h2>

          <p className="text-neutral text-base md:text-lg leading-relaxed mb-8">
            Zentaskly is designed for everyone looking to earn smartly.
            <br />
            <span className="font-semibold text-primary">Find your perfect fit below!</span>
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 border border-base-300/50 shadow-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-accent">6 User Types</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 border border-base-300/50 shadow-sm">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-accent">No Experience Required</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 border border-base-300/50 shadow-sm">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-accent">Work Anywhere</span>
            </div>
          </div>
        </div>

        {/* Personas Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3  relative z-10">
          {personas.map((item, index) => (
            <div
              key={item.id}
              className="
                group
                relative
                bg-base-200
                border-2 border-base-300/60
                rounded-2xl
                p-8
                text-center
                shadow-lg
                hover:shadow-2xl
                transition-all duration-500
                hover:-translate-y-3
                hover:border-primary/40
                overflow-hidden
                animate-fade-in-up
              "
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Decorative gradient overlay */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
              
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-90">
                <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold shadow-lg`}>
                  {item.highlight}
                </div>
              </div>

              {/* Icon Circle */}
              <div className="relative mb-6 inline-block">
                <div className={`
                  w-20 h-20
                  flex items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br ${item.color}
                  text-white
                  text-4xl
                  shadow-xl
                  group-hover:scale-110 group-hover:rotate-6
                  transition-all duration-500
                  relative
                  z-10
                `}>
                  {item.icon}
                </div>

                {/* Outer glow ring */}
                <div className={`
                  absolute inset-0 
                  rounded-2xl 
                  bg-gradient-to-br ${item.color}
                  opacity-0 group-hover:opacity-30
                  scale-100 group-hover:scale-150
                  transition-all duration-500
                  blur-md
                `} />

                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-2xl bg-primary/30 animate-ping opacity-0 group-hover:opacity-75" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-sm text-neutral leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Feature Icons */}
              <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex items-center gap-1 text-xs text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Easy Start</span>
                </div>
                <div className="w-px h-4 bg-base-300" />
                <div className="flex items-center gap-1 text-xs text-success">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <span>Good Pay</span>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className={`
                absolute bottom-0 left-0 right-0 
                h-1 
                bg-gradient-to-r ${item.color}
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              `} />

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 rounded-3xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 relative z-10">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">
              Ready to Start Earning?
            </h3>
            <p className="text-neutral mb-8 text-base">
              Join thousands of users who are already earning with Zentaskly. No matter who you are, there's a place for you here.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              ">
                Get Started Free
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

              <button className="
                px-8 py-4
                bg-base-100
                hover:bg-base-200
                border-2 border-primary
                text-primary
                font-bold
                text-base
                rounded-2xl
                hover:scale-105
                active:scale-95
                transition-all duration-300
                flex items-center gap-3
              ">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Learn More
              </button>
            </div>
          </div>
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

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
    );
};

export default PlatformFor;