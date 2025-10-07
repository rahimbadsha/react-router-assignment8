import React from 'react';
import heroImg from '../../assets/hero.png'
import gPlayIcon from '../../assets/googleIcon.png'
import aPlayIcon from '../../assets/appleIcon.png'

const Banner = () => {
    return (
        <div className='w-full bg-base-200 pt-15'>
            <div className="hero max-w-[800px] mx-auto">
                <div className="text-center mx-auto">
                    <div className="">
                        <h1 className="lg:text-7xl md:text-4xl text-2xl  font-bold">We Build <br></br>
    <span className=' bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                        <p className="py-6 text-base text-gray-400">At HERO.IO, we craft innovative  pps designed to make everyday life simpler, smarter, and more exciting.Our oal is to turn your ideas into digital experiences that truly make an impact.</p>
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                        <a href='https://play.google.com/store/apps?hl=en' target='_blank'><button className="w-[200px] h-[56px] flex justify-center items-center gap-2.5 px-6 py-3 border border-[#d2d2d2] rounded"><img src={gPlayIcon} />Google Play</button></a>
                        <a href='https://www.apple.com/app-store/' target='_blank'><button className="w-[200px] h-[56px] flex justify-center items-center gap-2.5 px-6 py-3 border border-[#d2d2d2] rounded"><img src={aPlayIcon} />App Store</button></a>
                    </div>
                    <div className='mt-7'>
                        <img className='w-[900px] mx-auto' src={heroImg} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;