import React from 'react';
import footerImg from '../../assets/logo.png'
import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";



const Footer = () => {
    return (
        <div className='bg-[#001931] py-10 px-5'>
            <footer className="text-white flex justify-between items-center">
                <aside className="flex justify-center items-center">
                    <img className='w-[60px]' src={footerImg} />
                    <h3>Hero.io</h3>
                    
                </aside>
                <div>
                    <h3>Social Links</h3>
                    <div className='flex justify-around items-center'>
                        <Link to={'https://www.facebook.com/abd.rahim.badsha/'}><FaFacebook /></Link>
                        <Link to={'https://www.facebook.com/abd.rahim.badsha/'}><FaLinkedin /></Link>
                        <Link to={'https://www.facebook.com/abd.rahim.badsha/'}><FaTwitterSquare /></Link>
                    </div>
                    
                </div>
            </footer>
            {/* <div className="divider"></div> */}
            <div className='pt-4'>
                <p className='text-white text-center'>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>

        </div>
    );
};

export default Footer;