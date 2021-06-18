import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <section className="hero">
                <div className="container">
                    <div className="hero__slider">
                        <div className="hero__items  hero_img">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero__text">
                                        <h2>Welcom to Anime Store</h2>
                                        <p>Store number one for anime.....</p>
                                        <a href="#"><span>Watch Now</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};
export default Banner ;