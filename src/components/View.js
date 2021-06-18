import React, { Component } from 'react';
import './View.css';
import img1 from '../assets/img/tv-1.jpg'
import img2 from '../assets/img/tv-2.jpg'
import img3 from '../assets/img/tv-3.jpg'
import img4 from '../assets/img/tv-4.jpg'
class View extends Component {
    render() {
        return (
            <div className="col-lg-4">
            <div className="product__sidebar">
            <div className="product__sidebar__view">
                <div className="section-title">
                    <h5>Top Views</h5>
                </div>
                <ul className="filter__controls">
                    <li className="active" data-filter="*">Day</li>
                    <li data-filter=".week">Week</li>
                    <li data-filter=".month">Month</li>
                    <li data-filter=".years">Years</li>
                </ul>
                <div className="filter__gallery">
                    <div className="product__sidebar__view__item set-bg mix day years">
                    <img src={img1} />
                    <div className="ep">18 / ?</div>
                    <div className="view"><i className="fa fa-eye"></i> 9141</div>
                    <h5><a href="#">Boruto: Naruto next generations</a></h5>
                </div>
                <div className="product__sidebar__view__item set-bg mix month week">
                <img src={img2} />
                <div className="ep">18 / ?</div>
                <div className="view"><i className="fa fa-eye"></i> 9141</div>
                <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
            </div>
            <div className="product__sidebar__view__item set-bg mix week years">
            <img src={img3} />
            <div className="ep">18 / ?</div>
            <div className="view"><i className="fa fa-eye"></i> 9141</div>
            <h5><a href="#">Sword art online alicization war of underworld</a></h5>
        </div>
        <div className="product__sidebar__view__item set-bg mix years month">
        <img src={img4} />
        <div className="ep">18 / ?</div>
        <div className="view"><i className="fa fa-eye"></i> 9141</div>
        <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
    </div>
</div>
</div>
</div>
</div>
        )
    }
};
export default View ;