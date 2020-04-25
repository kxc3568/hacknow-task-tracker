import React from 'react';
import Navigation from '../Dashboard/Navigation';
import Banner from './Banner';
import Features from './Features';
import About from './About';
import Footer from './Footer';

const Landing = () => {
    return ( <React.Fragment>
        <Navigation />
        <Banner />
        <Features />
        <About />
        <Footer />
    </React.Fragment> );
}
 
export default Landing;