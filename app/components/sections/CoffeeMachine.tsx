"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper as SwiperCore } from "swiper";

const coffeeMachines = [
  { 
    id: 1,
    name: "Mielle Countertop",
    brand: "Breville",
    price: "$240.099",
    features: "15 Bar Pump, PID Control",
    type: "Semi-Automatic",
    image: "https://i.pinimg.com/736x/5e/38/eb/5e38eb3475ad2c9391b36e789e64fb55.jpg",
    status: "NEW"
  },
  { 
    id: 2,
    name: "Delonghi Maestosa",
    brand: "Delonghi",
    price: "$257.199",
    features: "Dual Boiler, Touch Display",
    type: "Super-Automatic",
    image: "https://i.pinimg.com/236x/3f/77/bd/3f77bd9852ecbb01d80f2e01e7a3c357.jpg",
    status: "REFURBISHED"
  },
  { 
    id: 3,
    name: "Phillips Espresso",
    brand: "Philips",
    price: "$260.299",
    features: "Ceramic Grinder, Auto-Milk",
    type: "Automatic",
    image: "https://i.pinimg.com/236x/eb/bb/40/ebbb40c7be50521ef374e9df41db8b84.jpg",
    status: "NEW"
  },
  { 
    id: 4,
    name: "Nespresso",
    brand: "Mocamaster",
    price: "$245.899",
    features: "Pod System, Quick Heat",
    type: "Pod Machine",
    image: "https://i.pinimg.com/474x/88/4d/f4/884df47a3106f7846accf24ba24a60d9.jpg",
    status: "REFURBISHED"
  },
];

const MotionButton = motion(Button);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const statusBadgeVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

const CoffeeMachine = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="p-6 sm:p-10 bg-white max-w-6xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl sm:text-3xl font-bold text-center sm:text-left"
        >
          PREMIUM COFFEE MACHINES
        </motion.h2>
        <motion.div 
          variants={fadeInUp}
          className="flex gap-2"
        >
          <MotionButton 
            onClick={() => swiperRef.current?.slidePrev()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} />
          </MotionButton>
          <MotionButton 
            onClick={() => swiperRef.current?.slideNext()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} />
          </MotionButton>
        </motion.div>
      </div>
      <motion.p 
        variants={fadeInUp}
        className="text-gray-600 mt-2 text-center sm:text-left"
      >
        Discover our collection of professional-grade coffee machines for the perfect brew.
      </motion.p>

      <motion.div 
        variants={fadeInUp}
        className="relative mt-8"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-6"
        >
          {coffeeMachines.map((machine) => (
            <SwiperSlide key={machine.id}>
              <motion.div 
                className="relative group w-full rounded-lg overflow-hidden bg-neutral-100"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="absolute top-3 left-3 z-10"
                  variants={statusBadgeVariants}
                  initial="initial"
                  animate="animate"
                >
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    machine.status === "NEW" 
                      ? "bg-green-500 text-white" 
                      : "bg-blue-500 text-white"
                  }`}>
                    {machine.status}
                  </span>
                </motion.div>
                
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-60 sm:h-72 object-cover transition duration-300 group-hover:scale-105"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="absolute top-3 right-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MotionButton 
                      variant="ghost" 
                      size="icon"
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full w-10 h-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ShoppingCart className="h-5 w-5 text-white" />
                    </MotionButton>
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-semibold text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {machine.name}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-200 text-sm mt-1"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    By {machine.brand}
                  </motion.p>
                  <motion.p 
                    className="text-gray-200 text-sm mt-1"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {machine.features}
                  </motion.p>
                  <motion.div 
                    className="flex justify-between items-center mt-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.span 
                      className="text-white text-sm bg-black/50 px-2 py-1 rounded"
                      whileHover={{ scale: 1.05 }}
                    >
                      {machine.type}
                    </motion.span>
                    <motion.p 
                      className="text-xl font-bold text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      {machine.price}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div 
        variants={fadeInUp}
        className="flex flex-col sm:flex-row justify-between items-center mt-6"
      >
        <motion.p 
          variants={fadeInUp}
          className="text-gray-600 text-center sm:text-left max-w-md"
        >
          From entry-level to professional-grade machines, find the perfect coffee maker to match your brewing style and needs.
        </motion.p>
        <MotionButton 
          className="bg-black text-white px-6 py-2 mt-4 sm:mt-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop All Machines
        </MotionButton>
      </motion.div>
    </motion.div>
  );
};

export default CoffeeMachine;