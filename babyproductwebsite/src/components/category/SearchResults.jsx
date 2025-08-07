import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import allProducts from '../data/allProducts';
import BestSellerCard from '../home/BestSellerCard';

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q')?.toLowerCase() || '';

  const results = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">
        Search results for: "<span className="text-blue-600">{query}</span>"
      </h2>

      {results.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <BestSellerCard product={product} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
