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
    <div className="max-w-2xl mx-auto bg-base-100 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Withdraw Earnings</h2>

      {/* Earnings */}
      <div className="mb-6">
        <p>Current Coins: <b>{coins}</b></p>
        <p>Withdrawable Amount: <b>${withdrawableDollar}</b></p>
      </div>

      {coins < 200 ? (
        <p className="text-error font-semibold">
          Insufficient coin (Minimum 200 coins required)
        </p>
      ) : (
        <form onSubmit={handleWithdraw} className="space-y-4">
          <div>
            <label className="label">Coin to Withdraw</label>
            <input
              type="number"
              max={coins}
              min={200}
              value={withdrawCoin}
              onChange={(e) => setWithdrawCoin(Number(e.target.value))}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">Withdraw Amount ($)</label>
            <input
              type="number"
              value={withdrawAmount}
              readOnly
              className="input input-bordered w-full bg-base-200"
            />
          </div>

          <div>
            <label className="label">Payment System</label>
            <select
              className="select select-bordered w-full"
              value={paymentSystem}
              onChange={(e) => setPaymentSystem(e.target.value)}
            >
              <option>Bkash</option>
              <option>Nagad</option>
              <option>Rocket</option>
              <option>Stripe</option>
            </select>
          </div>

          <div>
            <label className="label">Account Number</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary w-full">
            Withdraw
          </button>
        </form>
      )}
    </div>
  );
};

export default WorkerWithdraw;
