'use client'
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const coffeeTypes = [
  {
    name: "Colombian Supremo",
    description: "Rich, balanced with caramel sweetness",
    price: "$18.99/lb",
    origin: "Colombia",
    roast: "Medium",
    image: "https://i.pinimg.com/736x/ea/90/ab/ea90abc8fa48f22468c13e31667778f9.jpg"
  },
  {
    name: "Ethiopian Yirgacheffe",
    description: "Floral, citrus, wine-like acidity",
    price: "$21.99/lb",
    origin: "Ethiopia",
    roast: "Light",
    image: "https://i.pinimg.com/736x/ee/01/80/ee0180e15b680afc4f855ec7c56726fd.jpg"
  },
  {
    name: "Sumatra Mandheling",
    description: "Full-bodied, earthy, spicy notes",
    price: "$19.99/lb",
    origin: "Indonesia",
    roast: "Dark",
    image: "https://i.pinimg.com/736x/dd/ee/37/ddee374a2f9d327b8e591bda71703281.jpg"
  },
  {
    name: "Costa Rica Tarrazu",
    description: "Bright, clean, honey sweetness",
    price: "$20.99/lb",
    origin: "Costa Rica",
    roast: "Medium",
    image: "https://i.pinimg.com/474x/73/14/1a/73141a499a14f59d9f2440232df1af8e.jpg"
  },
];

export default function CoffeeBeansCarousel() {
  return (
    <div className="p-6 sm:p-10 bg-white max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          PREMIUM COFFEE BEANS
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
        Discover our carefully sourced single-origin and specialty coffee beans.
      </p>

      <div className="relative mt-8">
        <Swiper
              modules={[Navigation]}
              spaceBetween={15}
              slidesPerView={1}
              navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-6"
            >
          {coffeeTypes.map((bean, index) => (
            <SwiperSlide key={index}>
              <div className="relative group rounded-lg overflow-hidden bg-neutral-100">
                <img
                  src={bean.image}
                  alt={bean.name}
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
                  </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold text-white">{bean.name}</h3>
                  <p className="text-gray-200 text-sm mt-1">{bean.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex gap-2">
                      <span className="text-white text-sm bg-black/50 px-2 py-1 rounded">
                        {bean.roast}
                      </span>
                      <span className="text-white text-sm bg-black/50 px-2 py-1 rounded">
                        {bean.origin}
                      </span>
                    </div>
                    <p className="text-xl font-bold text-white">{bean.price}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
        <p className="text-gray-600 text-center sm:text-left max-w-md">
          Each bean is carefully selected and roasted to bring out its unique flavor profile and regional characteristics.
        </p>
        <Button className="bg-black text-white px-6 py-2 mt-4 sm:mt-0">Shop All Beans</Button>
      </div>
    </div>
  );
}