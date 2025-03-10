'use client'
import React, { useState } from 'react';
import { coffeeData } from '@/data';
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { useRouter } from 'next/navigation';

// Define TypeScript interfaces for our data types
interface CoffeeBean {
  id: string;
  name: string;
  origin: string;
  region: string;
  roastLevel: string;
  description: string;
  certification?: string[];
  imageUrl?: string;
}

interface CoffeeMachine {
  id: string;
  brand: string;
  model: string;
  type: string;
  condition: string;
  description: string;
  imageUrl?: string;
}

interface MachinePart {
  id: string;
  partName: string;
  type: string;
  description: string;
  compatibility: string[];
  imageUrl?: string;
}

// Define union type for all item types
type CoffeeItem = CoffeeBean | CoffeeMachine | MachinePart;

// Define a union type for category names
type CategoryType = 'coffeeBeans' | 'coffeeMachines' | 'machineParts';

const CoffeeInformationSystem = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('coffeeBeans');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Handle category change
  const handleCategoryChange = (category: CategoryType) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when changing categories
  };

  // Toggle favorite status
  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Define search fields for each category
  const searchFields: Record<CategoryType, string[]> = {
    coffeeBeans: ['name', 'origin', 'region', 'roastLevel'],
    coffeeMachines: ['brand', 'model', 'type'],
    machineParts: ['partName', 'type']
  };

  // Type guard functions to check item types
  const isCoffeeBean = (item: CoffeeItem): item is CoffeeBean => 'name' in item && 'origin' in item;
  const isCoffeeMachine = (item: CoffeeItem): item is CoffeeMachine => 'model' in item && 'brand' in item;
  const isMachinePart = (item: CoffeeItem): item is MachinePart => 'partName' in item && 'compatibility' in item;

  // Filter items by search term
  const filteredItems = (coffeeData[activeCategory] as CoffeeItem[])?.filter(item => {
    return !searchTerm || searchFields[activeCategory].some(field => {
      let value = '';
      if (field === 'name' && isCoffeeBean(item)) value = item.name;
      else if (field === 'origin' && isCoffeeBean(item)) value = item.origin;
      else if (field === 'region' && isCoffeeBean(item)) value = item.region;
      else if (field === 'roastLevel' && isCoffeeBean(item)) value = item.roastLevel;
      else if (field === 'brand' && isCoffeeMachine(item)) value = item.brand;
      else if (field === 'model' && isCoffeeMachine(item)) value = item.model;
      else if (field === 'type' && (isCoffeeMachine(item) || isMachinePart(item))) value = item.type;
      else if (field === 'partName' && isMachinePart(item)) value = item.partName;
      
      return value.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }) || [];
  
  // Pagination logic
  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);
  
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Calculate start and end of visible page range
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if at edges
      if (currentPage <= 2) {
        end = Math.min(totalPages - 1, maxVisiblePages - 1);
      } else if (currentPage >= totalPages - 1) {
        start = Math.max(2, totalPages - maxVisiblePages + 2);
      }
      
      // Add ellipsis if needed
      if (start > 2) {
        pageNumbers.push('ellipsis1');
      }
      
      // Add middle pages
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pageNumbers.push('ellipsis2');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };
  const router= useRouter()
  const handleClick = (id: string) => {
    router.push(`/product?id=${id}`);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="w-full h-64 flex items-center justify-center bg-fill bg-center"
 style={{backgroundImage: "url('https://i.pinimg.com/736x/de/a5/5c/dea55cded0e687f4c1d985a6e1266aff.jpg')"}}>
      </div>
      
      {/* Category Navigation */}
      <div className="relative  -mt-16 mb-8">
      <div className="max-w-5xl rounded-[2pc] bg-white mx-auto px-4">
      <div className="py-4">
            <h2 className="text-sm text-gray-600 mb-2">Source by category</h2>
            <div className="flex flex-wrap justify-evenly">
              <button 
                onClick={() => handleCategoryChange('coffeeBeans')}
                className={`flex flex-col items-center p-2 rounded ${activeCategory === 'coffeeBeans' ? 'text-amber-800 font-semibold' : ''}`}
              >
                <div className="flex items-center justify-center mb-1">
                  <img src='https://i.pinimg.com/736x/5a/c3/3a/5ac33a52e84f5ce01017d5d321db0dd7.jpg' alt=''  className="w-16 h-16 bg-gray-200 rounded-full"/>
                </div>
                <span className="text-xs text-center">Coffee Beans</span>
              </button>
              <button 
                onClick={() => handleCategoryChange('coffeeMachines')}
                className={`flex flex-col items-center p-2 rounded ${activeCategory === 'coffeeMachines' ? 'text-amber-800 font-semibold' : ''}`}
              >
               <div className="flex items-center justify-center mb-1">
                  <img src='https://i.pinimg.com/736x/fc/2a/a7/fc2aa7485e847816fdf7f4b5515262e3.jpg' alt=''  className="w-16 h-16 bg-gray-200 rounded-full"/>
                </div>
                <span className="text-xs text-center">Coffee Machine</span>
              </button>
              <button 
                onClick={() => handleCategoryChange('machineParts')}
                className={`flex flex-col items-center p-2 rounded ${activeCategory === 'machineParts' ? 'text-amber-800 font-semibold' : ''}`}
              >
                 <div className="flex items-center justify-center mb-1">
                  <img src='https://i.pinimg.com/736x/cb/1a/7e/cb1a7e2f010d5177babf5e4a0ee8d1ee.jpg' alt=''  className="w-16 h-16 bg-gray-200 rounded-full"/>
                </div>
                <span className="text-xs text-center">Machine Parts</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-2">
        <div className="text-sm text-gray-600">
          {activeCategory === 'coffeeBeans' ? 'Coffee Beans' : 
           activeCategory === 'coffeeMachines' ? 'Coffee Machine' : 'Machine Parts'}
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="w-full mx-auto  px-4 py-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 pl-10 pr-4 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-3 top-2">🔍</span>
          </div>
          <div>
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="ml-2 border rounded py-2 px-4">
              <option>Featured</option>
              <option>Name (A-Z)</option>
              <option>Name (Z-A)</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Filters Sidebar and Products */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4 pr-0 md:pr-6 mb-6 md:mb-0">
            <div className="bg-white rounded shadow p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Filters</h3>
                <button className="text-blue-600 text-sm">Clear All</button>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-2">Category</h4>
                <div className="space-y-2">
                  {(['coffeeBeans', 'coffeeMachines', 'machineParts'] as CategoryType[]).map((category) => {
                    const displayName = {
                      coffeeBeans: 'Coffee Beans',
                      coffeeMachines: 'Coffee Machines',
                      machineParts: 'Machine Parts'
                    }[category];
                    
                    return (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={category}
                          checked={activeCategory === category}
                          onChange={() => handleCategoryChange(category)}
                          className="mr-2"
                        />
                        <label htmlFor={category}>{displayName}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {activeCategory === 'coffeeBeans' && (
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Origin</h4>
                  <div className="space-y-2">
                    {Array.from(new Set((coffeeData.coffeeBeans as CoffeeBean[]).map(bean => bean.origin))).map(origin => (
                      <div key={origin} className="flex items-center">
                        <input type="checkbox" id={`origin-${origin}`} className="mr-2" />
                        <label htmlFor={`origin-${origin}`}>{origin}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeCategory === 'coffeeMachines' && (
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Condition</h4>
                  <div className="space-y-2">
                    {Array.from(new Set((coffeeData.coffeeMachines as CoffeeMachine[]).map(machine => machine.condition))).map(condition => (
                      <div key={condition} className="flex items-center">
                        <input type="checkbox" id={`condition-${condition}`} className="mr-2" />
                        <label htmlFor={`condition-${condition}`}>{condition}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeCategory === 'machineParts' && (
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Type</h4>
                  <div className="space-y-2">
                    {Array.from(new Set((coffeeData.machineParts as MachinePart[]).map(part => part.type))).map(type => (
                      <div key={type} className="flex items-center">
                        <input type="checkbox" id={`type-${type}`} className="mr-2" />
                        <label htmlFor={`type-${type}`}>{type}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedItems.map((item: CoffeeItem) => {
                // Determine item name based on type
                const itemName = isCoffeeBean(item) ? item.name : 
                                isCoffeeMachine(item) ? item.model : 
                                isMachinePart(item) ? item.partName : '';
                
                // Determine subtitle based on category
                const itemSubtitle = 
                  isCoffeeBean(item) ? `${item.origin} - ${item.roastLevel} Roast` :
                  isCoffeeMachine(item) ? `${item.brand} - ${item.condition}` :
                  isMachinePart(item) ? `${item.type}` : '';
                
                return (
                  <div key={item.id} className="bg-white rounded shadow overflow-hidden">
                    <div                 className="relative group w-full rounded-lg overflow-hidden bg-neutral-100 cursor-pointer"
                                    onClick={() => handleClick(item.id)}

                    >
                      {/* Image with overlay content */}
                      <div className="h-full w-full relative group">
                        {/* Image or placeholder */}
                        {item.imageUrl ? (
                          <img src={item.imageUrl} alt={itemName} className="h-60 sm:h-72 w-full object-cover" />
                        ) : (
                          <div className="h-full w-full flex items-center  text-gray-400 text-4xl">
                            {isCoffeeBean(item) && '☕'}
                            {isCoffeeMachine(item) && '⚙️'}
                            {isMachinePart(item) && '🔧'}
                          </div>
                        )}
                        
                        {/* Gradient overlay */}
                        <div                   className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4"
                        ></div>
                        
                        {/* Text overlay content */}
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <h3 className="text-lg font-semibold text-white">{itemName}</h3>
                          <p  className="text-gray-200 text-sm mt-1">{itemSubtitle}</p>
                          <p className="text-sm opacity-80 mt-1 line-clamp-2">{item.description}</p>
                        </div>
                        
                    
                      </div>
                      
                      {/* Favorite button */}
                      <button 
                        className="absolute top-2 right-2 bg-white p-2 rounded-full"
                        onClick={() => toggleFavorite(item.id)}
                      >
                        {favorites.includes(item.id) ? '❤️' : '🤍'}
                      </button>
                    </div>
                    
                    {/* Additional details shown below the image/overlay */}
                    <div className="p-4">
                      {isCoffeeBean(item) && item.certification && item.certification.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {item.certification.map((cert: string) => (
                            <span key={cert} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                              {cert}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {isMachinePart(item) && item.compatibility && (
                        <div className="flex flex-wrap gap-1">
                          {item.compatibility.map((compat: string) => (
                            <span key={compat} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">
                              {compat}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="bg-white rounded shadow p-8 text-center">
                <p className="text-gray-500">No items found. Try adjusting your search criteria.</p>
              </div>
            )}
            
            {/* Pagination component */}
            {filteredItems.length > 0 && (
              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    {/* Previous button */}
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {/* Page numbers */}
                    {getPageNumbers().map((pageNum, index) => {
                      if (pageNum === 'ellipsis1' || pageNum === 'ellipsis2') {
                        return (
                          <PaginationItem key={`ellipsis-${index}`}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }
                      
                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationLink
                            isActive={currentPage === pageNum}
                            onClick={() => setCurrentPage(Number(pageNum))}
                            className="cursor-pointer"
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}
                    
                    {/* Next button */}
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
            
            {/* Results count and pagination info */}
            {filteredItems.length > 0 && (
              <div className="mt-4 text-sm text-gray-600 text-center">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} items
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeInformationSystem;