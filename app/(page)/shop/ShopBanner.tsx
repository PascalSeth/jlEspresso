import React from 'react';
import { ChevronRight } from 'lucide-react';

const ShopBanner = () => {
  const categories = [
    { name: 'Pistachio Nuts', image: '/api/placeholder/80/80' },
    { name: 'Chocolate', image: '/api/placeholder/80/80' },
    { name: 'Whey and whey products', image: '/api/placeholder/80/80' },
    { name: 'Energy Drinks', image: '/api/placeholder/80/80' },
    { name: 'Flavor Tea', image: '/api/placeholder/80/80' },
    { name: 'Sunflower Oil', image: '/api/placeholder/80/80' },
    { name: 'Milk powder and cream', image: '/api/placeholder/80/80' },
    { name: 'Candy', image: '/api/placeholder/80/80' },
  ];

  return (
    <div className="w-full relative">
      {/* Hero Banner with Background Image */}
      <div 
        className="w-full h-64 flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://i.pinimg.com/736x/94/0b/f1/940bf157c4c4d308629cc81c7812cf9e.jpg')` 
        }}
      >
        <h1 className="text-5xl font-bold text-white text-center">Food & Beverage</h1>
      </div>

      {/* Categories Section - Positioned below the banner */}
      <div className="relative -mt-16 mb-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Source by category</h2>
            
            <div className="relative">
              <div className="flex overflow-x-auto space-x-6 py-4 scrollbar-hide">
                {categories.map((category, index) => (
                  <div key={index} className="flex flex-col items-center min-w-max">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-2 border border-gray-200">
                      <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-sm text-center text-gray-700 max-w-xs">{category.name}</p>
                  </div>
                ))}
              </div>
              
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 cursor-pointer">
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;