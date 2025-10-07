import React from 'react';

const HomeState = () => {
    return (
        <div className='w-full bg-gradient-to-[125deg] from-[#632EE3] to-[#9F62F2] mx-auto'>
            <div className='mx-auto text-center md:text-3xl text-xl mt-15 text-bold'>
                <h2>Trusted by Millions, Built for You</h2>
            </div>
            <div className="stats">
                <div className="stat place-items-center">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value ">4,200</div>
                    <div className="stat-desc ">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default HomeState;