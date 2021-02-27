import React, { Component } from 'react';
import './BedCard.css';

import BedImage from '../../../static/bed.png';

class BedCard extends Component {
  render() {
    return (
      <>
        <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
          <div className='row'>
            <div
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'
              style={{ paddingRight: '0px' }}
            >
              <div className='wrap-card-bc'>
                <div className='container-card-bc'>
                  <div className='inner-card-bc'>
                    <img src={BedImage} alt='Bed' />

                    <div className='inner-card-text'>Bedroom</div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd Column */}
            <div
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'
              style={{ paddingRight: '0px' }}
            >
              <div className='wrap-card-bc'>
                <div className='container-card-bc'>
                  <div className='inner-card-bc'>
                    <img src={BedImage} alt='Bed' />

                    <div className='inner-card-text'>Bedroom</div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd Column */}
            <div
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'
              style={{ paddingRight: '0px' }}
            >
              <div className='wrap-card-bc'>
                <div className='container-card-bc'>
                  <div className='inner-card-bc'>
                    <img src={BedImage} alt='Bed' />

                    <div className='inner-card-text'>Bedroom</div>
                  </div>
                </div>
              </div>
            </div>
            {/* 4th Column */}
            <div
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'
              style={{ paddingRight: '0px' }}
            >
              <div className='wrap-card-bc'>
                <div className='container-card-bc'>
                  <div className='inner-card-bc'>
                    <img src={BedImage} alt='Bed' />

                    <div className='inner-card-text'>Bedroom</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BedCard;
