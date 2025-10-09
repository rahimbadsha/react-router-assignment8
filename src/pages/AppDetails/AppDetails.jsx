import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'; 
import downloadIcon from '../../assets/icon-downloads.png'
import reviewIcon from '../../assets/icon-review.png'
import ratingIcon from '../../assets/icon-ratings.png'
import RatingCharts from '../../components/RatingCharts/RatingCharts';
import { toast } from 'react-toastify';
import { addTOInstallDB, getInstallApp } from '../../utility/addToDB';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const AppDetails = () => {
  const { id } = useParams();
  //console.log(id)
  const appDetails = useLoaderData();
  const findAppId = appDetails.find(app => String(app.id) === id);
  const [isInstalled, setIsInstalled] = useState(false);

  if(!findAppId) return <NotFoundPage></NotFoundPage>

  const {title, image, description, companyName, downloads, ratingAvg, reviews, size, ratings} = findAppId;
  //console.log(ratings)

  const handInstalledBtn = () => {

        const currentInstalled = getInstallApp(); 
        //const updatedInstallIds = currentInstalled.filter(appId => appId !== id);
        if(currentInstalled.find(appId => appId === parseInt(id))) {
            toast.error(`${title} Can't Install Same App`)
            return;
        }
    
        addTOInstallDB(findAppId.id)
        setIsInstalled(true)
        toast.success(`${title} Installed successfully!`)
  }

  return (
    <div className="w-full mx-auto md:p-15 p-5 bg-gray-200">
        <div className='max-w-[1600px] mx-auto'>
            <div className='block md:flex gap-10'>
            <div className='bg-white shadow-lg max-w-[200px] p-5 flex items-center justify-center'>
                <img className="w-[190px] mx-auto mb-4"src={image}  />
            </div>
            
            <div>
                <h1 className="text-3xl font-bold mb-3">{title}</h1>
                <p className="mt-2 text-sm text-gray-500">Developed by: <span className='text-[#9F62F2] font-bold'>{companyName}</span> </p>
                <div className="divider"></div>

                <div className='flex md:gap-15 gap-5 justify-center'>
                    <div>
                        <img src={downloadIcon} alt='app' />
                        <p className='py-2'>Downloads</p>
                        <h3 className='font-bold text-2xl'>
                            {
                                downloads >= 1_000_000 ? Math.round(downloads / 1_000_000 * 10) / 10 + 'M'
                                : downloads >= 1_000
                                ? Math.round(downloads/1_000 * 10) / 10 + 'K'
                                : downloads
                            }
                        </h3>
                    </div>
                    <div>
                        <img src={ratingIcon} alt='app' />
                        <p className='py-2'>Average Rating</p>
                        <h3 className='font-bold text-2xl'>
                            {
                                ratingAvg
                            }
                        </h3>
                    </div>
                    <div>
                        <img src={reviewIcon} alt='app' />
                        <p className='py-2'>Total Reviews</p>
                        <h3 className='font-bold text-2xl'>
                            {
                                reviews >= 1_000_000 ? Math.round(reviews / 1_000_000 * 10) / 10 + 'M'
                                : reviews >= 1_000
                                ? Math.round(reviews/1_000 * 10) / 10 + 'K'
                                : reviews
                            }
                        </h3>
                    </div>
                </div>

                <button
                onClick={() => handInstalledBtn()}
                    className={`btn font-medium mt-5 ${isInstalled ? 'bg-gray-400 text-gray-200 cursor-not-allowed' : 'bg-[#00d390] text-white'}`}
                    disabled={isInstalled}
                    >
                    {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
                </button>
                    
            </div>
            
        </div>
        <div className="divider py-5"></div>
        <div>
            
            <RatingCharts ratings={ratings}></RatingCharts>
        </div>

        <div>
            <h3 className='font-bold pt-8'>Description</h3>
            <p className='pt-5 text-gray-500'>{description}</p>
        </div>
        </div>
        
      
    </div>
  );
};

export default AppDetails;
