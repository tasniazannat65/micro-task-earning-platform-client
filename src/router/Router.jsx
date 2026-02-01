import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/home/Home";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";

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
    }
])