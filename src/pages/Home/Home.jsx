import React from 'react';
import Banner from '../../components/Banner/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';
import HomeState from '../HomeState/HomeState';

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