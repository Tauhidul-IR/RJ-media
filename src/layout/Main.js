import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideBar from '../components/LeftSidebar/LeftSideBar';
import RightSideBar from '../components/RightSideBer/RightSideBar';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                    {/* <LeftSideBar></LeftSideBar> */}
                </div>
                <div className='col-span-6'>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-3'>
                    {/* <RightSideBar></RightSideBar> */}
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;