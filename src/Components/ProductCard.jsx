import React from 'react';
import { FaInfoCircle, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleTakeTestClick = () => {
    // Navigate to the test page with product ID
    navigate(`/home/test/${product.id}`);
  };

  return (
    <div
      key={product.id}
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105"
      id={`product-card-${product.id}`}
    >
      <div className="w-full h-48 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          id={`product-image-${product.id}`}
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <p className="text-2xl font-semibold text-white" id={`product-title-${product.id}`}>
          {product.name}
        </p>
        <p className="text-sm text-gray-200 mt-2" id={`product-description-${product.id}`}>
          {product.description}
        </p>
      </div>
      <div className="flex justify-between items-center border-t border-gray-300 bg-gray-800 p-2">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
          onClick={handleTakeTestClick}
        >
          <FaArrowRight className="text-lg" />
          <span>Take Test</span>
        </button>
        <div
          className="p-2 rounded-full cursor-pointer hover:bg-gray-700 transition-colors"
          id={`product-button-${product.id}`}
        >
          <FaInfoCircle className="text-white text-xl" />
        </div>
      </div>
    </div>
  );
}
