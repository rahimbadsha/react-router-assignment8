import React from 'react';
import Navbar from '../../compoinents/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../compoinents/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;