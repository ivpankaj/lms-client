import React from 'react';
import Layout from '../Components/Layout';

// Example product data (you can replace or extend this as needed)
const products = [
  {
    id: 1,
    name: "MERN Stack Development",
    description: "Learn full-stack JavaScript development with MongoDB, Express, React, and Node.js.",
    price: "₹ 499.49",
    imageUrl: "/Mern.png"
  },
  {
    id: 2,
    name: "Digital Marketing",
    description: "Master digital marketing strategies and tools to enhance online presence and drive sales.",
    price: "₹ 499.49",
    imageUrl: "/dm.png"
  }
];

const ExploreCourses = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col"
              id={`product-card-${product.id}`}
            >
              <div className="card-img w-full">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out"
                  id={`product-image-${product.id}`}
                />
              </div>
              <div className="card-info p-4 flex-1">
                <p className="text-title text-lg font-bold" id={`product-title-${product.id}`}>
                  {product.name}
                </p>
                <p className="text-body text-sm pb-2" id={`product-description-${product.id}`}>
                  {product.description}
                </p>
              </div>
              <div className="card-footer flex justify-between items-center border-t border-gray-300 p-2">
                <span className="text-title text-lg font-bold" id={`product-price-${product.id}`}>
                  {product.price}
                </span>
                <div
                  className="card-button flex items-center border border-gray-800 rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:border-gray-800"
                  id={`product-button-${product.id}`}
                >
                  {/* Add button text or icons here if needed */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ExploreCourses;
