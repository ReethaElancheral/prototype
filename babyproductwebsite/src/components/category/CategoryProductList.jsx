// src/pages/CategoryProductList.jsx
import React, { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BestSellerCard from "../home/BestSellerCard";
import allProducts from "../data/allproducts";
import { BiFilterAlt } from "react-icons/bi"; // ✅ New Filter Icon
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const PRODUCTS_PER_PAGE = 6;

export default function CategoryProductList() {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const filterRef = useRef(null);

  // Click outside filter dropdown closes it
  useEffect(() => {
    function handleClickOutside(e) {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setShowFilters(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter states
  const [selectedPrice, setSelectedPrice] = useState("");
  const [freeShippingOnly, setFreeShippingOnly] = useState(false);
  const [discountOnly, setDiscountOnly] = useState(false);

  // Filter logic
  const filteredProducts = allProducts.filter((product) => {
    if (product.category.toLowerCase() !== category.toLowerCase()) return false;

    if (selectedPrice) {
      const [min, max] = selectedPrice.split("-").map(Number);
      if (product.price < min || product.price > max) return false;
    }

    if (freeShippingOnly && !product.freeShipping) return false;
    if (discountOnly && (!product.discount || product.discount === 0))
      return false;

    return true;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 relative">
      {/* Breadcrumb + Filter Button */}
      <div className="flex justify-between items-center mb-4 relative">
        {/* <p className="text-lg font-semibold capitalize">
          Home &gt; Products &gt; {category}
        </p> */}

              <Breadcrumbs category={category} />

        <div className="relative" ref={filterRef}>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 shadow-sm"
          >
            <BiFilterAlt className="text-xl" />
            <span>Filter</span>
          </button>

          {/* Floating Filter Dropdown Panel */}
          {showFilters && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-4 space-y-4">
              {/* Price Filters */}
              <div>
                <p className="font-semibold mb-2">Price</p>
                {["100-1000", "1000-1500", "1500-10000"].map((range) => (
                  <div
                    key={range}
                    className="border rounded-md px-3 py-1 mb-1 hover:bg-gray-100"
                  >
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value={range}
                        checked={selectedPrice === range}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                        className="mr-2"
                      />
                      ₹{range.replace("-", " - ₹")}
                    </label>
                  </div>
                ))}
              </div>

              {/* Free Shipping */}
              <div className="border rounded-md px-3 py-2 hover:bg-gray-100">
                <label className="cursor-pointer">
                  <input
                    type="checkbox"
                    checked={freeShippingOnly}
                    onChange={() => setFreeShippingOnly(!freeShippingOnly)}
                    className="mr-2"
                  />
                  Free Shipping
                </label>
              </div>

              {/* Discount */}
              <div className="border rounded-md px-3 py-2 hover:bg-gray-100">
                <label className="cursor-pointer">
                  <input
                    type="checkbox"
                    checked={discountOnly}
                    onChange={() => setDiscountOnly(!discountOnly)}
                    className="mr-2"
                  />
                  Discount Available
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <BestSellerCard product={product} />
            </Link>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">
            No products match the selected filters.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
}
