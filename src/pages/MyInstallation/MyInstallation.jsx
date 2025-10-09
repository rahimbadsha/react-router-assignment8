import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstallApp } from '../../utility/addToDB';
import MyInstalledApps from './MyInstalledApps';

const MyInstallation = () => {
    const myInstalledAppData = useLoaderData();
    const [myInstalledApp, setMyInstalledApp] = useState([]);
    const [installedIds, setInstalledIds] = useState([]);
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        const ids = getInstallApp(); 
        setInstalledIds(ids);

        const installedApps = myInstalledAppData.filter(app => ids.includes(app.id));
        setMyInstalledApp(installedApps);
    }, [myInstalledAppData]);

     const handleSortChange = (e) => {
        const order = e.target.value;
        setSortOrder(order);

        setMyInstalledApp((prevApps) => {
            const sorted = [...prevApps];
            if (order === 'asc') {
                sorted.sort((a, b) => a.downloads - b.downloads);
            } else if (order === 'desc') {
                sorted.sort((a, b) => b.downloads - a.downloads);
            }
            return sorted;
        });
    };

    return (
        <div className='bg-gray-200 mx-auto w-full py-10 px-5 '>
            <div className='mx-auto max-w-[1440px] flex justify-center items-center flex-col  py-5'>
                <h2 className='lg:text-3xl text-xl text-black font-bold'>Your Installed Apps</h2>
                <p className='text-gray-400 text-base pt-2 text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='max-w-[1440px] mx-auto flex justify-between items-center mb-2 mt-5'>
                <h2 className='font-bold'>({myInstalledApp.length}) Apps Found</h2>
                <div>
                    <select
                        value={sortOrder}
                        onChange={handleSortChange}
                        className="select select-neutral"
                    >
                        <option value="">Sort By:</option>
                        <option value="asc">Ascending By: Download</option>
                        <option value="desc">Descending By: Download</option>
                    </select>
                </div>
            </div>

            <div className='mt-5 max-w-[1440px] mx-auto '>
                {myInstalledApp.length > 0 ? (
                    myInstalledApp.map(app => (
                        <MyInstalledApps
                            key={app.id}
                            app={app}
                            setMyInstalledApp={setMyInstalledApp}
                            installedIds={installedIds}
                        />
                    ))
                ) : (
                    <p className='text-gray-500 text-center col-span-full py-10'>No apps installed yet.</p>
                )}
            </div>
        </div>
    );
};

export default MyInstallation;
