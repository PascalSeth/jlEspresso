'use client'
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const ButtonAnimation = motion(Button);

export default function CoffeeBeansCarousel() {
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
          <ButtonAnimation 
            className="prev-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} />
          </ButtonAnimation>
          <ButtonAnimation 
            className="next-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} />
          </ButtonAnimation>
        </motion.div>
      </div>
      <motion.p 
        variants={fadeInUp}
        className="text-gray-600 mt-2 text-center sm:text-left"
      >
        Discover our carefully sourced single-origin and specialty coffee beans.
      </motion.p>

      <motion.div 
        variants={fadeInUp}
        className="relative mt-8"
      >
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
              <motion.div 
                className="relative group rounded-lg overflow-hidden bg-neutral-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={bean.image}
                  alt={bean.name}
                  className="w-full h-60 sm:h-72 object-cover transition duration-300 group-hover:scale-105"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="absolute top-3 right-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ButtonAnimation
                      variant="ghost" 
                      size="icon"
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full w-10 h-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ShoppingCart className="h-5 w-5 text-white" />
                    </ButtonAnimation>
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-semibold text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {bean.name}
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
                    className="flex justify-between items-center mt-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex gap-2">
                      <motion.span 
                        className="text-white text-sm bg-black/50 px-2 py-1 rounded"
                        whileHover={{ scale: 1.05 }}
                      >
                        {bean.roast}
                      </motion.span>
                      <motion.span 
                        className="text-white text-sm bg-black/50 px-2 py-1 rounded"
                        whileHover={{ scale: 1.05 }}
                      >
                        {bean.origin}
                      </motion.span>
                    </div>
                    <motion.p 
                      className="text-xl font-bold text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      {bean.price}
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
          Each bean is carefully selected and roasted to bring out its unique flavor profile and regional characteristics.
        </motion.p>
        <ButtonAnimation 
          className="bg-black text-white px-6 py-2 mt-4 sm:mt-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop All Beans
        </ButtonAnimation>
      </motion.div>
    </motion.div>
  );
}