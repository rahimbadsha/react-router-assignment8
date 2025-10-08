import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import AllApp from '../AllApp/AllApp';
import { CiSearch } from 'react-icons/ci';

const AllApps = () => {
    const allAppsData = useLoaderData();
    return (
        <div className='bg-gray-100 w-full mx-auto'>
            <div className='max-w-[1600px] mx-auto text-center pt-10 pb-10 px-5'>
                <div>
                    <h2 className='lg:text-3xl text-xl text-black font-bold'>Our All Applications</h2>
                    <p className='text-gray-400 text-base pt-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className='flex justify-between items-center mb-2 mt-5'>
                    <h2 className='font-bold'>({allAppsData.length}) Apps Found</h2>
                    <div>
                        <label className="input">
                            <CiSearch />
                            <input type="search" required placeholder="Search" />
                            </label>
                    </div>

                </div>

                <div className='grid md:grid-cols-4 grid-cols-1 gap-10 auto-rows-fr'>
                    <Suspense fallback={<span>Loading...</span>}>
                           { allAppsData.map(app => <AllApp key={app.id} app={app}></AllApp>)}
                    </Suspense>
                </div>


            </div>
            
        </div>
    );
};

export default AllApps;