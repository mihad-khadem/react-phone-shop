import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Banner from "../Pages/Banner/Banner";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;