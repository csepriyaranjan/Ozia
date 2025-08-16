import React from 'react';
import { FiShoppingBag } from 'react-icons/fi'; // Import the shopping bag icon

// Individual Product Card Component
export default function ProductCard({ name, newPrice, oldPrice, imageUrl }) {
  return (
    <div className="bg-white rounded-lg font-brownsugar shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl w-full max-w-sm">
      {/* Product Image Area */}
      <div 
        className="h-80 bg-gray-200 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-label={name}
      >
        {/* You can replace this div with an <img /> tag if you prefer */}
      </div>

      {/* Product Details Area */}
      <div className="p-5 bg-[#c8dad9]">
        <h3 className="text-lg font-light font-sans text-gray-800 truncate">{name}</h3>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-baseline gap-2">
            <p className="text-xl font-normal text-gray-900">${newPrice}</p>
            <p className="text-sm text-gray-600 line-through">${oldPrice}</p>
          </div>
          <button 
            aria-label="Add to bag" 
            className="p-1 text-gray-700 hover:text-black transition-colors"
          >
            <FiShoppingBag size={20} /> {/* React Icon */}
          </button>
        </div>
      </div>
    </div>
  );
};
