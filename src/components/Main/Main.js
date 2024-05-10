import React from 'react';
import Faq from "../Faq/Faq";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Prices from "../prices/Prices";
import Header from '../Header/Header';

const Main = () => {
   
    return (
        <>
        <Header/>
        <Hero />
        <Feature />
        <Prices />
        <Faq />
        <Footer />
        </>
    )
}

export default Main;