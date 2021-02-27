import React from 'react';
import { Query } from 'react-apollo';
import { AllCategories_QUERY } from '../graphql/index.js';
import CarouselComponent from '../Carousel.js';
// import Card from '../Card.js'
import MapLocation from '../MapLocation.js';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Iqra Steel Works</title>
        <link rel='canonical' href='http://mysite.com/example' />
        <meta
          name='description'
          content='jhfjksdh fsfhjfdh ksjhfdkjsd fkjshfkjsd fdfsd'
        />
      </Helmet>

      {/* Main Carousel */}
      <CarouselComponent />

      <Query query={AllCategories_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) {
            console.log(error);
            return <div>Error</div>;
          }
          const items = data.allCategories;
          return (
            <>
              <CarouselComponent data={items} />
            </>
          );
        }}
      </Query>

      <MapLocation />
    </div>
  );
}

export default Home;
