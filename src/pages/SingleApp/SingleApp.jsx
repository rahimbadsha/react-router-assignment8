import React from 'react';

const SingleApp = ({singleApp}) => {
    const {image, title, ratingAvg, downloads} = singleApp;
    return (
        <div className=''>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className='w-[200px]' src={image} alt="app" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">
                            {
                                downloads >= 1_000_000 ? Math.round(downloads / 1_000_000 * 10) / 10 + 'M'
                                : downloads >= 1_000
                                ? Math.round(downloads/1_000 * 10) / 10 + 'K'
                                : downloads
                            }
                        </div>
                        <div className="badge badge-outline">{ratingAvg}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleApp;