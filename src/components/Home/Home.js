import React from 'react';
import Packages from '../Packages/Packages';
import Banner from './Banner';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Packages></Packages>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;