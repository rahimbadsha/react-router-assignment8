import React from 'react';
import Banner from '../../components/Banner/Banner';
import HomeState from '../../../public/boipoka/src/compoinents/HomeState/HomeState';
import TrendingApps from '../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const appsData = useLoaderData();
    // console.log(appsData)
    return (
        <div>
            <Banner></Banner>
            <HomeState></HomeState>
            <TrendingApps appsData={appsData}></TrendingApps>
        </div>
    );
};

export default Home;