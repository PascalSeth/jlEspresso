'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Premium Coffee Beans",
    description: "Sourced from the finest farms worldwide, our coffee beans ensure a rich and flavorful experience.",
    button1: "Shop Beans",
    button2: "Learn More",
    image: "/beanscoffee.jpg",
    rating: 4.9,
  },
  {
    title: "Top-Notch Coffee Machines",
    description: "Brew barista-quality coffee at home with our advanced coffee machines and equipment.",
    button1: "Buy Now",
    button2: "Explore More",
    image: "https://i.pinimg.com/736x/f1/6c/1b/f16c1b144d7bd6119b17786e3353b12e.jpg",
    rating: 5.0,
  },
];

const Hero = () => {
  const renderStars = (rating:number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <span className="text-yellow-400">
        {Array(fullStars).fill("⭐").join(" ")} {halfStar ? "⭐" : ""}
      </span>
    );
  };

  return (
    <div className="flex items-center max-h-96 max-lg:p-3 justify-center max-lg:max-h-96  h-screen  w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full max-w-7xl rounded-3xl h-screen max-h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6 md:px-12">
                <motion.h2
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-xl mb-4"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex gap-4 mb-4"
                >
                  <Button className="bg-primary hover:bg-primary-dark px-6 py-3 text-lg">{slide.button1}</Button>
                  <Button className="bg-secondary hover:bg-secondary-dark px-6 py-3 text-black text-lg">{slide.button2}</Button>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-lg"
                >
                  {renderStars(slide.rating)} {slide.rating} out of 5 Rating
                </motion.p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;