import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Features from './Features';
import About from './About';
import Footer from '../General/Footer';

const Landing = () => {
    return ( <React.Fragment>
        <Header />
        <Banner />
        <Features />
        <About />
        <Footer />
    </React.Fragment> );
}
 
export default Landing;