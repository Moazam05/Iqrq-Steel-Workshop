import React, { Component } from 'react';
import './Banner.css';

import BannerImage from '../../../static/BannerImage.jpg';

class Banner extends Component {
  render() {
    return (
      <>
        {/* <div className='container'> */}
        <div className='wrap-b'>
          <div className='height-b'>
            <div className='row'>
              <div className='col-xs-12 col-sm-6 col-md-12 col-lg-6'>
                <div className='outer-first-b'>
                  <div className='first-b'>DESIGN YOUR OWN</div>
                  <div className='sub-text-b'>
                    CHOOSE FROM A CURATED SELECTION OF FABRICS AND LEATHERS.
                  </div>

                  <div className='third-b'>
                    53 Leathers | 170 Fabrics | Endless Configuration
                  </div>

                  <div className='button-b'>
                    <button>Make an Order</button>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-12 col-lg-6'>
                <div className='outer-second-b'>
                  <div className='second-b'>
                    <img src={BannerImage} alt='Banner' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </>
    );
  }
}

export default Banner;
