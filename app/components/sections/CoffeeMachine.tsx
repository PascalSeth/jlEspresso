"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const coffeeMachines = [
  { name: "Mielle Countertop", brand: "Breville", price: "$240.099", image: "https://i.pinimg.com/736x/5e/38/eb/5e38eb3475ad2c9391b36e789e64fb55.jpg" },
  { name: "Delonghi Maestosa", brand: "Delonghi", price: "$257.199", image: "https://i.pinimg.com/236x/3f/77/bd/3f77bd9852ecbb01d80f2e01e7a3c357.jpg" },
  { name: "Phillips Espresso", brand: "Philips", price: "$260.299", image: "https://i.pinimg.com/236x/eb/bb/40/ebbb40c7be50521ef374e9df41db8b84.jpg" },
  { name: "Nespresso", brand: "Mocamaster", price: "$245.899", image: "https://i.pinimg.com/474x/88/4d/f4/884df47a3106f7846accf24ba24a60d9.jpg" },
];

const CoffeeMachine = () => {
  return (
    <div className="p-6 sm:p-10 bg-white max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-6 text-center sm:text-left gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase">
          Explore Our Coffee Machines
        </h2>
        <div className="flex gap-2">
          <Button className="prev-btn">
            <ChevronLeft size={20} />
          </Button>
          <Button className="next-btn">
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
      <p className="text-gray-600 mb-6 text-center sm:text-left">
        Make the perfect cup every time with our precision coffee machines.
      </p>

      {/* Swiper Section */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={3}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-6"
        >
          {coffeeMachines.map((machine, index) => (
            <SwiperSlide key={index}>
              <div className="relative group rounded-lg overflow-hidden ">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-60 sm:h-72 object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 opacity-100 transition-opacity">
                  <h3 className="text-lg font-semibold text-white">{machine.name}</h3>
                  <p className="text-gray-300 text-sm">By {machine.brand}</p>
                  <p className="text-xl font-bold text-white">{machine.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Description & CTA Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
        <p className="text-gray-600 text-center sm:text-left max-w-xl">
          We offer various types of coffee machines, from simple to sophisticated,
          which can meet the needs of home coffee enthusiasts to professionals.
        </p>
        <button className="px-5 py-2 bg-black text-white rounded-lg font-medium shadow-md hover:bg-gray-800 transition">
          See More
        </button>
      </div>
    </div>
  );
};

export default CoffeeMachine;
