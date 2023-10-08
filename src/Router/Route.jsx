import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/Fevorites/Fevorite";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/Error/ErrorPage";
import Phone from "../Pages/Phones/Phone";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/phones.json')
            },
            {
                path: "/favorites",
                element: <Favorite></Favorite>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/phones/:id",
                element: <Phone></Phone>,
                loader: () => fetch('/phones.json')
            }
        ]
    }
])

export default myCreatedRoute; 