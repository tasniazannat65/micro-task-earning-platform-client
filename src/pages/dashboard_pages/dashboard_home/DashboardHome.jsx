import React from 'react';
import useRole from '../../../hooks/useRole';
import LoadingSpinner from '../../../components/shared_component/LoadingSpinner';
import AdminDashboardHome from './AdminDashboardHome';
import BuyerDashboardHome from './BuyerDashboardHome';
import WorkerDashboardHome from './WorkerDashboardHome';

const DashboardHome = () => {
     const {role, loading} = useRole();
    if(loading){
        return <LoadingSpinner/>
    }
    if(role === 'admin'){
        return <AdminDashboardHome/>
    }
    else if(role === 'buyer'){
        return <BuyerDashboardHome/>
    }
    else {
        return <WorkerDashboardHome/>
    }
};

export default DashboardHome;