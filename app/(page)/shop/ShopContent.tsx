'use client'
// ShopContent.jsx
import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingCart, Heart } from 'lucide-react';

const ShopContent = () => {
  const [showFilters, setShowFilters] = useState(true);
  
  const products = [
    { id: 1, name: 'Premium Dark Chocolate', price: 12.99, rating: 4.8, image: '/api/placeholder/300/300', brand: 'Choco Deluxe' },
    { id: 2, name: 'Organic Pistachio Nuts', price: 9.99, rating: 4.5, image: '/api/placeholder/300/300', brand: 'Nature Nuts' },
    { id: 3, name: 'Energy Drink 6-Pack', price: 15.99, rating: 4.2, image: '/api/placeholder/300/300', brand: 'PowerBoost' },
    { id: 4, name: 'Jasmine Green Tea', price: 7.49, rating: 4.7, image: '/api/placeholder/300/300', brand: 'TeaLeaf' },
    { id: 5, name: 'Whey Protein Isolate', price: 29.99, rating: 4.9, image: '/api/placeholder/300/300', brand: 'MuscleMax' },
    { id: 6, name: 'Cold-Pressed Sunflower Oil', price: 11.99, rating: 4.4, image: '/api/placeholder/300/300', brand: 'PurePress' },
  ];

  const filters = [
    {
      name: 'Price Range',
      options: [
        { label: 'Under $10', value: 'under10' },
        { label: '$10 - $25', value: '10to25' },
        { label: '$25 - $50', value: '25to50' },
        { label: 'Over $50', value: 'over50' }
      ]
    },
    {
      name: 'Brand',
      options: [
        { label: 'Choco Deluxe', value: 'choco-deluxe' },
        { label: 'Nature Nuts', value: 'nature-nuts' },
        { label: 'PowerBoost', value: 'powerboost' },
        { label: 'TeaLeaf', value: 'tealeaf' },
        { label: 'MuscleMax', value: 'musclemax' }
      ]
    },
    {
      name: 'Rating',
      options: [
        { label: '4 Stars & Above', value: '4stars' },
        { label: '3 Stars & Above', value: '3stars' },
        { label: '2 Stars & Above', value: '2stars' }
      ]
    },
    {
      name: 'Dietary',
      options: [
        { label: 'Organic', value: 'organic' },
        { label: 'Gluten-Free', value: 'glutenfree' },
        { label: 'Vegan', value: 'vegan' },
        { label: 'Sugar-Free', value: 'sugarfree' }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 my-12">
      {/* Search and Filter Controls */}
      <div className="flex items-center justify-between mb-8">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
        
        <button 
          className="md:hidden flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Sort by:</label>
            <select className="rounded-md border-gray-200 text-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        {showFilters && (
          <div className="w-full md:w-64 shrink-0">
            <div className="sticky top-4 bg-white rounded-xl shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg text-gray-800">Filters</h2>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Clear All</button>
              </div>
              
              <div className="space-y-6">
                {filters.map((filter, index) => (
                  <div key={index} className="border-t pt-4">
                    <h3 className="font-medium text-gray-900 mb-3">{filter.name}</h3>
                    <div className="space-y-2">
                      {filter.options.map((option, idx) => (
                        <div key={idx} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`${filter.name}-${option.value}`}
                            className="rounded-sm text-blue-600 focus:ring-blue-500 h-4 w-4"
                          />
                          <label
                            htmlFor={`${filter.name}-${option.value}`}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent pt-10 pb-4 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full py-2 bg-white text-gray-900 font-medium rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">{product.brand}</div>
                  <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-amber-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm text-gray-700">{product.rating}</span>
                    </div>
                  </div>
                  <div className="font-semibold text-gray-900">${product.price.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-1">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 border border-blue-500 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                3
              </button>
              <span className="px-4 py-2 text-gray-700">...</span>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopContent;