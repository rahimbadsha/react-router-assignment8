import React from 'react';
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';
import { getInstallApp } from '../../utility/addToDB';

const MyInstalledApps = ({ app, setMyInstalledApp }) => {
    const { image, title, ratingAvg, id, downloads } = app;

    const handleUninstallBtn = () => {
        // Remove from localStorage
        const currentInstalled = getInstallApp(); 
        const updatedInstallIds = currentInstalled.filter(appId => appId !== id);
        localStorage.setItem('installAPP', JSON.stringify(updatedInstallIds));

        // Update new ui
        setMyInstalledApp(prev => prev.filter(a => a.id !== parseInt(id) ));
        toast.success(`${title} Uninstalled`);
    };

    return (
        <div className="card bg-white shadow-lg p-5 mt-4 block sm:flex sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center gap-4">
                <figure className="w-[100px] bg-gray-200 rounded-xl p-3 flex justify-center items-center">
                    <img className="p-1" src={image} alt="app" />
                </figure>
                <div className="min-w-0">
                    <h2 className="card-title text-lg font-bold truncate">{title}</h2>
                    <div className="flex gap-10 mt-2 flex-wrap items-center">
                        <div className="text-[#00D390] flex gap-1 items-center font-bold">
                            <FiDownload />
                            {downloads >= 1_000_000
                                ? Math.round(downloads / 1_000_000 * 10) / 10 + 'M'
                                : downloads >= 1_000
                                ? Math.round(downloads / 1_000 * 10) / 10 + 'K'
                                : downloads}
                        </div>
                        <div className="text-[#FF8811] flex gap-1 items-center font-bold">
                            <FaStar /> {ratingAvg}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-3 md:mt-0 md:ml-4  flex flex-col">
                <button onClick={handleUninstallBtn} className="btn bg-[#00d390] text-white font-bold">
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default MyInstalledApps;
