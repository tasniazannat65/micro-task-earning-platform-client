import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/home/Home";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./privateRoute";
import DashboardHome from "../pages/dashboard_pages/dashboard_home/DashboardHome";
import BuyerRoute from "./BuyerRoute";
import AddTasks from "../pages/dashboard_pages/buyer_pages/AddTasks";
import MyTasks from "../pages/dashboard_pages/buyer_pages/MyTasks";
import PurchaseCoin from "../pages/dashboard_pages/buyer_pages/PurchaseCoin";
import PaymentHistory from "../pages/dashboard_pages/buyer_pages/PaymentHistory";
import PaymentSuccess from "../pages/dashboard_pages/buyer_pages/PaymentSuccess";
import WorkerRoute from "./WorkerRoute";
import TaskList from "../pages/dashboard_pages/worker_pages/TaskList";
import TaskDetails from "../pages/dashboard_pages/worker_pages/TaskDetails";
import MySubmissions from "../pages/dashboard_pages/worker_pages/MySubmissions";
import WorkerWithdraw from "../pages/dashboard_pages/worker_pages/WorkerWithdraw";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: HomeLayouts,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: '/register',
        Component: Register
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout/>
        </PrivateRoute>,
        children: [
            {
                index: true,
                Component: DashboardHome
            },
            {
                path: '/dashboard/buyer/add-task',
                element: <BuyerRoute>
                    <AddTasks/>
                </BuyerRoute>
            },
            {
                path: '/dashboard/buyer/my-tasks',
                element: <BuyerRoute>
                    <MyTasks/>
                </BuyerRoute>
            },
            {
                path: '/dashboard/buyer/purchase-coin',
                element: <BuyerRoute>
                    <PurchaseCoin/>
                </BuyerRoute>
            },
            {
                path: '/dashboard/payment-history',
                element: <BuyerRoute>
                    <PaymentHistory/>
                </BuyerRoute>
            },
            {
                path: '/dashboard/buyer/payment-success',
                Component: PaymentSuccess
            },
            {
                path: '/dashboard/worker/task-list',
                element:<WorkerRoute>
                    <TaskList/>
                </WorkerRoute>
            },
            {
                path:'/dashboard/worker/task-details/:id',
                Component: TaskDetails
            },
            {
                path: '/dashboard/worker/my-submissions',
                element: <WorkerRoute>
                    <MySubmissions/>
                </WorkerRoute>
            },
            {
                path: '/dashboard/worker/withdrawals',
                element: <WorkerRoute>
                    <WorkerWithdraw/>
                </WorkerRoute>
            }
        ]
    }
])