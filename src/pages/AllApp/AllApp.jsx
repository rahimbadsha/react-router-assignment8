import React from 'react';
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AllApp = ({app}) => {
    const {image, title, ratingAvg, id, downloads} = app;
    //console.log(app)
    return (
        <div>
            <Link to={`/app-details/${id}`}>
                <div className="card bg-white shadow-lg pt-5">
                    <figure className='max-w-[250px]  bg-gray-200 rounded-xl p-5 mx-auto'>
                        <img className='p-5' src={image} alt="app" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className="card-actions justify-between mt-3">
                            <div className="rounded-lg bg-gray-100 px-3 py-2 text-[#00D390] flex gap-2 items-center font-bold">
                                <FiDownload />
                                {
                                    downloads >= 1_000_000 ? Math.round(downloads / 1_000_000 * 10) / 10 + 'M'
                                    : downloads >= 1_000
                                    ? Math.round(downloads/1_000 * 10) / 10 + 'K'
                                    : downloads
                                }
                            </div>
                            <div className="rounded-lg bg-[#FFF0E1] px-3 py-2 text-[#FF8811] flex gap-2 items-center font-bold"><FaStar /> {ratingAvg}</div>
                        </div>
                    </div>
                </div>
            </Link>
            
        </div>
    );
};

export default AllApp;