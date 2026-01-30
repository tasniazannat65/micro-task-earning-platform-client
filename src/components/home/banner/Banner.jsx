import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    heading: "Earn from Micro Tasks",
    title: "Complete small tasks and earn coins instantly",
    description: "Join thousands of workers earning real money by completing simple micro-tasks. Get paid for your time and effort.",
    bg: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
    cta: "Start Earning",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    heading: "Manage Your Tasks Efficiently",
    title: "Create, track, and review tasks with ease",
    description: "Powerful dashboard to manage all your tasks in one place. Monitor progress, approve work, and grow your business.",
    bg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    cta: "Create Tasks",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    heading: "Join a Growing Community",
    title: "Connect with buyers and workers worldwide",
    description: "Be part of a global network of task creators and completers. Build your reputation and unlock premium opportunities.",
    bg: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    cta: "Join Now",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const Banner = () => {
    return (
        <section className="w-full relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary !w-8',
          bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !mx-1.5',
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        className="h-[85vh] md:h-[90vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background Image with Overlay */}
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.bg})`,
              }}
            >
              {/* Gradient Overlay - Multiple layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/90 via-accent/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-base-100/40 via-transparent to-transparent" />
              
              {/* Animated pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Content Container */}
              <div className="relative h-full flex items-center justify-center px-4 md:px-8">
                <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
                  
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold shadow-lg animate-slide-down">
                    <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                    <span>Zentaskly Platform</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-slide-up">
                    <span className="block mb-2">{slide.heading}</span>
                  </h1>

                  {/* Title */}
                  <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    {slide.title}
                  </p>

                  {/* Description */}
                  <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <button className="
                      group
                      px-8 py-4
                      bg-primary
                      hover:bg-secondary
                      text-white
                      font-bold
                      text-lg
                      rounded-2xl
                      shadow-2xl shadow-primary/50
                      hover:shadow-secondary/50
                      hover:scale-105
                      active:scale-95
                      transition-all duration-300
                      flex items-center gap-3
                    ">
                      {slide.cta}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>

                    <button className="
                      px-8 py-4
                      bg-white/10
                      hover:bg-white/20
                      backdrop-blur-md
                      border-2 border-white/30
                      hover:border-white/50
                      text-white
                      font-semibold
                      text-lg
                      rounded-2xl
                      hover:scale-105
                      active:scale-95
                      transition-all duration-300
                      flex items-center gap-2
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
                      Watch Demo
                    </button>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20">
                      <div className="text-3xl md:text-4xl font-bold text-white">10K+</div>
                      <div className="text-sm text-white/80 mt-1">Active Users</div>
                    </div>
                    <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20">
                      <div className="text-3xl md:text-4xl font-bold text-white">50K+</div>
                      <div className="text-sm text-white/80 mt-1">Tasks Completed</div>
                    </div>
                    <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20">
                      <div className="text-3xl md:text-4xl font-bold text-white">$100K+</div>
                      <div className="text-sm text-white/80 mt-1">Earnings Paid</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="
        swiper-button-prev-custom
        absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10
        w-12 h-12 md:w-14 md:h-14
        rounded-full
        bg-white/20 backdrop-blur-md
        border border-white/30
        text-white
        hover:bg-white/30 hover:scale-110
        active:scale-95
        transition-all duration-300
        flex items-center justify-center
        shadow-xl
        group
      ">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 group-hover:-translate-x-1 transition-transform" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button className="
        swiper-button-next-custom
        absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10
        w-12 h-12 md:w-14 md:h-14
        rounded-full
        bg-white/20 backdrop-blur-md
        border border-white/30
        text-white
        hover:bg-white/30 hover:scale-110
        active:scale-95
        transition-all duration-300
        flex items-center justify-center
        shadow-xl
        group
      ">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 group-hover:translate-x-1 transition-transform" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        /* Custom Swiper Pagination Styling */
        :global(.swiper-pagination) {
          bottom: 2rem !important;
        }

        :global(.swiper-pagination-bullet) {
          transition: all 0.3s ease;
        }

        :global(.swiper-pagination-bullet:hover) {
          transform: scale(1.2);
        }
      `}</style>
    </section>
    );
};

export default Banner;