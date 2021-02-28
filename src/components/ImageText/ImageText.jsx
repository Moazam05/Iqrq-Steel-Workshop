import React, { Component } from 'react';
import './ImageText.css';
import Button from '@material-ui/core/Button';

import SideImage from '../../static/SideImage.png';

class ImageText extends Component {
  render() {
    return (
      <>
        <div className='wrap-it'>
          {/* 1st 50% */}
          <div className='row'>
            <div className='image-it'>
              <img src={SideImage} alt='Side' />
            </div>

            {/* 2nd 50% */}
            <div className='handle-it'>
              <div className='main-heading-it'>SINK IN: CELLO PLUSH</div>
              <div className='sub-heading-it'>
                Foam and feather combine to reach the pinnacle of comfort
              </div>
              <div className='shop-it'>
                <Button variant='contained'>Shop Now</Button>
              </div>
            </div>

            {/* <h3>Image Text</h3> */}
          </div>
        </div>

        {/* 2nd Image Section */}

        <div className='second-wrap-it'>
          {/* 1st 50% */}
          <div className='row second-it'>
            <div className='second-handle-it'>
              <div className='second-main-heading-it'>SLEEK & VERSATILE</div>
              <div className='second-sub-heading-it'>
                The adjustable Finn Side Table is the suitable companion for
                your sofa or bed.
              </div>
              <div className='second-shop-it'>
                <Button variant='contained'>Shop Now</Button>
              </div>
            </div>

            {/* 2nd 50% */}

            <div className='second-image-it'>
              <img src={SideImage} alt='Side' />
            </div>
            {/* <h3>Image Text</h3> */}
          </div>
        </div>
      </>
    );
  }
}

export default ImageText;
