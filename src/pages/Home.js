import React, { Component } from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import Trend from '../components/Trend';

class Home extends Component {
    render() {
        return(
        <div>
            <NavBar />
            <Banner />
            <Trend />  
            <Footer />     
        </div>
        ) ;
    }
}

export default Home