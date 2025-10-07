import React from 'react';
import heroImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="text-center mx-auto">
                    <div className="">
                        <h1 className="text-5xl font-bold">We Build
    Productive Apps</h1>
                        <p className="py-6">At HERO.IO, we craft innovative  pps designed to make everyday life simpler, smarter, and more exciting.Our oal is to turn your ideas into digital experiences that truly make an impact.</p>
                    </div>
                    <div>
                        <button className="btn btn-primary">Google Play</button>
                        <button className="btn btn-primary">App Store</button>
                    </div>
                    <div>
                        <img className='w-[900px] mx-auto' src={heroImg} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;