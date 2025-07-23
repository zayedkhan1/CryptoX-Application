import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../SharedPage/Navbar';
import Footer from '../SharedPage/Footer';

const MainLayout = () => {
    return (
        <div className="bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834] min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;