import React from 'react';
import appError from '../../assets/App-Error.png'
import { Link } from 'react-router';

const AppsNotFound = () => {
    return (
        <div className='mx-auto max-w-[1600px] flex flex-col justify-center items-center gap-5'>
            <img src={appError} alt='' />
            <h2>OPPS! APP NOT FOUND</h2>
            <p>The App you are requesting is not found on our system.  please try another apps</p>
             <Link to={'/'}>
                    <button className='w-[145px] h-[48px] flex flex-row justify-center items-center gap-[10px] px-4 py-3 rounded bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button>
            </Link>
        </div>
    );
};

export default AppsNotFound;