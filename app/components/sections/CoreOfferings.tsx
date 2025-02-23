'use client'
import React, { ReactNode } from 'react';
import { Coffee, Settings, MapPin, Award, Coins, Brain, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

interface CoreOffering {
  icon: ReactNode;
  title: string;
  description?: string;
  content?: string[];
}

interface Reason {
  icon: ReactNode;
  title: string;
  description: string;
}

const coreOfferings: CoreOffering[] = [
  {
    icon: <Coffee size={32} />,
    title: "Premium Coffee Beans",
    description: "We supply ethically sourced, expertly roasted coffee beans for every palate. Whether you crave bold espresso blends or smooth single-origin varieties, our beans promise freshness and exceptional flavor."
  },
  {
    icon: <Settings size={32} />,
    title: "New & Pre-Owned Machines",
    description: "New Machines: Cutting-edge espresso equipment from trusted brands. Pre-Owned Machines: Fully refurbished, high-performance options at competitive prices. Perfect for startups, home setups, or businesses upgrading their coffee stations."
  },
  {
    icon: <Wrench size={32} />,
    title: "Expert Servicing & Repairs",
    content: [
      "Specializing in espresso machine maintenance, our certified technicians offer:",
      "Routine servicing to extend machine lifespan",
      "Emergency repairs to minimize downtime",
      "Genuine parts replacements",
      "Tailored maintenance plans for businesses"
    ]
  }
];

const reasons: Reason[] = [
  {
    icon: <MapPin size={24} />,
    title: "Local & Reliable",
    description: "As a Corby-based team, we provide fast, personalized service with deep community roots."
  },
  {
    icon: <Award size={24} />,
    title: "Quality Guaranteed",
    description: "Every product and repair meets rigorous standards—no compromises."
  },
  {
    icon: <Coins size={24} />,
    title: "Cost-Effective Solutions",
    description: "From budget-friendly pre-owned machines to affordable maintenance plans, we help you save without sacrificing quality."
  },
  {
    icon: <Brain size={24} />,
    title: "Industry Expertise",
    description: "With years of experience, we understand the nuances of coffee equipment and customer needs."
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const iconAnimation = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

export default function JLEspressoServices() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="bg-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Offerings Section */}
        <motion.section 
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Core Offerings
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {coreOfferings.map((offering, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    variants={iconAnimation}
                    className="p-2 bg-brown-50 rounded-lg"
                  >
                    {offering.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-900">
                    {offering.title}
                  </h3>
                </div>
                {offering.description ? (
                  <p className="text-gray-600">{offering.description}</p>
                ) : (
                  <motion.ul 
                    variants={staggerContainer}
                    className="text-gray-600 list-disc pl-5 space-y-2"
                  >
                    {offering.content?.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Why Choose J.L Espresso Services?
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    variants={iconAnimation}
                    className="p-2 bg-green-50 rounded-full"
                  >
                    {reason.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold ml-3 text-gray-900">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Serving Corby Section */}
        <motion.section 
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            Serving Corby & Beyond
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Whether you&apos;re troubleshooting a home machine or managing a commercial coffee setup, 
            J.L Espresso Services Ltd is your one-stop shop. We combine expertise with dedication 
            to deliver exceptional coffee solutions.
          </motion.p>
        </motion.section>
      </div>
    </motion.div>
  );
}