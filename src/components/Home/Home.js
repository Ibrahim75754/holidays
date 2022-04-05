import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Banner></Banner>
           <ContactUs></ContactUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;