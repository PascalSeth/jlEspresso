'use client'
import React from 'react';
import { Coffee, Settings, Users, Leaf, Star, Info, MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUsPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8"
    >
      {/* Hero Section */}
      <motion.div className="relative h-96 mb-12 rounded-xl overflow-hidden" variants={fadeIn}>
        <video 
          src="/jlexpresso/shopview.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div className="text-center text-white p-6" variants={fadeIn}>
            <h1 className="text-4xl font-serif mb-4">Crafting Excellence in Coffee</h1>
            <p className="text-xl max-w-2xl">
              From premium beans to expert service, we&apos;re dedicated to delivering exceptional coffee solutions across the United Kingdom.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" variants={fadeIn}>
        {[{ number: '2010', label: 'Established' }, { number: 'UK-Wide', label: 'Coverage' }, { number: '1000+', label: 'Happy Clients' }, { number: '24/7', label: 'Support' }].map((stat, index) => (
          <motion.div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm text-center" whileHover={{ scale: 1.05 }}>
            <h3 className="text-3xl font-serif text-gray-800 mb-2">{stat.number}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Our Story Section */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" variants={fadeIn}>
        <motion.div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm" whileHover={{ scale: 1.02 }}>
          <div className="flex items-start gap-4">
            <Coffee className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-serif text-2xl mb-4">Our Story</h3>
              <div className="text-gray-600 space-y-4">
                <p>The story of J.L Espresso began in 2010 in London, fueled by a passion for both the art of coffee making and the mechanics of the machines that make it possible.</p>
                <p>Starting from a home workshop, we were driven by a simple yet powerful vision: to provide unparalleled coffee experiences.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="rounded-lg overflow-hidden h-64" whileHover={{ scale: 1.02 }}>
          <img src="/jlexpresso/busRight.jpg" alt="bus" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
      {/* Services Section */}
      <h3 className="font-serif text-2xl mb-6">Our Offerings</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: <Coffee className="w-6 h-6 text-gray-700" />,
            title: "Premium Coffee Beans",
            description: "Ethically sourced beans from renowned coffee-growing regions.",
            features: ["Single-origin selections", "Small-batch roasting", "Ethical sourcing", "Expert curation"],
            image: "https://i.pinimg.com/736x/3a/be/c7/3abec76cfcbb81afaa653476bdfe2604.jpg"
          },
          {
            icon: <Settings className="w-6 h-6 text-gray-700" />,
            title: "Coffee Machines",
            description: "State-of-the-art equipment and pre-owned machines.",
            features: ["Latest technology", "Energy efficient", "Professional grade", "Customizable options"],
            image: "https://i.pinimg.com/736x/b0/81/c6/b081c6453ecd19064321145093fc1523.jpg"
          },
          {
            icon: <Users className="w-6 h-6 text-gray-700" />,
            title: "Service & Repairs",
            description: "Professional maintenance and repair services.",
            features: ["24/7 support", "Nationwide coverage", "Expert technicians", "Quick response"],
            image: "https://i.pinimg.com/474x/9b/9d/17/9b9d17254d8856fdc1ca319c64db453e.jpg"
          }
        ].map((service, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-start gap-4">
                {service.icon}
                <div>
                  <h3 className="font-serif text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Leaf className="w-4 h-4 mr-2 text-gray-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shop Section */}
      <div className="mb-12">
        <h3 className="font-serif text-2xl mb-6">Visit Our Shop</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
  <img 
    src="/map.png" 
    alt="Map location" 
    className="w-full h-full object-cover"
  />
</div>

          {/* Shop Information */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h4 className="font-serif text-xl mb-4">London Flagship Store</h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-700" />
                <div>
                  <h5 className="font-medium mb-2">Location</h5>
                  <p className="text-gray-600">  <span>Gretton Rd, <br />Corby NN17 3HN, United Kingdom</span></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gray-700" />
                <div>
                  <h5 className="font-medium mb-2">Opening Hours</h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>Monday - Friday: 7:00 AM - 7:00 PM</li>
                    <li>Saturday: 8:00 AM - 6:00 PM</li>
                    <li>Sunday: 9:00 AM - 5:00 PM</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gray-700" />
                <div>
                  <h5 className="font-medium mb-2">Contact</h5>
                  <p className="text-gray-600">+44 7903 856712</p>
                  <p className="text-gray-600">info@jlespressoservice.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 rounded-lg p-6 mb-12">
        <div className="flex items-start gap-4">
          <Star className="w-6 h-6 text-gray-700 mt-1" />
          <div>
            <h3 className="font-serif text-2xl mb-4">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Excellence", description: "Superior quality in every product and service we offer." },
                { title: "Sustainability", description: "Committed to responsible sourcing and environmentally friendly operations." },
                { title: "Customer Centricity", description: "Building strong relationships and tailoring solutions to unique needs." }
              ].map((value, index) => (
                <div key={index} className="text-gray-600">
                  <h4 className="font-medium mb-2">{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        <div className="flex items-start gap-4">
          <Info className="w-6 h-6 text-gray-700 mt-1" />
          <div>
            <h3 className="font-serif text-2xl mb-4">Get in Touch</h3>
            <div className="space-y-2 text-gray-600">
              <p>📍 London, UK</p>
              <p>📞 +44 7903 856712</p>
              <p>🌐 www.jlespresso.com</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUsPage;