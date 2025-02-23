'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Award, BadgeCheck, Truck, Star } from 'lucide-react';

const features = [
  {
    icon: <Coffee className="text-brown-600" size={36} />,
    title: "Local Experts in Corby",
    description: "Your trusted coffee specialists right in your neighborhood"
  },
  {
    icon: <Award className="text-brown-600" size={36} />,
    title: "Certified Technicians",
    description: "Expert team with professional certifications"
  },
  {
    icon: <BadgeCheck className="text-brown-600" size={36} />,
    title: "Price Match Guarantee",
    description: "We'll match any competitor's price"
  },
  {
    icon: <Truck className="text-brown-600" size={36} />,
    title: "Free Local Delivery",
    description: "Complimentary delivery in the local area"
  },
  {
    icon: <Star className="text-yellow-500" size={36} />,
    title: "100+ 5-Star Reviews",
    description: "Trusted and recommended by our customers"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const iconVariants = {
  hidden: { 
    scale: 0,
    rotate: -180 
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "backOut"
    }
  }
};

export default function JLEspressoDifference() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The J.L Espresso Difference
          </h2>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
            >
              <motion.div 
                variants={iconVariants}
                className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-brown-50"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}