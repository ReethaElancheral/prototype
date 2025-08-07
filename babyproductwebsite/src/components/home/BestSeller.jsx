// src/components/BestSeller.jsx
import React from 'react';
import Slider from 'react-slick';
import BestSellerCard from '../home/BestSellerCard';
import bestProducts from '../data/bestproducts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function BestSeller() {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: 'slick-dots custom-dots',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
   <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-6">Best Sellers</h2>
        <p className="mt-2 text-xl text-black">Our Most Beloved Products</p>
      </div>
      <Slider {...settings}>
        {bestProducts.map((product) => (
          <div key={product.id} className="px-2">
            <BestSellerCard product={product} />
          </div>
        ))}
      </Slider>
    </section>
  );
}
