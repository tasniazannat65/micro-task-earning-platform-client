import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Container from "../../shared_component/Container";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Student",
    image: "https://i.pravatar.cc/150?img=32",
    quote:
      "Zentaskly helped me earn while studying. Tasks are simple and payments are fast. Highly recommended!",
    rating: 5,
    verified: true,
  },
  {
    id: 2,
    name: "Mahmud Hasan",
    role: "Freelancer",
    image: "https://i.pravatar.cc/150?img=12",
    quote:
      "This platform is perfect for micro earning. The UI is clean and tasks are easy to understand.",
    rating: 5,
    verified: true,
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Content Creator",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      "I love how smooth and organized everything is. Zentaskly made side income stress-free.",
    rating: 5,
    verified: true,
  },
  {
    id: 4,
    name: "Tanvir Ahmed",
    role: "Web Developer",
    image: "https://i.pravatar.cc/150?img=56",
    quote:
      "One of the best micro-task platforms I've used. Great experience and professional design.",
    rating: 5,
    verified: true,
  },
  {
    id: 5,
    name: "Sadia Islam",
    role: "University Student",
    image: "https://i.pravatar.cc/150?img=21",
    quote:
      "As a student, Zentaskly is a blessing. I can earn small amounts without affecting my studies.",
    rating: 5,
    verified: true,
  },
  {
    id: 6,
    name: "Rakib Hossain",
    role: "Digital Marketer",
    image: "https://i.pravatar.cc/150?img=8",
    quote:
      "Simple tasks, smooth dashboard, and reliable payments. Zentaskly is perfect for side income.",
    rating: 5,
    verified: true,
  },
];

const Testimonials = () => {
  return (
    <section className="pt-10 md:pt-16 lg:pt-20  relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
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
            <span>Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6">
            What Our{" "}
            <span className="text-primary relative">
              Users Say
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M2 5.5C50 2.5 150 2.5 198 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-secondary" />
              </svg>
            </span>
          </h2>

          <p className="text-neutral text-base md:text-lg leading-relaxed">
            Trusted by thousands of users who earn smartly with Zentaskly.
            <br />
            <span className="font-semibold text-primary">Join them today!</span>
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-neutral">Happy Users</div>
            </div>
            <div className="w-px h-12 bg-base-300" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-neutral">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-base-300" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-neutral">Verified</div>
            </div>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="relative z-10 pb-16">
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            autoplay={{ 
              delay: 4000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary !w-8',
              bulletClass: 'swiper-pagination-bullet !bg-neutral/30 !w-3 !h-3 !mx-1.5',
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group h-full bg-base-200 border-2 border-base-300/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-16 w-16 text-primary" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg 
                        key={i}
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-warning fill-current" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base text-neutral leading-relaxed mb-6 relative z-10 min-h-[100px]">
                    "{item.quote}"
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 group-hover:w-24 transition-all duration-500" />

                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-2xl border-3 border-primary/30 object-cover shadow-md group-hover:border-primary group-hover:scale-105 transition-all duration-500"
                      />
                      {item.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-base-100 shadow-md">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-3.5 w-3.5 text-white" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="3"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-accent group-hover:text-primary transition-colors duration-300">
                        {item.name}
                      </h4>
                      <p className="text-sm text-neutral/80 flex items-center gap-1.5">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-3.5 w-3.5" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-3 relative z-10">
          <p className="text-neutral mb-4 text-lg">
            Want to share your experience?
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
            Write a Review
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
        :global(.testimonials-swiper) {
          padding-bottom: 3rem !important;
        }

        :global(.testimonials-swiper .swiper-pagination) {
          bottom: 0 !important;
        }

        :global(.testimonials-swiper .swiper-pagination-bullet) {
          transition: all 0.3s ease;
        }

        :global(.testimonials-swiper .swiper-pagination-bullet:hover) {
          transform: scale(1.3);
          background: var(--color-secondary) !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;