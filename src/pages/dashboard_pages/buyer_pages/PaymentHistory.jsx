import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared_component/LoadingSpinner";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get("/payments/history")
      .then(res => {
        setPayments(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  // Calculate stats
  const totalTransactions = payments.length;
  const totalCoins = payments.reduce((sum, p) => sum + p.coins, 0);
  const totalSpent = payments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-accent">Payment History</h1>
            <p className="text-sm text-neutral mt-1">Track all your coin purchase transactions</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral/70 font-medium mb-1">Total Transactions</p>
                <p className="text-3xl font-bold text-primary">{totalTransactions}</p>
              </div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3h18v18H3z" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-success/10 to-warning/10 border border-success/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral/70 font-medium mb-1">Total Coins Purchased</p>
                <p className="text-3xl font-bold text-success">{totalCoins}</p>
              </div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-success to-warning flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral/70 font-medium mb-1">Total Amount Spent</p>
                <p className="text-3xl font-bold text-secondary">${totalSpent.toFixed(2)}</p>
              </div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-base-100 rounded-xl border-2 border-base-300/60 shadow-xl overflow-hidden">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-base-300/60 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-accent flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Transaction List
            </h2>
            <span className="text-sm text-neutral/70">
              {totalTransactions} {totalTransactions === 1 ? 'record' : 'records'}
            </span>
          </div>
        </div>

        {/* Empty State */}
        {payments.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-base-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-accent mb-2">No Payment History</h3>
            <p className="text-neutral mb-6">You haven't made any coin purchases yet</p>
            <button
              onClick={() => window.location.href = '/dashboard/buyer/purchase-coin'}
              className="btn bg-primary hover:bg-secondary text-white border-none shadow-lg"
            >
              Purchase Coins Now
            </button>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="table w-full">
                <thead className="bg-base-200">
                  <tr className="border-b border-base-300">
                    <th className="text-accent font-bold">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="8" y1="6" x2="21" y2="6" />
                          <line x1="8" y1="12" x2="21" y2="12" />
                          <line x1="8" y1="18" x2="21" y2="18" />
                          <line x1="3" y1="6" x2="3.01" y2="6" />
                          <line x1="3" y1="12" x2="3.01" y2="12" />
                          <line x1="3" y1="18" x2="3.01" y2="18" />
                        </svg>
                        #
                      </div>
                    </th>
                    <th className="text-accent font-bold">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        Date
                      </div>
                    </th>
                    <th className="text-accent font-bold">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        Coins
                      </div>
                    </th>
                    <th className="text-accent font-bold">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                        Amount
                      </div>
                    </th>
                    <th className="text-accent font-bold">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                        </svg>
                        Method
                      </div>
                    </th>
                    <th className="text-accent font-bold">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Status
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {payments.map((payment, index) => (
                    <tr key={payment._id} className="border-b border-base-300 hover:bg-base-200 transition-colors">
                      <td className="font-semibold text-neutral/70">#{index + 1}</td>
                      <td className="text-neutral">
                        {new Date(payment.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </td>
                      <td>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                          {payment.coins}
                        </span>
                      </td>
                      <td>
                        <span className="font-bold text-secondary text-lg">
                          ${payment.amount}
                        </span>
                      </td>
                      <td>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-base-200 border border-base-300 text-accent font-medium text-sm capitalize">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                          </svg>
                          {payment.paymentMethod}
                        </span>
                      </td>
                      <td>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 text-success font-semibold text-sm capitalize">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden p-4 space-y-4">
              {payments.map((payment, index) => (
                <div key={payment._id} className="bg-base-200 rounded-xl border border-base-300 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral/60">Transaction #{index + 1}</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/10 border border-success/20 text-success font-semibold text-xs capitalize">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {payment.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-neutral/70 mb-1">Date</p>
                      <p className="text-sm font-medium text-accent">
                        {new Date(payment.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral/70 mb-1">Method</p>
                      <p className="text-sm font-medium text-accent capitalize">{payment.paymentMethod}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-base-300">
                    <div>
                      <p className="text-xs text-neutral/70 mb-1">Coins</p>
                      <span className="inline-flex items-center gap-1 text-primary font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                        {payment.coins}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-neutral/70 mb-1">Amount</p>
                      <p className="text-xl font-bold text-secondary">${payment.amount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;