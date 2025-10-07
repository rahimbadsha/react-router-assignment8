import React from 'react';
import SingleApp from '../SingleApp/SingleApp';

const TrendingApps = ({appsData}) => {
    
    return (
        <div className='flex flex-col '>
            <div className='flex justify-center items-center flex-col mb-15 mt-15'>
                <h2 className='lg:text-5xl md:text-3xl text-2xl font-bold'>Trending Apps</h2>
                <p className='text-xl mt-3 text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10 auto-rows-fr'>
                {
                 appsData.map(singleApp => <SingleApp key={singleApp.id} singleApp={singleApp} ></SingleApp>)
                }
            </div>

            <div className='mx-auto mt-10 mb-10'>
                <button className='w-[145px] h-[48px] flex flex-row justify-center items-center gap-[10px] px-4 py-3 rounded bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white'>Show All</button>
            </div>
            
        </div>
    );
};

export default TrendingApps;