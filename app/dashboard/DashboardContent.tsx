'use client'
import React from 'react';

function DashboardContent() {
  // Sample data
  const totalRevenue = 2357.00;
  const programCount = 10;
  const performanceRating = { value: 234, trend: 7.5 };
  const completionRate = 98;
  const warningCount = 3;
  const buildingCount = 0;
  
  // Sample item performance data
  const itemsPerformance = [
    { name: 'Espresso', subCategory: 'Hot Coffee', price: '$3.50' },
    { name: 'Americano', subCategory: 'Hot Coffee', price: '$4.00' },
    { name: 'Latte', subCategory: 'Hot Coffee', price: '$4.50' },
    { name: 'Cappuccino', subCategory: 'Hot Coffee', price: '$4.50' },
    { name: 'Flat White', subCategory: 'Hot Coffee', price: '$4.75' }
  ];
  
    
  return (
    <div className="bg-gray-50 p-6 justify-center  rounded-lg shadow-sm w-full">
      <div className='w-full mx-auto max-w-6xl'>
      {/* Top metrics row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500 text-sm font-medium">Total Revenue</span>
            <span className="text-xs bg-gray-100 rounded-full px-2 py-1">Today</span>
          </div>
          <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500 text-sm font-medium">Our Programs</span>
            <span className="text-xs bg-gray-100 rounded-full px-2 py-1">Last Month</span>
          </div>
          <div className="text-2xl font-bold">{programCount}</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 text-sm font-medium">Performance</span>
                <span className="text-xs bg-gray-100 rounded-full px-2 py-1">Today</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold mr-2">{performanceRating.value}</span>
                <span className="text-green-500 text-sm">+{performanceRating.trend}%</span>
              </div>
            </div>
            <div className="bg-gray-50 p-2 rounded-lg w-16 h-16 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">{programCount}</div>
                <div className="text-xs text-gray-500">Orders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Middle section - Charts */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Performance trend chart */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700 font-medium">Performance</span>
            <div className="flex space-x-2">
              <span className="text-xs bg-gray-100 rounded-full px-2 py-1">Today</span>
              <span className="text-xs bg-gray-100 rounded-full px-2 py-1">Week</span>
              <span className="text-xs bg-gray-100 rounded-full px-2 py-1">Month</span>
            </div>
          </div>
          <div className="h-32 w-full relative">
            {/* Line chart visualization */}
            <div className="absolute inset-0 flex items-center">
              <svg viewBox="0 0 400 100" className="w-full h-full">
                {/* Green line */}
                <path d="M0,80 C20,70 40,40 80,50 C120,60 160,20 200,30 C240,40 280,60 320,50 C360,40 400,60 400,50" 
                      stroke="#22c55e" 
                      strokeWidth="2" 
                      fill="none" />
                {/* Gray line */}
                <path d="M0,60 C40,70 80,50 120,60 C160,70 200,50 240,60 C280,70 320,40 360,50 C400,60 440,50 480,60" 
                      stroke="#9ca3af" 
                      strokeWidth="2" 
                      fill="none" />
                
                {/* Data points for green line */}
                <circle cx="80" cy="50" r="3" fill="#22c55e" />
                <circle cx="200" cy="30" r="3" fill="#22c55e" />
                <circle cx="320" cy="50" r="3" fill="#22c55e" />
                
                {/* Data points for gray line */}
                <circle cx="120" cy="60" r="3" fill="#9ca3af" />
                <circle cx="240" cy="60" r="3" fill="#9ca3af" />
                <circle cx="360" cy="50" r="3" fill="#9ca3af" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Completion rate indicator */}
        <div className="bg-white p-4 rounded-lg shadow-sm grid grid-cols-2 gap-4">
          <div className="col-span-2 flex justify-between items-center">
            <span className="text-gray-700 font-medium">Status</span>
            <span className="text-xl font-bold">Good</span>
          </div>
          
          {/* Circular completion indicator */}
          <div className="flex items-center justify-center">
            <div className="relative h-32 w-32">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                {/* Background circle */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e5e7eb" strokeWidth="8" />
                
                {/* Progress arc - calculate dasharray and dashoffset based on percentage */}
                <circle cx="50" cy="50" r="40" 
                        fill="transparent" 
                        stroke="#84cc16" 
                        strokeWidth="8" 
                        strokeDasharray="251.2" 
                        strokeDashoffset={251.2 * (1 - completionRate/100)}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)" />
                        
                {/* Circular pointer at the end */}
                <circle cx="50" cy="10" r="4" fill="#84cc16" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-bold">{completionRate}</span>
                <span className="text-xs text-gray-500">Completion</span>
              </div>
            </div>
          </div>
          
          {/* Status indicators */}
          <div className="space-y-4">
            <div className="bg-gray-50 p-2 rounded-lg flex items-center">
              <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs mr-2">{warningCount}</div>
              <div>
                <div className="text-sm font-medium">Warning Status</div>
                <div className="text-xs text-gray-500">Issues</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-2 rounded-lg flex items-center">
              <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs mr-2">{buildingCount}</div>
              <div>
                <div className="text-sm font-medium">Good Building</div>
                <div className="text-xs text-gray-500">Status</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom section - Items performance */}
      <div className="grid grid-cols-2 gap-4">
        {/* Spider/Radar chart */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700 font-medium">Items Performance</span>
          </div>
          <div className="h-64 w-full relative">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Background hexagon */}
              <polygon points="100,20 170,50 170,150 100,180 30,150 30,50" fill="transparent" stroke="#e5e7eb" strokeWidth="1" />
              <polygon points="100,40 150,60 150,140 100,160 50,140 50,60" fill="transparent" stroke="#e5e7eb" strokeWidth="1" />
              <polygon points="100,60 130,75 130,125 100,140 70,125 70,75" fill="transparent" stroke="#e5e7eb" strokeWidth="1" />
              <polygon points="100,80 110,85 110,115 100,120 90,115 90,85" fill="transparent" stroke="#e5e7eb" strokeWidth="1" />
              
              {/* Data polygon */}
              <polygon points="100,30 160,70 140,150 70,160 40,100 60,40" fill="rgba(132, 204, 22, 0.2)" stroke="#84cc16" strokeWidth="2" />
              
              {/* Data points */}
              <circle cx="100" cy="30" r="3" fill="#84cc16" />
              <circle cx="160" cy="70" r="3" fill="#84cc16" />
              <circle cx="140" cy="150" r="3" fill="#84cc16" />
              <circle cx="70" cy="160" r="3" fill="#84cc16" />
              <circle cx="40" cy="100" r="3" fill="#84cc16" />
              <circle cx="60" cy="40" r="3" fill="#84cc16" />
              
              {/* Axis lines */}
              <line x1="100" y1="100" x2="100" y2="20" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="100" y1="100" x2="170" y2="50" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="100" y1="100" x2="170" y2="150" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="100" y1="100" x2="100" y2="180" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="100" y1="100" x2="30" y2="150" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="100" y1="100" x2="30" y2="50" stroke="#e5e7eb" strokeWidth="1" />
              
              {/* Labels */}
              <text x="100" y="15" textAnchor="middle" fontSize="8" fill="#6b7280">Espresso</text>
              <text x="175" y="50" textAnchor="start" fontSize="8" fill="#6b7280">Latte</text>
              <text x="175" y="150" textAnchor="start" fontSize="8" fill="#6b7280">Americano</text>
              <text x="100" y="190" textAnchor="middle" fontSize="8" fill="#6b7280">Macchiato</text>
              <text x="25" y="150" textAnchor="end" fontSize="8" fill="#6b7280">Flat White</text>
              <text x="25" y="50" textAnchor="end" fontSize="8" fill="#6b7280">Iced Coffee</text>
            </svg>
          </div>
        </div>
        
        {/* Items table */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700 font-medium">Items</span>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs text-gray-500 border-b">
                <th className="pb-2">Item</th>
                <th className="pb-2">Category</th>
                <th className="pb-2 text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {itemsPerformance.map((item, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3 font-medium">{item.name}</td>
                  <td className="py-3 text-gray-500 text-sm">{item.subCategory}</td>
                  <td className="py-3 text-right">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div></div>
    </div>
  );
}

export default DashboardContent;