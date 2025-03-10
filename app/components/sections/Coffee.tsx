"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper as SwiperCore } from "swiper";
import coffeeData from "@/data";
import { useRouter } from "next/navigation";

interface CoffeeBean {
  id: string;
  name: string;
  origin: string;
  region: string;
  roastLevel: string;
  description?: string;
  imageUrl: string;
}

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

const CoffeeBeansCarousel = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const router = useRouter();

  const handleBeanClick = (beanId: string) => {
    router.push(`/product?id=${beanId}`);
  };

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
          PREMIUM COFFEE BEANS
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
        Explore our collection of carefully sourced single-origin and specialty coffee beans.
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
          {coffeeData.coffeeBeans.map((bean: CoffeeBean) => (
            <SwiperSlide key={bean.id}>
              <motion.div 
                className="relative group w-full rounded-lg overflow-hidden bg-neutral-100 cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                onClick={() => handleBeanClick(bean.id)}
              >
                <img
                  src={bean.imageUrl}
                  alt={bean.name}
                  className="w-full h-60 sm:h-72 object-cover transition duration-300 group-hover:scale-105"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="text-lg font-semibold text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {bean.name} - {bean.origin}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-200 text-sm mt-1"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {bean.description}
                  </motion.p>
                  <motion.div
                    className="mt-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                      View Details
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default CoffeeBeansCarousel;