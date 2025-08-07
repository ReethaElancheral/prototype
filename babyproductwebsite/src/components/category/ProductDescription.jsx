import React, { useState } from "react";
import { useParams } from "react-router-dom";
import allProducts from "../data/allproducts";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import freedelivery from "../../assets/images/freedelivery.PNG";
import returnimg from "../../assets/images/return.PNG";

export default function ProductDescription() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>Product not found.</div>;

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addToCart(product, quantity); // ✅ pass both product and quantity at once
    navigate("/cart");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 bg-white min-h-screen">
      <div className="mb-6">
        <Breadcrumbs
          category={product.category}
          productName={product.shortName || product.name}
        />
      </div>

      {/* Thumbnails - 20% */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-2 flex flex-col gap-4 items-center">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              className="w-32 h-32 object-cover cursor-pointer border-2 rounded-md hover:border-blue-500"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* Main Image - 40% */}
        <div className="relative col-span-5 flex justify-center items-center bg-[#B0E4F4] rounded-lg">
          {product.coupon && (
            <div className="absolute top-0 right-0 bg-[#00B4D8] text-black text-md font-semibold px-3 py-1 rounded-bl-2xl z-10 shadow-md">
              {product.coupon}
            </div>
          )}
          <Zoom>
            <img
              src={mainImage}
              alt={product.name}
              className="w-[350px] h-auto object-cover rounded-lg shadow-lg"
            />
          </Zoom>
        </div>

        {/* Product Details - 40% */}
        <div className="col-span-5 bg-white p-6 rounded-lg shadow-md space-y-4">
          <h1 className="text-2xl font-medium">{product.shortName}</h1>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-yellow-500">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < Math.round(product.rating) ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <span className="text-gray-700 text-sm">
                {product.rating} ({product.reviews} Reviews)
              </span>
            </div>

            <div
              className={`font-medium ${
                product.inStock ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.inStock ? "|  In Stock" : "|  Out of Stock"}
            </div>
          </div>

          <p className="text-black text-sm">{product.description}</p>

          {/* Colours */}
          {product.colours && (
            <div className="mt-4">
              <span className="font-semibold mr-2">Colours:</span>
              {product.colours.map((color, index) => (
                <span
                  key={index}
                  className={`inline-block w-4 h-4 rounded-full border-2 mr-2`}
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          )}

          {/* Size */}
          {product.size && (
            <p className="mt-2">
              <span className="font-semibold">Size:</span> {product.size}
            </p>
          )}

          {/* Price */}
          <div className="text-lg font-semibold mt-4">
            <span className="line-through text-gray-400 mr-2">
              MRP ₹{product.MRP}
            </span>
            <span className="text-xl text-red-600">
              Sale Price ₹{product.price}
            </span>
          </div>

          <div className="flex items-center gap-4 mt-4">
            {/* Quantity Selector */}
            <div className="flex items-center space-x-4 mt-4 border border-gray-400 rounded-lg px-6 py-3">
              <button
                onClick={handleDecrease}
                className="w-8 h-8 rounded bg-[#B0E4F4] hover:bg-cyan-700 text-lg"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="w-8 h-8 rounded bg-[#B0E4F4] hover:bg-cyan-700 text-lg"
              >
                +
              </button>
            </div>

            {/* Buy Now Button */}

            <button
              onClick={handleBuyNow}
              className="mt-4 w-[180px] bg-[#00B4D8] text-black py-3 rounded-lg hover:bg-cyan-700 text-lg font-bold ml-auto"
            >
              Buy Now
            </button>
          </div>

          {/* Delivery & Return */}
          <div className="mt-6 space-y-4 text-sm border-t pt-4">
            <div className="flex items-start gap-3">
              <span>
                <img
                  src={freedelivery}
                  alt="Free Delivery"
                  className="w-8 h-8"
                />
              </span>
              <div>
                <strong>Free Delivery</strong>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span>
                <img src={returnimg} alt="Free Delivery" className="w-8 h-8" />
              </span>
              <div>
                <strong>Return Delivery</strong>
                <p>Free 7 Days Delivery Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
