import React from 'react';
import Packages from '../Packages/Packages';
import Banner from './Banner';
import ContactUs from './ContactUs';
import SwiperPage from './SwiperPage';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           
           <Packages></Packages>
           <SwiperPage></SwiperPage>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;