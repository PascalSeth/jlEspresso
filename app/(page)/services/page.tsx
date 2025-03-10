'use client'
import React, { useState } from 'react';
import { Clock, Shield, Phone, Calendar, CheckCircle, AlertTriangle } from 'lucide-react';
import ServiceShowcase from './Showcase';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

interface Category {
  id: string;
  name: string;
}

const EspressoServices: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const services: Service[] = [
    {
      id: 1,
      name: "Emergency Repair Service",
      category: "emergency",
      description: "Quick response emergency repair service for all espresso machine brands. Available 7 days a week with same-day service for JL area.",
      image: "https://i.pinimg.com/474x/3b/20/6c/3b206c0e9b333573fcb21615a86c8d73.jpg",
      features: [
        "Same-day service in JL",
        "All major brands covered",
        "Genuine parts guaranteed",
        "90-day repair warranty"
      ]
    },
    {
      id: 2,
      name: "Routine Maintenance",
      category: "maintenance",
      description: "Regular maintenance service to keep your machine running at peak performance. Prevent issues before they occur.",
      image: "/jlexpresso/MachineFix.jpg",
      features: [
        "Complete system check",
        "Deep cleaning & descaling",
        "Performance optimization",
        "Preventive parts replacement"
      ]
    },
    {
      id: 3,
      name: "Descaling & Calibration",
      category: "maintenance",
      description: "Professional descaling service and precise calibration to ensure the perfect extraction every time.",
      image: "https://i.pinimg.com/474x/da/11/c2/da11c23ac8571242cda6f3c68330f67a.jpg",
      features: [
        "Professional grade descaling",
        "Pressure calibration",
        "Temperature adjustment",
        "Flow rate optimization"
      ]
    },
    {
      id: 4,
      name: "Parts Replacement",
      category: "repair",
      description: "Genuine replacement parts for all major espresso machine brands, professionally installed by our certified technicians.",
      image: "https://i.pinimg.com/474x/55/eb/bb/55ebbb37a364f7cc65c8932b5e7ee24f.jpg",
      features: [
        "Genuine manufacturer parts",
        "Professional installation",
        "Full testing post-repair",
        "Extended part warranty"
      ]
    }
  ];
  
  const categories: Category[] = [
    { id: 'all', name: 'All Services' },
    { id: 'emergency', name: 'Emergency Repairs' },
    { id: 'maintenance', name: 'Maintenance' },
    { id: 'repair', name: 'Repairs & Parts' }
  ];
  
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

    const fadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    };
  
    const staggerChildren = {
      animate: {
        transition: {
          staggerChildren: 0.1
        }
      }
    };
  
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-amber-50"
      >
        {/* Emergency Banner */}
        <motion.div 
          {...fadeIn}
          transition={{ duration: 0.6 }}
          className="bg-red-600 text-white py-3 px-4"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
            <AlertTriangle size={20} />
            <span className="font-medium">Machine Broken? Call Now: </span>
            <a href="tel:+447903856712" className="font-bold hover:underline">+44 7903856712</a>
          </div>
        </motion.div>
  
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-96 overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="/jlexpresso/busRight.jpg" 
            alt="Espresso machine service" 
            className="absolute w-full h-full object-cover"
          />
          
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-serif text-white mb-4"
            >
              Expert Care for Your Espresso Machine
            </motion.h1>
            
            <motion.div 
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl w-full"
            >
              {[
                { icon: Clock, text: "Same-Day Repairs for JL Customers" },
                { icon: Calendar, text: "Flexible Appointments, Including Weekends" },
                { icon: Shield, text: "Transparent Pricing – No Hidden Fees" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3"
                >
                  <item.icon className="text-amber-400" size={24} />
                  <span className="text-white">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-20 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-amber-900 mb-4">
              Keep Your Machine Brewing Perfectly
            </h2>
            <motion.div 
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 mt-8"
            >
              {["Routine Maintenance", "Emergency Repairs", "Descaling & Calibration", "Genuine Parts Replacement"].map((text, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center gap-2 text-amber-800"
                >
                  <CheckCircle size={20} />
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Category Filters */}
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                variants={fadeIn}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amber-800 text-white shadow-md'
                    : 'bg-white text-amber-900 hover:bg-amber-100'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {filteredServices.map((service) => (
                <motion.div 
                  key={service.id}
                  variants={fadeIn}
                  className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
                    
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-amber-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <motion.div 
                      variants={staggerChildren}
                      className="mb-6"
                    >
                      <h4 className="font-medium text-amber-800 mb-2">Service Includes:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <motion.li 
                            key={index}
                            variants={fadeIn}
                            className="flex items-center text-sm"
                          >
                            <CheckCircle className="text-amber-600 mr-2" size={16} />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                    
                    {/* <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-amber-100 hover:bg-amber-200 text-amber-900 font-medium py-3 rounded-lg transition duration-300"
                      onClick={() => console.log(`Booking service: ${service.id}`)}
                    >
                      Book Service
                    </motion.button> */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
  
        <div>
          <ServiceShowcase/>
        </div>
  
        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-amber-900 py-16 px-4"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-white mb-6">Need Urgent Assistance?</h2>
            <p className="text-amber-100 mb-8">
              Our expert technicians are ready to help restore your machine to perfect working order.
            </p>
            <motion.div 
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a 
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+447903856712"
                className="bg-white hover:bg-amber-100 text-amber-900 py-3 px-8 rounded-lg shadow-md transition duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now: +44 7903856712
              </motion.a>
              <motion.button 
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Schedule Service
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
  };
  
  export default EspressoServices;