import React, { Component } from 'react';
// import MainCarousel from '../MainCarousel/MainCarousel';
import MainCarousel from '../MainCarousel/MainCarousel.jsx';
import AllCategories from '../AllCategories/AllCategories';

import BedCard from '../AllCards/BedCard/BedCard';
import Banner from '../AllCards/Banner/Banner';
import SingleImage from '../SingleImage/SingleImage';
import ImageText from '../ImageText/ImageText';
import MapComponent from '../MapComponent/MapComponent';

export class TestComponent extends Component {
  render() {
    return (
      <>
        <MainCarousel />
        <AllCategories />
        <BedCard />
        <Banner />
        <SingleImage />
        <ImageText />
        <MapComponent />
      </>
    );
  }
}

export default TestComponent;
