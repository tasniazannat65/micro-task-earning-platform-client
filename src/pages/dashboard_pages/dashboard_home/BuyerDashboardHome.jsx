import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../components/shared_component/LoadingSpinner';

const BuyerDashboardHome = () => {
      const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["buyerHomeStats", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/buyer/home-stats/${user.email}`
      );
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
    return (
       <div className="space-y-6">
      <h2 className="text-2xl font-semibold">
        Buyer Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Tasks */}
        <div className="p-6 rounded-xl bg-base-200 shadow">
          <p className="text-sm opacity-70">Total Tasks</p>
          <h3 className="text-3xl font-bold">
            {data?.totalTasks || 0}
          </h3>
        </div>

        {/* Pending Workers */}
        <div className="p-6 rounded-xl bg-base-200 shadow">
          <p className="text-sm opacity-70">Pending Workers</p>
          <h3 className="text-3xl font-bold">
            {data?.pendingWorkers || 0}
          </h3>
        </div>

        {/* Total Paid */}
        <div className="p-6 rounded-xl bg-base-200 shadow">
          <p className="text-sm opacity-70">Total Paid ($)</p>
          <h3 className="text-3xl font-bold">
            {data?.totalPaid || 0}
          </h3>
        </div>
      </div>
    </div>

    );
};

export default BuyerDashboardHome;