import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/Fevorites/Fevorite";
import Login from "../Pages/Login/Login";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/favorites",
                element: <Favorite></Favorite>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
])

export default myCreatedRoute;