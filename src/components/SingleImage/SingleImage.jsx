import React, { Component } from 'react';
import './SingleImage.css';
import Button from '@material-ui/core/Button';

import FirstMedium from '../../static/FirstMedium.jpg';

class SingleImage extends Component {
  render() {
    return (
      <>
        <div className='outer-si'>
          <div className='row'>
            <div
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'
              style={{ paddingRight: '0px', marginBottom: '20px' }}
            >
              <img src={FirstMedium} alt='First Medium' />
            </div>
            <div
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'
              style={{ paddingRight: '0px', marginBottom: '20px' }}
            >
              <img src={FirstMedium} alt='First Medium' />
            </div>
            <div
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'
              style={{ paddingRight: '0px', marginBottom: '20px' }}
            >
              <img src={FirstMedium} alt='First Medium' />
            </div>
            <div
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'
              style={{ paddingRight: '0px', marginBottom: '20px' }}
            >
              <img src={FirstMedium} alt='First Medium' />
            </div>
          </div>
        </div>

        <div className='image-text-si'>
          <div className='image-inner-si'>
            <div className='main-text-si'>FROM HOUSE TO HOME</div>
            <div className='sub-text-si'>
              Discover people who made a space their own. #MYEQ3
            </div>

            <div className='button-si'>
              <Button variant='contained'>Get Inspired</Button>
            </div>
          </div>
        </div>
        {/* <h3>Single Image</h3> */}
      </>
    );
  }
}

export default SingleImage;
