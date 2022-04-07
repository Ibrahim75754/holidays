import React from 'react';
import Blog from '../Blog/Blog';
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
           <Blog></Blog>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;