import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import C1 from './slider-1.jpg'
import C2 from './slider-2.jpg'
import C3 from './slider-3.jpg'

const carouselData = [
  {
    image: C1,
  },
  {
    image: C2,
  },
  { 
    image: C3,
  },
];

const Home = () => {
  return (
    <Carousel autoPlay interval={5000} infiniteLoop showStatus={false} showIndicators={false}>
      {carouselData.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </Carousel>
  );
};

export default Home;
