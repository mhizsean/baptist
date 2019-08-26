import React, { Component } from "react";
import Slider from "react-slick";
import './Slider.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
              <img src="assets/1.jpg" alt="" />
            <h3>1</h3>
          </div>
          <div>
          <img src="assets/2.jpg" alt="" />
            <h3>2</h3>
          </div>
          <div>
          <img src="assets/3.png" alt="" />
            <h3>3</h3>
          </div>
          <div>
          <img src="assets/1.jpg" alt="" />
            <h3>4</h3>
          </div>
          <div>
          <img src="assets/1.jpg" alt="" />
            <h3>5</h3>
          </div>
          <div>
          <img src="assets/1.jpg" alt="" />
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}