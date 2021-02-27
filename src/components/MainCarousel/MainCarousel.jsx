import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './MainCarousel.css';

import FirstSlide from '../../static/FirstSlide.jpg';
import Hero from '../../static/HeroImage.jpg';
// import SecondSlide from '../../static/SecondSlide.jpg';
// import ThirdSlide from '../../static/ThirdSlide.jpg';

class MainCarousel extends Component {
  render() {
    return (
      <>
        <div className='outer-mc'>
          {/* Hero Image Start */}
          <div className='row'>
            <div className='col-sm-12'>
              <div className='hero-img-mc'>
                <img src={Hero} alt='Hero' />
                <div className='inner-text-hero'>
                  <div className='title-hero-mc'>Iqra Steel Works</div>
                  <div className='para-hero-mc'>
                    We deal all kind of Iron Gate
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Image End */}

          <Carousel>
            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={FirstSlide}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={FirstSlide}
                alt='Second slide'
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={FirstSlide}
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default MainCarousel;
