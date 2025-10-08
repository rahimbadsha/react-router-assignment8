import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllApp from '../AllApp/AllApp';
import { CiSearch } from 'react-icons/ci';
import AppsNotFound from '../AppsNotFound/AppsNotFound';

const AllApps = () => {
    const allAppsData = useLoaderData();
    const [searchApp, setSearchApp] = useState("");
    const [filteredApps, setFilteredApps] = useState(allAppsData);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const delay = setTimeout(() => {
        const filtered = allAppsData.filter(app =>
            app.title.toLowerCase().includes(searchApp.toLowerCase())
        );
        setFilteredApps(filtered);
        setLoading(false);
        }, 500); // ⏱ 0.5 second delay (debounce effect)

        return () => clearTimeout(delay);
    }, [searchApp, allAppsData]);


    // const filteredApps = allAppsData.filter(app =>
    //     app.title.toLowerCase().includes(searchApp.toLowerCase())
    // );
    return (
        <div className='bg-gray-100 w-full mx-auto'>
            <div className='max-w-[1600px] mx-auto text-center pt-10 pb-10 px-5'>
                <div>
                    <h2 className='lg:text-3xl text-xl text-black font-bold'>Our All Applications</h2>
                    <p className='text-gray-400 text-base pt-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className='flex justify-between items-center mb-2 mt-5'>
                    <h2 className='font-bold'>({filteredApps.length}) Apps Found</h2>
                    <div>
                        <label className="input">
                            <CiSearch />
                            <input 
                                type="search" 
                                required 
                                placeholder="Search" 
                                value={searchApp}
                                onChange={(e) => setSearchApp(e.target.value)}
                            />
                            </label>
                    </div>

                </div>

                {
                loading ? (
                    <div className="py-10 text-gray-500 text-lg animate-pulse">
                        <span className="loading loading-spinner text-primary"> </span>
                    </div>
                )
                : filteredApps.length === 0 ? (
                    <div className="py-10 text-gray-400 text-lg">
                        <AppsNotFound></AppsNotFound>
                    </div>
                ) 
                : 
                (
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-10 auto-rows-fr'>
                        <Suspense fallback={<span>Loading...</span>}>
                            { filteredApps.map(app => <AllApp key={app.id} app={app}></AllApp>)}
                        </Suspense>
                    </div>
                )
            }

            </div>
            
        </div>
    );
};

export default AllApps;