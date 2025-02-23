'use client'
import React from "react";
import { motion } from "framer-motion";

function CoffeeMakerShowcase() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      className="relative bg-black text-white p-12 max-lg:p-3 rounded-lg shadow-xl flex md:flex-row items-center max-w-full mx-auto border border-gray-800"
    >
      {/* Left Text Section */}
      <motion.div 
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center w-full text-left space-y-6"
      >
        <motion.h2 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl max-lg:text-sm font-extrabold leading-snug tracking-wide"
        >
          Discover the Secret to <br />
          <span className="text-gray-400">Coffee Shop-Worthy</span> Drinks
        </motion.h2>
        
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-300 max-lg:text-sm text-lg"
        >
          Enjoy barista-quality espresso at home with cutting-edge coffee machines.
        </motion.p>
      </motion.div>

      {/* Image Section */}
      <div className="relative w-full flex justify-center">
        <motion.img
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ 
            duration: 0.6,
            delay: 0.6
          }}
          src="co_maker.png"
          alt="Coffee Machine"
          className="rounded-lg h-96 max-lg:h-56 object-cover drop-shadow-2xl"
        />

        {/* Floating Product Info Card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute max-lg:hidden -bottom-6 right-0 bg-gray-900 bg-opacity-90 p-5 rounded-lg shadow-lg border border-gray-700 backdrop-blur-md w-80"
        >
          <h3 className="text-lg font-semibold text-white">
            NOVA SIMONELLI
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The Nuova Simonelli New Appia S features a semi-automatic brewing system 
            and a heat-exchanger boiler for exceptional coffee extraction.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CoffeeMakerShowcase;