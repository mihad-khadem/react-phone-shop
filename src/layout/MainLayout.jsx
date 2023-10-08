import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Banner from "../Pages/Banner/Banner";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;