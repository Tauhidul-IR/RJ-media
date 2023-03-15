import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                </div>
                <div className='col-span-6'>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-3'>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;