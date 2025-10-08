import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useNavigation, useRouteError } from 'react-router';
import { ToastContainer } from 'react-toastify';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

// Optional Page Loader Component
const PageLoader = () => (
    <div className='mx-auto center flex justify-center items-center'>
        <span className="loading loading-dots loading-xl"></span>
    </div>
);

const Root = () => {
    const globalError = useRouteError();
    const navigationAnim = useNavigation();
    return (
        <div>
            <Header></Header>
            <ToastContainer
                position="top-center"
                reverseOrder={false}
            />

            {navigationAnim.state === 'loading' && <PageLoader />}

            {globalError ? <NotFoundPage></NotFoundPage> : <Outlet></Outlet>}
            <Footer></Footer>
        </div>
    );
};

export default Root;