import React, { Component } from 'react';
import './Trend.css';
import View from './View';
import { Container , row } from 'semantic-ui-react';
import imgtrend1 from'../assets/img/trend-1.jpg'
import imgtrend2 from'../assets/img/trend-2.jpg'
import imgtrend3 from'../assets/img/trend-3.jpg'
import imgtrend4 from'../assets/img/trend-4.jpg'
import imgtrend5 from'../assets/img/trend-5.jpg'
import imgtrend6 from'../assets/img/trend-6.jpg'

class Trend extends Component {
    render() {
        return (
            <Container>
                <section className="product spad">
                    <div className="row">
                    <div className="col-lg-8">
                      <div className="trending__product">
                        <row>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                    <div className="section-title">
                                        <h4>Trending Now</h4>
                                    </div>
                            </div>
                        </row>
                      </div>
                      <div className="row">
                      <div className="col-lg-4">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg">
                                        <img src={imgtrend1}/>
                                        <div className="ep">18 / 18</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                    </div>
                                </div>
                      </div>
                      <div className="col-lg-4">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg">
                                        <img src={imgtrend2}/>
                                        <div className="ep">18 / 18</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien</a></h5>
                                    </div>
                                </div>
                      </div>
                      <div className="col-lg-4">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg">
                                        <img src={imgtrend3}/>
                                        <div className="ep">18 / 18</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Shingeki no Kyojin Season 3 Part 2</a></h5>
                                    </div>
                                </div>
                      </div>
                      <div className="col-lg-4">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg">
                                        <img src={imgtrend4}/>
                                        <div className="ep">18 / 18</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Shingeki no Kyojin Season 3 Part 2</a></h5>
                                    </div>
                                </div>
                      </div>
                      <div className="col-lg-4">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg">
                                        <img src={imgtrend5}/>
                                        <div className="ep">18 / 18</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Shingeki no Kyojin Season 3 Part 2</a></h5>
                                    </div>
                                </div>
                      </div>
                      <div className="col-lg-4">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg">
                                        <img src={imgtrend6}/>
                                        <div className="ep">18 / 18</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Shingeki no Kyojin Season 3 Part 2</a></h5>
                                    </div>
                                </div>
                      </div>
                      </div>
                    </div>
                     <View />
                    </div>
                 
                </section>
            </Container>
        )
    }
};
export default Trend ;