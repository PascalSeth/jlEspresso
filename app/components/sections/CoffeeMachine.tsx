"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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

const CoffeeMachine = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className="p-6 sm:p-10 bg-white max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          PREMIUM COFFEE MACHINES
        </h2>
        <div className="flex gap-2">
          <Button onClick={() => swiperRef.current?.slidePrev()}>
            <ChevronLeft size={20} />
          </Button>
          <Button onClick={() => swiperRef.current?.slideNext()}>
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
      <p className="text-gray-600 mt-2 text-center sm:text-left">
        Discover our collection of professional-grade coffee machines for the perfect brew.
      </p>

      <div className="relative mt-8">
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
              <div className="relative group w-full rounded-lg overflow-hidden bg-neutral-100">
                <div className="absolute top-3 left-3 z-10">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    machine.status === "NEW" 
                      ? "bg-green-500 text-white" 
                      : "bg-blue-500 text-white"
                  }`}>
                    {machine.status}
                  </span>
                </div>
                
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-60 sm:h-72 object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <div className="absolute top-3 right-3">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full w-10 h-10"
                    >
                      <ShoppingCart className="h-5 w-5 text-white" />
                    </Button>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{machine.name}</h3>
                  <p className="text-gray-200 text-sm mt-1">By {machine.brand}</p>
                  <p className="text-gray-200 text-sm mt-1">{machine.features}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-white text-sm bg-black/50 px-2 py-1 rounded">
                      {machine.type}
                    </span>
                    <p className="text-xl font-bold text-white">{machine.price}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
        <p className="text-gray-600 text-center sm:text-left max-w-md">
          From entry-level to professional-grade machines, find the perfect coffee maker to match your brewing style and needs.
        </p>
        <Button className="bg-black text-white px-6 py-2 mt-4 sm:mt-0">Shop All Machines</Button>
      </div>
    </div>
  );
};

export default CoffeeMachine;
