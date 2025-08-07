// src/components/Breadcrumbs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const formatName = (str) => {
  if (!str) return '';
  return str
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const Breadcrumbs = ({ category, productName }) => {
  return (
    <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {/* Home */}
        <li className="flex items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">&gt;</span>
        </li>

        {/* Fake Product Level */}
        <li className="flex items-center">
          <span className="text-gray-800 font-semibold">Product</span>
          {category && <span className="mx-2">&gt;</span>}
        </li>

        {/* Category */}
        {category && (
          <>
            <li className="flex items-center">
              <Link to={`/products/${category.toLowerCase()}`} className="hover:underline">
                {formatName(category)}
              </Link>
              {productName && <span className="mx-2">&gt;</span>}
            </li>
          </>
        )}

        {/* Product Name */}
        {productName && (
          <li className="text-gray-800 font-semibold">{formatName(productName)}</li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
