

import React from 'react';
import Container from "../../shared_component/Container";

import {
  BsCheckCircle,
  BsWallet2,
  BsArrowRepeat,
  BsBank,
} from "react-icons/bs";

const steps = [
  {
    id: 1,
    title: "Complete Tasks",
    desc: "Finish micro tasks and earn reward coins.",
    icon: <BsCheckCircle />,
    color: "from-primary to-secondary",
    stat: "50+ tasks daily",
  },
  {
    id: 2,
    title: "Coins Added to Wallet",
    desc: "Earned coins are instantly added to your wallet.",
    icon: <BsWallet2 />,
    color: "from-secondary to-success",
    stat: "Real-time sync",
  },
  {
    id: 3,
    title: "Convert Coins",
    desc: "Convert coins into withdrawable balance.",
    icon: <BsArrowRepeat />,
    color: "from-success to-warning",
    stat: "1 coin = $0.01",
  },
  {
    id: 4,
    title: "Withdraw Earnings",
    desc: "Withdraw via bank or mobile wallet (coming soon).",
    icon: <BsBank />,
    color: "from-warning to-primary",
    stat: "Min $5 withdraw",
  },
];

const WalletFlow = () => {
    return (
        <section className="pt-10 md:pt-16 lg:pt-20  relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
            </svg>
            <span>How It Works</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6 animate-fade-in">
            Wallet &{" "}
            <span className="text-primary relative inline-block">
              Earning Flow
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 3 150 3 198 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary opacity-60" />
              </svg>
            </span>
          </h2>

          <p className="text-neutral text-base md:text-lg leading-relaxed">
            Understand how your earnings move from tasks to your wallet.
            <br />
            <span className="font-semibold text-primary">Simple, transparent, and secure!</span>
          </p>
        </div>

        {/* Flow Section - Works on all devices */}
        <div className="relative z-10 mb-16">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Card */}
                <div
                  className={`
                    group relative
                    bg-base-200
                    border-2 border-base-300/60
                    rounded-2xl
                    p-6
                    shadow-lg
                    hover:shadow-2xl
                    transition-all duration-700
                    hover:-translate-y-3
                    hover:border-primary/40
                    h-full
                    opacity-100 scale-100
                  `}
                >
                  {/* Step Number Badge */}
                  <div className={`
                    absolute -top-4 -right-4 
                    w-12 h-12 
                    rounded-2xl 
                    bg-gradient-to-br ${step.color}
                    text-white 
                    flex items-center justify-center 
                    text-lg font-bold 
                    shadow-xl
                    group-hover:scale-110 group-hover:rotate-12
                    transition-all duration-500
                  `}>
                    {index + 1}
                  </div>

                  {/* Icon Circle */}
                  <div className={`
                    relative
                    w-16 h-16
                    mx-auto
                    mb-5
                    rounded-2xl
                    bg-gradient-to-br ${step.color}
                    text-white
                    text-3xl
                    flex items-center justify-center
                    shadow-lg
                    group-hover:scale-110 group-hover:rotate-6
                    transition-all duration-500
                  `}>
                    {step.icon}
                    
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/30 animate-ping opacity-0 group-hover:opacity-75" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-accent text-center mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-sm text-neutral text-center leading-relaxed mb-4 min-h-[60px]">
                    {step.desc}
                  </p>

                  {/* Stat Badge */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" opacity="0.5" />
                      </svg>
                      <span className="text-xs font-bold text-primary">{step.stat}</span>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 rounded-3xl`} />
                  </div>
                </div>

                {/* Connecting Arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-primary/40" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden max-w-lg mx-auto space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Card */}
                <div
                  className={`
                    group relative
                    bg-base-200
                    border-2 border-base-300/60
                    rounded-2xl
                    p-8
                    shadow-lg
                    hover:shadow-2xl
                    transition-all duration-500
                    hover:-translate-x-2
                    hover:border-primary/40
                    opacity-100
                  `}
                >
                  {/* Step Number Badge */}
                  <div className={`
                    absolute -top-4 -right-4 
                    w-12 h-12 
                    rounded-2xl 
                    bg-gradient-to-br ${step.color}
                    text-white 
                    flex items-center justify-center 
                    text-lg font-bold 
                    shadow-xl
                    group-hover:scale-110 group-hover:rotate-12
                    transition-all duration-500
                  `}>
                    {index + 1}
                  </div>

                  <div className="flex items-start gap-6">
                    {/* Icon Circle */}
                    <div className={`
                      flex-shrink-0
                      w-20 h-20
                      rounded-2xl
                      bg-gradient-to-br ${step.color}
                      text-white
                      text-4xl
                      flex items-center justify-center
                      shadow-xl
                      group-hover:scale-110 group-hover:rotate-6
                      transition-all duration-500
                    `}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>

                      <p className="text-sm text-neutral leading-relaxed mb-4">
                        {step.desc}
                      </p>

                      {/* Stat Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" opacity="0.5" />
                        </svg>
                        <span className="text-xs font-bold text-primary">{step.stat}</span>
                      </div>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 rounded-3xl`} />
                  </div>
                </div>

                {/* Vertical Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-6">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-10 w-10 text-primary/40" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16 relative z-10">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-neutral">Secure Transactions</div>
          </div>
          <div className="bg-gradient-to-br from-success/10 to-warning/10 border border-success/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-success mb-2">Instant</div>
            <div className="text-sm text-neutral">Coin Addition</div>
          </div>
          <div className="bg-gradient-to-br from-warning/10 to-primary/10 border border-warning/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-warning mb-2">$5</div>
            <div className="text-sm text-neutral">Minimum Withdrawal</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 relative z-10">
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

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
    );
};

export default WalletFlow;


 