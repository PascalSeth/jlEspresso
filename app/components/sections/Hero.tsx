'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Premium Coffee Beans",
    description: "Sourced from the finest farms worldwide, our coffee beans ensure a rich and flavorful experience.",
    button1: "Shop Beans",
    button2: "Learn More",
    image: "/bean_nobg.png",
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
  {
    title: "Exquisite Coffee Blends",
    description: "Discover a variety of expertly crafted coffee blends that cater to every taste.",
    button1: "Order Coffee",
    button2: "View Selection",
    image: "/coffeecup_nobg.png",
    rating: 4.8,
  }
];

const Hero = () => {
  const renderStars = (rating:number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <span>
        {Array(fullStars).fill("⭐").join("")} {halfStar ? "⭐" : ""}
      </span>
    );
  };

  return (
    <div className="flex items-center justify-center p-5 h-screen max-lg:h-full  w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="w-full h-screen max-lg:h-full shadow-md "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex  h-screen max-lg:h-full md:flex-row items-center justify-between max-lg:p-3 p-10 bg-white rounded-lg shadow-lg">
              <div className="max-lg:w-1/2 text-left">
                <h1 className="text-5xl max-lg:text-lg font-bold">{slide.title}</h1>
                <p className="text-gray-600 max-lg:text-sm mt-4">{slide.description}</p>
                <div className="mt-6 flex max-lg:flex-col gap-4">
                  <button className="px-6 py-3 bg-black text-white rounded-lg">{slide.button1}</button>
                  <button className="px-6 py-3 bg-white border border-black rounded-lg">{slide.button2}</button>
                </div>
              </div>
              <div className="relative mt-8  md:mt-0">
                <img src={slide.image} alt="Coffee Product" className="w-full p-3 max-lg:h-56 object-cover h-full rounded-[2pc] max-lg:rounded-none" />
                <div className="absolute max-lg:hidden bottom-4 left-4 bg-white shadow-lg p-2 rounded-lg">
                  <p className="flex items-center gap-2">
                    {renderStars(slide.rating)} <span>{slide.rating} out of 5 Rating</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
