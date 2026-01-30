import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/home/Home";

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
    }
])