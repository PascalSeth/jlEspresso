'use client'
import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const CoffeeHero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 relative"
    >
      {/* Animated stars */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="hidden md:block absolute top-20 left-1/4"
      >
        <Star className="text-gray-200" size={24} />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:block absolute bottom-20 right-1/4"
      >
        <Star className="text-gray-200" size={24} />
      </motion.div>

      {/* Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-4"
      >
        <p className="text-gray-600 uppercase tracking-wide text-xs sm:text-sm">DISCOVER THE ART OF COFFEE</p>
      </motion.div>

      {/* Main hero section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mb-16">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Powering 
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Perfect Coffee
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-amber-700"
            >
              Experience
            </motion.span>
          </h1>
          
          {/* Customer satisfaction */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-4 mt-8 justify-center md:justify-start"
          >
            <p className="text-gray-600 text-sm sm:text-base">500+ Satisfied Customers</p>
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.img
                  key={i}
                  initial={{ scale: 0, x: -20 }}
                  animate={{ scale: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                  alt="customer"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right side images */}
        <div className="relative h-48 sm:h-64 md:h-80 mt-4 md:mt-0">
          <motion.img 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            src="https://i.pinimg.com/736x/a4/2b/26/a42b2629afe83d398590e671ed54f048.jpg"
            alt="Coffee beans"
            className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 object-cover rounded-lg"
          />
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            src="https://i.pinimg.com/736x/db/36/8d/db368d7dbb6fea821dbf51745877a4c8.jpg"
            alt="Latte art"
            className="absolute bottom-0 right-8 md:right-20 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start lg:items-center">
        {/* Product card */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 sm:p-6 rounded-lg shadow-sm"
        >
          <motion.img 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 }}
            src="https://i.pinimg.com/736x/e9/0c/d0/e90cd0c251be6359343606a1b603743d.jpg"
            alt="Coffee package"
            className="w-24 sm:w-32 h-24 sm:h-32 object-cover mb-4 mx-auto lg:mx-0"
          />
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="font-medium text-center lg:text-left"
          >
            Signature Blend
          </motion.h3>
        
        </motion.div>

        {/* Center text */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="space-y-4 text-center lg:text-left"
        >
          <p className="text-gray-500 text-sm sm:text-base">Have A Good Day</p>
          <h2 className="text-xl sm:text-2xl font-serif">
            Ready To Explore
            <br />
            Our Premium Coffee
            <br />
            Beans?
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            From morning brews to evening relaxations,
            <br className="hidden sm:block" />
            our beans enliven every cup as a delight. Enjoy
            <br className="hidden sm:block" />
            the perfect blend of flavor and aroma with
            <br className="hidden sm:block" />
            every sip.
          </p>
        </motion.div>

        {/* Join button */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-center lg:text-right"
        >
          <div className="inline-flex flex-col items-center lg:items-end gap-2">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-600 transition-colors"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 bg-white rounded-full"
              />
              Explore
            </motion.button>
            <p className="font-medium text-sm sm:text-base">Elevate Your Coffee Experience</p>
            <motion.p 
              whileHover={{ scale: 1.05 }}
              className="text-xs sm:text-sm text-gray-500 underline cursor-pointer hover:text-gray-700"
            >
              Discover More
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CoffeeHero;