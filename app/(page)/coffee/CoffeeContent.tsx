'use client'
import React, { useState } from 'react';
import { Coffee, Info, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface Category {
  id: string;
  name: string;
}

interface CoffeeType {
  name: string;
  description: string;
  key_features: string[];
  image: string;
}

const CoffeeGuide: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('espresso');

  const categories: Category[] = [
    { id: 'espresso', name: 'Espresso-Based' },
    { id: 'brewed', name: 'Brewed Coffee' },
    { id: 'other', name: 'Specialty Types' }
  ];

  const coffeeTypes: Record<string, CoffeeType[]> = {
    espresso: [
        {
          name: "Espresso",
          description: "The foundation! A concentrated shot of coffee brewed under high pressure. Intense flavor, often the base for other drinks.",
          key_features: ["Concentrated", "Intense flavor", "2-3 oz serving", "Crema on top"]
          ,image: "https://i.pinimg.com/736x/44/0c/90/440c90f0128e86448c665aba221eeadf.jpg"
        },
        {
          name: "Americano",
          description: "Espresso diluted with hot water. Strong, but less intense than pure espresso.",
          key_features: ["Diluted espresso", "Similar strength to drip coffee", "Smooth taste", "No milk"]
          ,image: "https://i.pinimg.com/736x/44/0c/90/440c90f0128e86448c665aba221eeadf.jpg"
        },
        {
          name: "Latte",
          description: "Espresso with steamed milk and a thin layer of foam. Creamy and smooth.",
          key_features: ["1/3 espresso", "2/3 steamed milk", "Thin foam layer", "Mild taste"]
          ,image: "https://i.pinimg.com/736x/44/0c/90/440c90f0128e86448c665aba221eeadf.jpg"
        },
        {
          name: "Cappuccino",
          description: "Espresso with steamed milk and a thicker layer of foam, often with a sprinkle of cocoa or cinnamon.",
          key_features: ["Equal parts espresso", "Steamed milk", "Milk foam", "Optional toppings"]
          ,image: "https://i.pinimg.com/736x/44/0c/90/440c90f0128e86448c665aba221eeadf.jpg"
        },
        {
          name: "Macchiato",
          description: "Espresso with a small amount of foamed milk ('marked' with milk).",
          key_features: ["Mostly espresso", "Small amount of milk", "Stronger than latte", "2-3 oz total"]
          ,image: "https://i.pinimg.com/736x/44/0c/90/440c90f0128e86448c665aba221eeadf.jpg"
        },
        {
          name: "Mocha",
          description: "A chocolatey latte! Espresso with chocolate syrup, steamed milk, and whipped cream.",
          key_features: ["Chocolate flavor", "Similar to latte", "Optional whipped cream", "Sweet taste"]
          ,image: "https://i.pinimg.com/736x/44/0c/90/440c90f0128e86448c665aba221eeadf.jpg"
        }
      ],
      brewed: [
        {
          name: "Drip Coffee",
          description: "The classic! Hot water poured over coffee grounds, filtered, and brewed into a pot.",
          key_features: ["Most common brewing method", "Paper filtered", "Clear taste", "Less oils"]
          ,image: "https://i.pinimg.com/736x/44/0c/90/440c90f0128e86448c665aba221eeadf.jpg"
        },
        {
          name: "Pour Over",
          description: "Similar to drip, but you manually pour the water, giving you more control over the brewing process.",
          key_features: ["Manual brewing", "Control over extraction", "Clean taste", "Highlights subtle flavors"]
          ,image: "https://i.pinimg.com/736x/44/0c/90/440c90f0128e86448c665aba221eeadf.jpg"
        },
        {
          name: "French Press",
          description: "Coarsely ground coffee steeped in hot water, then pressed to separate the grounds. Rich and full-bodied.",
          key_features: ["Full immersion brewing", "No paper filter", "Oil retention", "Rich body"]
          ,image: "https://i.pinimg.com/736x/44/0c/90/440c90f0128e86448c665aba221eeadf.jpg"
        },
        {
          name: "Cold Brew",
          description: "Coffee grounds steeped in cold water for hours, resulting in a smooth, less acidic coffee.",
          key_features: ["12-24 hour steep", "Less acidic", "Smooth taste", "Served cold"]
          ,image: "https://i.pinimg.com/736x/44/0c/90/440c90f0128e86448c665aba221eeadf.jpg"
        }
      ],
      other: [
        {
          name: "Turkish Coffee",
          description: "Finely ground coffee brewed in a special pot called a 'cezve,' often with sugar and spices. Strong and unfiltered.",
          key_features: ["Ultra-fine grounds", "Unfiltered", "Traditional method", "Often spiced"]
          ,image: "https://i.pinimg.com/736x/44/0c/90/440c90f0128e86448c665aba221eeadf.jpg"
        },
        {
          name: "Irish Coffee",
          description: "Hot coffee with Irish whiskey and sugar, topped with cream.",
          key_features: ["Contains alcohol", "Whipped cream top", "Sweetened", "Served hot"]
          ,image: "https://i.pinimg.com/736x/44/0c/90/440c90f0128e86448c665aba221eeadf.jpg"
        },
        {
          name: "Affogato",
          description: "A scoop of ice cream 'drowned' in a shot of espresso. Dessert and coffee in one!",
          key_features: ["Dessert drink", "Vanilla ice cream", "Hot espresso", "Temperature contrast"]
          ,image: "https://i.pinimg.com/736x/44/0c/90/440c90f0128e86448c665aba221eeadf.jpg"
        }
      ]
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8"
    >
      {/* Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-serif mb-4">Understanding Coffee Types</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A guide to different coffee preparations and their characteristics. Learn about various brewing methods and styles to find your perfect cup.
        </p>
      </motion.div>

      {/* Categories */}
      <motion.div 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mb-8"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full text-sm transition-colors
              ${selectedCategory === category.id 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Coffee Types Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {coffeeTypes[selectedCategory]?.map((coffee, index) => (
            <motion.div
              key={coffee.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
            >
              <motion.img 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                src={coffee.image} 
                alt={coffee.name} 
                className="absolute top-1 right-3 w-14 h-14 rounded-full border-2 border-gray-300 shadow-md object-cover"
              />
              
              <div className="flex items-start gap-4">
                <Coffee className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl mb-2">{coffee.name}</h3>
                  <p className="text-gray-600 mb-4">{coffee.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Key Characteristics:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {coffee.key_features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Leaf className="w-4 h-4 mr-2 text-gray-400" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Educational Notes */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 bg-gray-50 p-6 rounded-lg"
      >
        <div className="flex items-start gap-4">
          <Info className="w-6 h-6 text-gray-700 mt-1" />
          <div>
            <h3 className="font-serif text-xl mb-4">Important Notes About Coffee</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• The type of bean (Arabica, Robusta, etc.) and roast level greatly affect the flavor of your coffee</li>
              <li>• Most coffee drinks can be customized with different types of milk, sweeteners, or served iced</li>
              <li>• Water temperature and brewing time are crucial factors in coffee preparation</li>
              <li>• Personal taste preferences should guide your coffee choices - there&apos;s no right way to enjoy coffee</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CoffeeGuide;