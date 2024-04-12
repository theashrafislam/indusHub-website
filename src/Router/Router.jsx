import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import UserProfile from "../Pages/UserProfile";
import ContactUs from "../Pages/ContactUs";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/updateProfile",
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: "/userProfile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            }
        ]
    }
]);

export default router;