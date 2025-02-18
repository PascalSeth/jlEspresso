import React from "react";

function CoffeeMakerShowcase() {
  return (
    <div className="relative bg-black text-white p-12 max-lg:p-3 rounded-lg shadow-xl flex  md:flex-row items-center max-w-full mx-auto border border-gray-800">
      {/* Left Text Section */}
      <div className="flex flex-col justify-center w-full text-left space-y-6">
        <h2 className="text-3xl max-lg:text-sm font-extrabold leading-snug tracking-wide">
          Discover the Secret to <br />
          <span className="text-gray-400">Coffee Shop-Worthy</span> Drinks
        </h2>
        <p className="text-gray-300 max-lg:text-sm  text-lg">
          Enjoy barista-quality espresso at home with cutting-edge coffee machines.
        </p>   
      </div>

      {/* Image Section */}
      <div className="relative w-full flex justify-center">
      <img
          src="co_maker.png"
          alt="Coffee Machine"
     
          className="rounded-lg h-96 max-lg:h-56 object-cover drop-shadow-2xl transform transition duration-300 hover:scale-105"
        />

        {/* Floating Product Info Card */}
        <div className="absolute max-lg:hidden -bottom-6 right-0 bg-gray-900 bg-opacity-90 p-5 rounded-lg shadow-lg border border-gray-700 backdrop-blur-md w-80">
          <h3 className="text-lg font-semibold text-white">NOVA SIMONELLI</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The Nuova Simonelli New Appia S features a semi-automatic brewing system 
            and a heat-exchanger boiler for exceptional coffee extraction.
          </p>
        </div>
      </div>

   
    </div>
  );
}

export default CoffeeMakerShowcase;
