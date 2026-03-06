import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const WorkerWithdraw = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const coins = user?.coins || 0;
  const withdrawableDollar = coins / 20;

  const [withdrawCoin, setWithdrawCoin] = useState(0);
  const [paymentSystem, setPaymentSystem] = useState("Bkash");
  const [accountNumber, setAccountNumber] = useState("");

  const withdrawAmount = withdrawCoin / 20;

  const handleWithdraw = async (e) => {
    e.preventDefault();

    const res = await axiosSecure.post("/worker/withdraw", {
      withdrawal_coin: withdrawCoin,
      payment_system: paymentSystem,
      account_number: accountNumber,
    });

    if (res.data.success) {
      Swal.fire("Success", "Withdrawal request submitted", "success");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success to-secondary flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-accent">Withdraw Earnings</h1>
          <p className="text-sm text-neutral mt-1">Convert your coins to cash and withdraw</p>
        </div>
      </div>

      {/* Balance Cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {/* Current Coins */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-neutral/70 font-medium mb-1">Available Coins</p>
          <p className="text-4xl font-bold text-primary">{coins}</p>
        </div>

        {/* Withdrawable Amount */}
        <div className="bg-gradient-to-br from-success/10 to-secondary/10 border border-success/20 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-success to-secondary flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-neutral/70 font-medium mb-1">Withdrawable Amount</p>
          <p className="text-4xl font-bold text-success">${withdrawableDollar.toFixed(2)}</p>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-base-100 rounded-xl border-2 border-base-300/60 shadow-xl overflow-hidden">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-base-300/60 px-8 py-6">
          <h2 className="text-xl font-bold text-accent flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Withdrawal Request
          </h2>
          <p className="text-sm text-neutral mt-1">Fill in the details below to withdraw your earnings</p>
        </div>

        {/* Card Body */}
        <div className="p-8">
          {coins < 200 ? (
            <div className="bg-gradient-to-br from-error/10 to-error/5 border-2 border-error/30 rounded-xl p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-error/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-error" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-error mb-2">Insufficient Balance</h3>
              <p className="text-neutral mb-4">You need at least <span className="font-bold text-accent">200 coins</span> to withdraw</p>
              <p className="text-sm text-neutral/70">
                Current balance: <span className="font-bold text-primary">{coins} coins</span>
              </p>
              <p className="text-sm text-neutral/70 mt-1">
                Need: <span className="font-bold text-error">{200 - coins} more coins</span>
              </p>
              <button
                onClick={() => window.location.href = '/dashboard/worker/task-list'}
                className="btn bg-primary hover:bg-secondary text-white border-none shadow-lg mt-6"
              >
                Complete Tasks to Earn
              </button>
            </div>
          ) : (
            <form onSubmit={handleWithdraw} className="space-y-6">
              {/* Conversion Info Banner */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-accent text-sm mb-1">Conversion Rate</h4>
                  <p className="text-xs text-neutral/70">20 coins = $1 USD. Minimum withdrawal: 200 coins ($10)</p>
                </div>
              </div>

              {/* Coin to Withdraw */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-accent flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    Coins to Withdraw
                    <span className="text-error">*</span>
                  </span>
                  <span className="label-text-alt text-neutral/60">Min: 200, Max: {coins}</span>
                </label>
                <input
                  type="number"
                  max={coins}
                  min={200}
                  value={withdrawCoin}
                  onChange={(e) => setWithdrawCoin(Number(e.target.value))}
                  className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Enter coins amount"
                  required
                />
              </div>

              {/* Withdraw Amount (Calculated) */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-accent flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    You Will Receive
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={withdrawAmount.toFixed(2)}
                    readOnly
                    className="input input-bordered w-full bg-gradient-to-r from-success/10 to-success/5 border-success/30 text-success font-bold text-xl cursor-not-allowed"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-success text-sm font-semibold">
                    USD
                  </div>
                </div>
              </div>

              {/* Payment System */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-accent flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                    Payment Method
                    <span className="text-error">*</span>
                  </span>
                </label>
                <select
                  className="select select-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  value={paymentSystem}
                  onChange={(e) => setPaymentSystem(e.target.value)}
                >
                  <option value="Bkash">Bkash</option>
                  <option value="Nagad">Nagad</option>
                  <option value="Rocket">Rocket</option>
                  <option value="Stripe">Stripe</option>
                </select>
              </div>

              {/* Account Number */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-accent flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    Account Number
                    <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder={`Enter your ${paymentSystem} account number`}
                  required
                />
              </div>

              {/* Divider */}
              <div className="divider"></div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="
                  w-full
                  btn
                  bg-gradient-to-r from-success to-secondary
                  hover:from-secondary hover:to-success
                  text-white
                  border-none
                  shadow-lg
                  hover:shadow-xl
                  hover:scale-105
                  active:scale-95
                  transition-all duration-300
                  text-base
                  h-14
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Submit Withdrawal Request
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-base-100 border border-base-300/60 rounded-xl p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-accent text-sm mb-1">Processing Time</h4>
            <p className="text-xs text-neutral/70">Withdrawals are processed within 24-48 hours</p>
          </div>
        </div>

        <div className="bg-base-100 border border-base-300/60 rounded-xl p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-accent text-sm mb-1">Secure Transfer</h4>
            <p className="text-xs text-neutral/70">All transactions are encrypted and secure</p>
          </div>
        </div>

        <div className="bg-base-100 border border-base-300/60 rounded-xl p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-accent text-sm mb-1">Need Help?</h4>
            <p className="text-xs text-neutral/70">Contact support for withdrawal assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerWithdraw;