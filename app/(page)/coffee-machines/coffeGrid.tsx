'use client';

import React, { useState } from 'react';
import { Coffee, Settings, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { coffeeMachines } from '@/data';

const categories = {
  'New Machines': { title: 'New Machines', description: 'Brand-new coffee machines with the latest technology.', icon: Coffee },
  'Used Machines': { title: 'Used Machines', description: 'Refurbished or pre-owned machines with quality assurance.', icon: Settings }
};

const CoffeeMachineShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('New Machines');
  
  const filteredMachines = coffeeMachines.filter(machine => machine.category === activeCategory);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Coffee Machine Technical Specifications</h1>
          <p className="text-lg text-gray-600">Detailed technical analysis and specifications of professional coffee equipment</p>
        </motion.div>

        {/* Category Selection */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col md:flex-row gap-6 mb-12">
          {Object.entries(categories).map(([key, info], index) => {
            const IconComponent = info.icon;
            return (
              <motion.button
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                onClick={() => setActiveCategory(key)}
                className={`flex-1 p-6 rounded-xl transition-all ${activeCategory === key ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} border border-gray-200`}
              >
                <div className="flex items-center justify-center mb-3">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-sm opacity-80">{info.description}</p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Specifications Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMachines.map((machine, index) => (
              <motion.div key={machine.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col items-center">
                  <motion.img initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} src={machine.imageUrl} alt={`${machine.brand} ${machine.model}`} className="w-fit rounded-[1pc] h-48 object-contain" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{machine.brand} {machine.model}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Info className="text-blue-600 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-gray-900">Condition</span>
                        <span className="text-sm text-gray-600">{machine.condition}</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Info className="text-blue-600 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-gray-900">Type</span>
                        <span className="text-sm text-gray-600">{machine.type}</span>
                      </div>
                    </div>
                    {machine.refurbishmentDetails && (
                      <div className="flex items-start space-x-3">
                        <Info className="text-blue-600 mt-1" size={16} />
                        <div>
                          <span className="block text-sm font-medium text-gray-900">Refurbishment Details</span>
                          <span className="text-sm text-gray-600">{machine.refurbishmentDetails}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CoffeeMachineShowcase;