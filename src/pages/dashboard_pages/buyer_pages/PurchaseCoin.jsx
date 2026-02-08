import useAxiosSecure from "../../../hooks/useAxiosSecure";

const packages = [
  { 
    coins: 10, 
    amount: 1,
    popular: false,
    features: ['Basic Tasks', 'Standard Support', '7 Days Validity']
  },
  { 
    coins: 150, 
    amount: 10,
    popular: true,
    features: ['All Tasks Access', 'Priority Support', '30 Days Validity', '5% Bonus']
  },
  { 
    coins: 500, 
    amount: 20,
    popular: false,
    features: ['Premium Tasks', 'VIP Support', '60 Days Validity', '10% Bonus']
  },
  { 
    coins: 1000, 
    amount: 35,
    popular: false,
    features: ['Unlimited Tasks', '24/7 Support', '90 Days Validity', '15% Bonus']
  },
];

const PurchaseCoin = () => {
  const axiosSecure = useAxiosSecure();

  const handleBuy = async (pkg) => {
    const res = await axiosSecure.post("/create-checkout-session", pkg);

    if (res.data?.url) {
      window.location.assign(res.data.url);
    }
  };

  return (
  <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span>Coin Packages</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
          Purchase{" "}
          <span className="text-primary relative inline-block">
            Coins
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
              <path d="M2 8C50 3 150 3 198 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary opacity-60" />
            </svg>
          </span>
        </h1>
        <p className="text-neutral text-lg max-w-2xl mx-auto">
          Choose the perfect package for your needs. All packages include instant delivery and secure payment.
        </p>

        {/* Payment Methods */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 border border-base-300 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="text-sm font-semibold text-accent">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 border border-base-300 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"/>
            </svg>
            <span className="text-sm font-semibold text-accent">Instant Delivery</span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {packages.map((pkg, i) => (
          <div 
            key={i} 
            className={`
              group
              relative
              bg-base-100
              rounded-xl
              border-2
              overflow-hidden
              transition-all duration-500
              hover:-translate-y-2
              ${pkg.popular 
                ? 'border-primary shadow-2xl shadow-primary/20 ring-2 ring-primary/30 ring-offset-2 ring-offset-base-200' 
                : 'border-base-300/60 shadow-xl hover:border-primary/40 hover:shadow-2xl'
              }
            `}
          >
            {/* Popular Badge */}
            {pkg.popular && (
              <div className="absolute top-0 right-0 z-10">
                <div className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-lg flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  MOST POPULAR
                </div>
              </div>
            )}

            {/* Decorative gradient */}
            <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${pkg.popular ? 'from-primary/20 to-secondary/20' : 'from-primary/10 to-secondary/10'} opacity-50`} />

            {/* Card Content */}
            <div className="relative p-8">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className={`
                  w-20 h-20 
                  rounded-xl 
                  bg-gradient-to-br from-primary to-secondary 
                  flex items-center justify-center 
                  shadow-xl
                  group-hover:scale-110 group-hover:rotate-6
                  transition-all duration-500
                `}>
                  <span className="text-white font-bold text-2xl">$</span>
                </div>
              </div>

              {/* Coins Count */}
              <div className="text-center mb-6">
                <h3 className="text-5xl font-bold text-accent mb-2">
                  {pkg.coins}
                </h3>
                <p className="text-neutral/70 font-medium">Coins</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="inline-flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary">$</span>
                  <span className="text-4xl font-bold text-primary">{pkg.amount}</span>
                </div>
                <p className="text-xs text-neutral/60 mt-1">One-time payment</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-neutral">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Buy Button */}
              <button
                onClick={() => handleBuy(pkg)}
                className={`
                  w-full
                  btn
                  border-none
                  shadow-lg
                  hover:shadow-xl
                  hover:scale-105
                  active:scale-95
                  transition-all duration-300
                  text-base
                  h-12
                  ${pkg.popular 
                    ? 'bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white' 
                    : 'bg-base-200 hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-accent hover:text-white'
                  }
                `}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
                Buy with Stripe
              </button>
            </div>

            {/* Hover Glow Effect */}
            <div className={`
              absolute inset-0 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-500 
              pointer-events-none
              ${pkg.popular ? 'bg-gradient-to-br from-primary/5 to-secondary/5' : ''}
            `} />
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-base-100 border border-base-300/60 rounded-xl p-6 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-accent mb-1">Secure Payment</h4>
            <p className="text-sm text-neutral/70">All transactions are encrypted and secure via Stripe</p>
          </div>
        </div>

        <div className="bg-base-100 border border-base-300/60 rounded-xl p-6 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-accent mb-1">Instant Delivery</h4>
            <p className="text-sm text-neutral/70">Coins are credited to your account immediately</p>
          </div>
        </div>

        <div className="bg-base-100 border border-base-300/60 rounded-xl p-6 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-accent mb-1">24/7 Support</h4>
            <p className="text-sm text-neutral/70">Our team is here to help you anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCoin;
