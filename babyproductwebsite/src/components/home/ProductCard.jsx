import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function ProductCard({ product }) {
  return (
    <div className="relative bg-white rounded-xl border shadow hover:shadow-lg overflow-hidden">
      {/* NEW badge */}
      {product.isNew && (
        <div className="absolute top-0 left-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg">
          NEW
        </div>
      )}

      {/* Product image */}
      <div className="p-4 flex justify-center">
        <img
          src={product.images[0]}
          alt={product.title}
          className="object-cover rounded-md w-full h-48"
        />
      </div>

      {/* Bottom section */}
      <div className="bg-cyan-100 p-4 relative">
        {/* Title */}
        <h3 className="text-lg font-bold mb-1 capitalize">{product.title}</h3>

        {/* Stars */}
        <div className="flex text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Prices */}
        <div className="flex items-center space-x-2 mb-2">
          <p className="text-gray-500 font-bold line-through">
            MRP ₹{product.MRP}
          </p>
          <p className="font-bold text-gray-900">Price ₹{product.price}.00</p>
        </div>

        {/* Buy button */}
        <button className="absolute right-4 top-4 bg-cyan-500 text-white font-semibold py-1 px-4 rounded-full hover:bg-cyan-600">
          Buy
        </button>
      </div>
    </div>
  );
}
