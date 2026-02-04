import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/home/Home";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./privateRoute";
import DashboardHome from "../pages/dashboard_pages/dashboard_home/DashboardHome";

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
            }
        ]
    }
])