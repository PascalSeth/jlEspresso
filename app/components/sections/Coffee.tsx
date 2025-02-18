'use client'
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const coffeeTypes = [
  {
    name: "Espresso",
    description: "Strong and bold shot of coffee.",
    price: "$3.50",
    image: "https://i.pinimg.com/236x/8a/50/9e/8a509e80a255b25b54774a4437debf0e.jpg",
  },
  {
    name: "Cappuccino",
    description: "Creamy and frothy delight.",
    price: "$4.00",
    image: "https://i.pinimg.com/736x/d1/6e/ea/d16eea316aaeb3079cb44409918e0b62.jpg",
  },
  {
    name: "Latte",
    description: "Smooth and milky coffee.",
    price: "$4.50",
    image: "https://i.pinimg.com/236x/1c/df/36/1cdf3611722765dd43ab3efd80aa61b6.jpg",
  },
  {
    name: "Americano",
    description: "Espresso with hot water.",
    price: "$3.00",
    image: "https://i.pinimg.com/236x/a3/50/ee/a350eef200ff69f0ef211035655d865b.jpg",
  },
];

export default function CoffeeCarousel() {


  return (
    <div className="p-6 sm:p-10 bg-white max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          EXPLORE OUR COFFEE SELECTION
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
      <p className="text-gray-600 mt-2 text-center sm:text-left">
        Enjoy a variety of handcrafted coffee beverages made to perfection.
      </p>

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
          {coffeeTypes.map((machine, index) => (
            <SwiperSlide key={index}>
              <div className="relative group rounded-lg overflow-hidden ">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-60 sm:h-72 object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 shadow-black shadow-lg flex flex-col justify-end p-4 opacity-100 transition-opacity">
                  <h3 className="text-lg font-semibold text-white">{machine.name}</h3>
                  <p className="text-gray-300 text-sm"> {machine.description}</p>
                  <p className="text-xl font-bold text-white">{machine.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
        <p className="text-gray-600 text-center sm:text-left max-w-md">
          We offer a selection of premium coffee drinks, crafted to satisfy every coffee lover&apos;s taste.
        </p>
        <Button className="bg-black text-white px-6 py-2 mt-4 sm:mt-0">See More</Button>
      </div>
    </div>
  );
}
