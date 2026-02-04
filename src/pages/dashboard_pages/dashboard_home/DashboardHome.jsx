import React from 'react';
import LoadingSpinner from '../../../components/shared_component/LoadingSpinner';
import useRole from '../../../hooks/useRole';
import AdminDashboardHome from './AdminDashboardHome';
import BuyerDashboardHome from './BuyerDashboardHome';
import WorkerDashboardHome from './WorkerDashboardHome';

const DashboardHome = () => {
  const { role, loading } = useRole();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!role) {
    return <div className="text-center py-10">No role assigned</div>;
  }

  switch (role) {
    case 'admin':
      return <AdminDashboardHome />;
    case 'buyer':
      return <BuyerDashboardHome />;
    case 'worker':
      return <WorkerDashboardHome />;
    default:
      return <div className="text-center py-10">Invalid role</div>;
  }
};

export default DashboardHome;
