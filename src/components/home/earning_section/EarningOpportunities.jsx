import { useEffect, useRef, useState } from "react";
import Container from "../../shared_component/Container";
import {
  BsClipboardCheck,
  BsPhone,
  BsPlayCircle,
  BsShare,
  BsBarChart,
  BsLightningCharge,
} from "react-icons/bs";

const opportunities = [
  {
    id: 1,
    title: "Survey Based Tasks",
    desc: "Complete short surveys and earn coins instantly.",
    icon: <BsClipboardCheck />,
    color: "from-primary to-secondary",
    earnings: "$5-15/hr",
  },
  {
    id: 2,
    title: "App & Website Testing",
    desc: "Test apps or websites and share your feedback.",
    icon: <BsPhone />,
    color: "from-secondary to-warning",
    earnings: "$10-25/hr",
  },
  {
    id: 3,
    title: "Watch & Earn",
    desc: "Watch videos or ads and get rewarded.",
    icon: <BsPlayCircle />,
    color: "from-success to-primary",
    earnings: "$3-8/hr",
  },
  {
    id: 4,
    title: "Social Engagement",
    desc: "Like, comment, or share content on social media.",
    icon: <BsShare />,
    color: "from-warning to-success",
    earnings: "$4-12/hr",
  },
  {
    id: 5,
    title: "Data Labeling",
    desc: "Label images or data for AI training tasks.",
    icon: <BsBarChart />,
    color: "from-primary to-success",
    earnings: "$8-20/hr",
  },
  {
    id: 6,
    title: "Bonus Micro Missions",
    desc: "Limited-time tasks with higher rewards.",
    icon: <BsLightningCharge />,
    color: "from-warning to-error",
    earnings: "$15-40/hr",
    featured: true,
  },
];

const EarningOpportunities = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100); // Stagger animation
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-10 md:pt-16 lg:pt-20  relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary text-sm font-bold mb-6 animate-slide-down">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 animate-pulse" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="10" opacity="0.2" />
              <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Multiple Ways to Earn</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6 animate-fade-in">
            Earning{" "}
            <span className="text-primary relative inline-block">
              Opportunities
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 3 150 3 198 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary opacity-60" />
              </svg>
            </span>
          </h2>

          <p className="text-neutral text-base md:text-lg leading-relaxed mb-8">
            Explore different ways to earn coins by completing simple micro tasks.
            <br />
            <span className="font-semibold text-primary">Choose what works best for you!</span>
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-accent">Flexible Earnings</div>
                <div className="text-xs text-neutral">$3-40 per hour</div>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-base-300" />

            <div className="flex items-center gap-2 text-sm">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-accent">6 Task Types</div>
                <div className="text-xs text-neutral">Pick your favorite</div>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-base-300" />

            <div className="flex items-center gap-2 text-sm">
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-accent">Instant Payouts</div>
                <div className="text-xs text-neutral">Fast & secure</div>
              </div>
            </div>
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {opportunities.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`
                group relative
                bg-base-200
                border-2 border-base-300/60
                rounded-2xl
                p-8
                shadow-lg
                hover:shadow-2xl
                transition-all duration-500
                hover:-translate-y-2
                hover:border-primary/40
                overflow-hidden
                ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                ${item.featured ? 'ring-2 ring-primary/30 ring-offset-2 ring-offset-base-100' : ''}
              `}
              style={{
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-warning to-error text-white text-xs font-bold shadow-lg animate-pulse">
                  🔥 HOT
                </div>
              )}

              {/* Decorative gradient background */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />

              {/* Icon */}
              <div className="relative mb-6">
                <div className={`
                  w-16 h-16
                  flex items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br ${item.color}
                  text-white
                  text-3xl
                  shadow-lg
                  group-hover:scale-110 group-hover:rotate-6
                  transition-all duration-500
                `}>
                  {item.icon}
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-sm text-neutral leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Earnings Badge */}
                <div className="flex items-center justify-between pt-4 border-t border-base-300/50">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <span className="font-bold text-success text-sm">{item.earnings}</span>
                  </div>

                  <button className="
                    flex items-center gap-2
                    text-sm font-semibold
                    text-primary
                    group-hover:gap-3
                    transition-all duration-300
                  ">
                    Start Now
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 group-hover:translate-x-1 transition-transform" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 rounded-3xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 relative z-10">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
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
              View All Opportunities
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
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
              </svg>
              How It Works
            </button>
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

        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default EarningOpportunities;