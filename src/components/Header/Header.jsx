import React from 'react';
import { Link, Links } from 'react-router';
import { FaGithub } from "react-icons/fa";
import logo from '../../assets/logo.png';

const Header = () => {

    const links = <>

        <Link to={'/'}><li className='m-2'>Home</li></Link>
        <Link to={'/apps'}><li className='m-2'>Apps</li></Link>
        <Link to={'/installation'}><li className='m-2'>Installation</li></Link>
    
    </>

    return (
        <div className="w-full bg-base-100 shadow-sm"> 
            <div className="max-w-[1600px] mx-auto flex justify-between items-center px-4 py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <Link to={'/'}>
                        <a className="flex justify-center items-center gap-2 text-bold text-base text-violet-600"><img className='max-w-[40px]' src={logo} alt='logo' />Hero.io</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                     <a href="https://github.com/rahimbadsha"  target="_blank" >
                        <button className='w-[145px] h-[48px] flex flex-row justify-center items-center gap-[10px] px-4 py-3 rounded bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white'><FaGithub /> Contribute</button>
                     </a>
                </div>
                </div>
        </div>
    );
};

export default Header;