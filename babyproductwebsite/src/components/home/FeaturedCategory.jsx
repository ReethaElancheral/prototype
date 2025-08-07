import React from 'react';
import CategoryCard from '../home/CategoryCard';
import { BsChevronRight } from 'react-icons/bs';
import homefeature1 from '../../assets/images/homepampers.png'
import homefeature2 from '../../assets/images/homefeature2.png'
import homefeature3 from '../../assets/images/homefeature3.png'
import homefeature4 from '../../assets/images/homefeature4.png'

const featured = [
  { title: 'Diapers & Pampers', imageUrl: homefeature1, to: 'products/pampers' },
  { title: 'Baby Dress',      imageUrl: homefeature2,   to: 'products/girls-fashion' },
  { title: 'Baby Soap',       imageUrl: homefeature3,    to: 'products/soap' },
  { title: 'Baby Stroller & Prams',   imageUrl: homefeature4,  to: 'products/stroller' },
];

export default function FeaturedCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Featured Categories</h2>
        <p className="mt-2 text-lg text-gray-600">Everything Your Baby Needs</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featured.map(cat => (
          <CategoryCard
            key={cat.title}
            title={cat.title}
            imageUrl={cat.imageUrl}
            to={cat.to}
            circleContent={<BsChevronRight className="w-5 h-5" />}
          />
        ))}
      </div>
    </section>
  );
}
