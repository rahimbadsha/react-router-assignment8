import React from 'react';

const HomeState = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center p-8 text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] sm:p-16">
            
            <h1 className="text-4xl font-bold mb-12 sm:text-4xl">Trusted By Millions, Built For You</h1>

            <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-4xl gap-8 text-center">
                <div className="flex flex-col items-center">
                    <p className="text-sm  mb-1">Total Downloads</p>
                    <h1 className="text-6xl font-bold mb-1 ">29.6M</h1>
                    <p className="text-sm opacity-80"> 27% More Than Last Month</p>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-sm mb-1"> Total Reviews </p>
                    <h1 className="text-6xl font-bold mb-1">   906K</h1>
                    <p className="text-sm opacity-80">46% More Than Last Month</p>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-sm mb-1">Active Apps </p>
                    <h1 className="flex items-center text-6xl font-bold mb-1 ">132<span className="text-4xl ml-1">+</span></h1>
                    <p className="text-sm opacity-80 mt-2"> 31 More Will Launch </p>
                </div>
                
            </div>

            </div>
        </div>
    );
};

export default HomeState;