import React, { Component } from 'react';
import './Footer.css';
import NavBar from './Navbar'
class Footer extends Component {
    render() {
        return (
    <footer className="footer">
    <div className="page-up">
        <a href="#" id="scrollToTopButton"><span className="arrow_carrot-up"></span></a>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="footer__logo">
                   <h1>Store_Movie</h1>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="footer__nav">
                <ul>
                        <li className="active"><a href="">Home</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">Add movies</a></li>
                        <li><a href="#">Checkout</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3">
                <p className="footer__copyright__text" >store_movie@gmail.com</p>
              </div>
          </div>
      </div>
  </footer>
        )
    }
};
export default Footer ;