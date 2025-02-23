'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
}

const ServiceShowcase = () => {
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      src: '/jlexpresso/repairs.jpeg',
      title: 'Espresso Machine Repair'
    },
    {
      id: 2,
      type: 'image',
      src: '/jlexpresso/repairs2.jpeg',
      title: 'Professional Maintenance'
    },
    {
      id: 3,
      type: 'image',
      src: '/jlexpresso/repairs3.jpeg',
      title: 'Parts Replacement'
    },
    {
      id: 4,
      type: 'image',
      src: '/jlexpresso/repairs4.jpeg',
      title: 'Machine Servicing'
    },
    {
      id: 5,
      type: 'video',
      src: '/jlexpresso/repairvid1.mp4',
      thumbnail: '/jlexpresso/repairvid1.mp4',
      title: 'Service Workshop'
    },
    {
      id: 6,
      type: 'video',
      src: '/jlexpresso/repair2vid.mp4',
      thumbnail: '/jlexpresso/repairvid1.mp4',
      title: 'Repair Process'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const floatAnimation = {
    y: [-5, 5],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const hoverAnimation = {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-amber-50 py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          animate={floatAnimation}
          className="text-3xl md:text-4xl font-serif text-amber-900 text-center mb-8"
        >
          Our Service Workshop
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {mediaItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={hoverAnimation}
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg group"
            >
              <motion.div 
                className="relative aspect-video rounded-lg overflow-hidden shadow-lg group"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                {item.type === 'video' ? (
                  <video
                    className="w-full h-full object-cover"
                    poster={item.thumbnail}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <>
                    <motion.img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-black bg-opacity-0"
                      whileHover={{
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        transition: { duration: 0.3 }
                      }}
                    />
                  </>
                )}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.h3 
                    className="text-white text-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceShowcase;