// ProductCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/images/arrowicon.PNG';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-2 border-teal-200 rounded-xl overflow-hidden relative">
      {/* NEW badge */}
      {product.isNew && (
        <div className="absolute top-0 left-0 bg-teal-400 text-white text-xs uppercase px-2 py-1 rounded-br-xl">
          NEW
        </div>
      )}

      {/* Main Image */}
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      {/* Lower Section */}
      <div className="relative bg-teal-200 pt-4 pb-8 px-4">
        {/* Title block with right-side concave notch */}
        <div
          className="absolute left-4 bottom-4 bg-teal-300 px-4 py-1 rounded-l-xl text-black font-semibold"
          style={{
            clipPath: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)',
          }}
        >
          <h3 className="text-sm leading-none">{product.title}</h3>
        </div>

        {/* Buy button always visible */}
        <button
          onClick={() => navigate(`/product/${product.category}/${product.id}`)}
          className="absolute right-4 bottom-8 w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center text-white"
        >
          <img src={arrow} alt="Buy" className="w-4 h-4" />
        </button>

        {/* Rating */}
        <div className="mt-12">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">&#9733;</span>
          ))}
        </div>

        {/* Price */}
        <div className="mt-1 text-sm">
          <span className="line-through text-gray-600 mr-2">
            ₹{product.MRP}
          </span>
          <span className="font-semibold text-lg">₹{product.price}</span>
        </div>
      </div>
    </div>
  );
}
