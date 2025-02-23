'use client'
import React, { useState } from 'react';
import { Coffee, Settings, Info, AlertCircle, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Type Definitions
type CategoryKey = 'traditional' | 'beanToCup' | 'bulkBrew';

interface Specification {
  [key: string]: string;
}

interface Machine {
  name: string;
  specs: Specification;
  image: string;
}

interface CategoryMetadata {
  title: string;
  icon: LucideIcon;
  description: string;
  technicalNote: string;
}

type MachineCategories = Record<CategoryKey, Machine[]>;
type CategoryInformation = Record<CategoryKey, CategoryMetadata>;

const CoffeeMachineShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('traditional');

  const machines: MachineCategories = {
    traditional: [
      {
        name: "La Marzocco Linea Mini",
        specs: {
          "Boiler System": "Dual boiler system for independent temperature control",
          "Extraction Pressure": "9 bar extraction pressure for optimal espresso",
          "Portafilter Size": "58mm commercial-grade portafilter with enhanced dispersion",
          "Steam System": "Professional steam wand with precise temperature control",
          "Temperature Control": "Digital PID control for ±0.1°C accuracy"
        },
        image: "https://i.pinimg.com/236x/12/e9/06/12e906bd60bac2031c5c21cc2d39416b.jpg"
      },
      {
        name: "Rocket Appartamento",
        specs: {
          "Boiler Type": "Heat exchange single boiler for continuous operation",
          "Pressure System": "9 bar extraction pressure with OPV adjustment",
          "Group Head": "58mm E61 group head with thermal stability",
          "Steam Capability": "Commercial grade rotational steam arm",
          "Water System": "2.25L removable reservoir with optional plumbing"
        },
        image: "https://i.pinimg.com/236x/12/e9/06/12e906bd60bac2031c5c21cc2d39416b.jpg"
      },
      {
        name: "Lelit Bianca",
        specs: {
          "Boiler Configuration": "Dual boiler with advanced flow control mechanism",
          "Pressure Control": "Variable 0-10 bar paddle control system",
          "Group Head Type": "58mm E61 group with pre-infusion chamber",
          "Interface": "LCC display for real-time temperature monitoring",
          "Steam Capacity": "2L steam boiler with dry steam technology"
        },
        image: "https://i.pinimg.com/236x/12/e9/06/12e906bd60bac2031c5c21cc2d39416b.jpg"
      }
    ],
    beanToCup: [
      {
        name: "Jura Z10",
        specs: {
          "Grinding Mechanism": "Automatic conical burr grinder with 8.3oz capacity",
          "Milk Processing": "Fine foam technology with automatic cleaning",
          "Control Interface": "4.3\" touchscreen with intuitive programming",
          "Brewing Options": "32 programmable specialties with temperature control",
          "Extraction System": "Cold extraction process with pressure optimization"
        },
        image: "https://i.pinimg.com/236x/12/e9/06/12e906bd60bac2031c5c21cc2d39416b.jpg"
      },
      {
        name: "De'Longhi Eletta Explore",
        specs: {
          "Grinder System": "Integrated steel burr grinder with 13 settings",
          "Milk Technology": "LatteCrema automatic system with 3 texture levels",
          "Beverage Control": "18 one-touch beverages with customization",
          "Connectivity": "Coffee Link app with remote programming",
          "Bean Management": "Dual bean hopper with automatic switching"
        },
        image: "https://i.pinimg.com/236x/12/e9/06/12e906bd60bac2031c5c21cc2d39416b.jpg"
      },
      {
        name: "Breville Oracle Touch",
        specs: {
          "Grinding Tech": "Conical burr with automatic dosing and tamping",
          "Milk System": "Auto steam wand with temperature sensing",
          "User Interface": "TFT touchscreen with customizable settings",
          "Boiler System": "Dual stainless steel boilers with PID",
          "Maintenance": "Automatic cleaning cycle with indicators"
        },
        image: "https://i.pinimg.com/236x/12/e9/06/12e906bd60bac2031c5c21cc2d39416b.jpg"
      }
    ],
    bulkBrew: [
      {
        name: "Bunn VPR Series",
        specs: {
          "Brewing Capacity": "12 cups per brew cycle with consistent extraction",
          "Brewing Time": "3 minutes optimal brew time for full flavor",
          "Temperature": "2 independent warming plates with auto-shutdown",
          "Build Material": "Commercial-grade stainless steel construction",
          "Filtration": "Commercial basket filter with optimal water distribution"
        },
        image: "https://i.pinimg.com/236x/12/e9/06/12e906bd60bac2031c5c21cc2d39416b.jpg"
      },
      {
        name: "Fetco CBS-2141XTS",
        specs: {
          "Volume Capacity": "1 gallon per batch with precision brewing",
          "Brewing Technology": "FETCO Extractor technology for optimal extraction",
          "Programming": "5 programmable buttons with cascade brewing",
          "Water System": "Advanced filtration with mineral detection",
          "Storage": "Insulated stainless steel tank with temperature lock"
        },
        image: "https://i.pinimg.com/236x/12/e9/06/12e906bd60bac2031c5c21cc2d39416b.jpg"
      },
      {
        name: "Technivorm Moccamaster",
        specs: {
          "Brewing Volume": "15-cup (1.8L) capacity per cycle",
          "Heating Element": "Copper heating element with auto-shutoff",
          "Temperature Range": "Precise 196°F-205°F brewing temperature",
          "Carafe Design": "Thermal insulated stainless steel with brew-through lid",
          "Certification": "SCA certified for Golden Cup Standard"
        },
        image: "https://i.pinimg.com/236x/12/e9/06/12e906bd60bac2031c5c21cc2d39416b.jpg"
      }
    ]
  };

  const categoryInfo: CategoryInformation = {
    traditional: {
      title: "Traditional Espresso Machines",
      icon: Coffee,
      description: "Manual espresso machines featuring professional-grade components and precise control mechanisms",
      technicalNote: "These machines utilize pressure-based extraction at 9 bars, with temperature stability systems for consistent results."
    },
    beanToCup: {
      title: "Bean-to-Cup Systems",
      icon: Settings,
      description: "Integrated grinding and brewing systems with automated operation and customizable parameters",
      technicalNote: "Incorporates burr grinders, programmable brewing parameters, and automated milk systems."
    },
    bulkBrew: {
      title: "High-Volume Brewers",
      icon: Coffee,
      description: "Large-capacity coffee makers designed for consistent, high-volume production",
      technicalNote: "Optimized for batch brewing with precise temperature control and even extraction patterns."
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Coffee Machine Technical Specifications</h1>
          <p className="text-lg text-gray-600">Detailed technical analysis and specifications of professional coffee equipment</p>
        </motion.div>

        {/* Category Selection */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-6 mb-12"
        >
          {(Object.entries(categoryInfo) as [CategoryKey, CategoryMetadata][]).map(([key, info], index) => {
            const IconComponent = info.icon;
            return (
              <motion.button
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                onClick={() => setActiveCategory(key)}
                className={`flex-1 p-6 rounded-xl transition-all ${
                  activeCategory === key 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border border-gray-200`}
              >
                <div className="flex items-center justify-center mb-3">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-sm opacity-80">{info.description}</p>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Technical Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="text-blue-600 mt-1" size={20} />
            <p className="text-sm text-blue-900">{categoryInfo[activeCategory].technicalNote}</p>
          </div>
        </motion.div>

        {/* Specifications Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {machines[activeCategory].map((machine, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="flex flex-col items-center">
                  <motion.img 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={machine.image}
                    alt={`${machine.name} technical view`}
                    className="w-fit rounded-[1pc] h-48 object-contain"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{machine.name}</h3>
                  
                  <div className="space-y-4">
                    {Object.entries(machine.specs).map(([key, value], idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <Info className="text-blue-600 mt-1" size={16} />
                        <div>
                          <span className="block text-sm font-medium text-gray-900">{key}</span>
                          <span className="text-sm text-gray-600">{value}</span>
                        </div>
                      </motion.div>
                    ))}
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