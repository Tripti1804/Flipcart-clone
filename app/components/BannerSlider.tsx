'use client'

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BannerSlider: React.FC = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
    >
      <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
        <img src="/banner1.jpg" alt="Banner" className="w-full h-full object-cover" />
      </div>
      <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
        <img src="/banner2.jpg" alt="Banner" className="w-full h-full object-cover" />
      </div>
      <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
        <img src="/banner3.jpg" alt="Banner" className="w-full h-full object-cover" />
      </div>
    </Carousel>
  );
};

export default BannerSlider;
