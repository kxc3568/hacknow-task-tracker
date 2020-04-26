import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Features from './Features';
import About from './About';
import Footer from '../General/Footer';

const Landing = () => {
    const loggedIn = localStorage.getItem('loggedIn');
    const user = localStorage.getItem('user');
    console.log(loggedIn, user);
    return ( <React.Fragment>
        <Header />
        <Banner />
        <Features />
        <About />
        <Footer />
    </React.Fragment> );
}
 
export default Landing;