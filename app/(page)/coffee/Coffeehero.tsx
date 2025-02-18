import { Button } from '@/components/ui/button';

export default function CoffeeHero() {
  return (
    <section className="relative bg-white p-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      {/* Left Section */}
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-500">Discover the art of coffee</p>
        <h1 className="text-5xl font-bold text-gray-900 mt-2">
          Premium <br /> Perfect Coffee <br />
          <span className="text-[#4F2B1D]">Everytime</span>
        </h1>
        <p className="mt-4 text-gray-600">Have a Good Day</p>
        <h2 className="text-xl font-semibold mt-2 text-gray-900">
          Ready To Explore Our Premium Coffee Beans?
        </h2>
        <p className="mt-2 text-gray-600 max-w-md">
          From morning brews to evening relaxations, our beans ensure every cup is a delight. Enjoy the perfect blend of flavor and aroma with every sip.
        </p>
        <div className="flex items-center mt-4 space-x-2">
          <p className="text-gray-700 font-semibold">500+ Satisfied Customers</p>
          <div className="flex -space-x-2">
            <img src="https://i.pinimg.com/236x/e6/0b/ce/e60bce34776bb3c5e77f3c6eb13393a0.jpg" width={100} height={30} alt="Satisfied Customers" className="rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="relative flex flex-col items-center">
        <div className="absolute -top-10 left-10">
          <img src="https://i.pinimg.com/236x/97/44/63/9744630b30edaa55c33cabe31f7ccfb6.jpg" width={100} height={100} alt="Coffee Beans" />
        </div>
        <img src="https://i.pinimg.com/236x/eb/37/18/eb371879fef1eb14c5650b38684cd957.jpg" width={300} height={300} alt="Coffee Cup" className="rounded-lg shadow-lg" />
        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg w-60 text-center">
          <img src="https://i.pinimg.com/236x/0c/72/ee/0c72ee5c817e17f0808cd18abd8a9eff.jpg" width={60} height={60} alt="Coffee Bag" className="mx-auto" />
          <p className="text-lg font-bold mt-2">Signature Blend</p>
          <p className="text-gray-600">$20.00</p>
        </div>
        <div className="mt-6 text-center">
          <Button variant="outline">Discover More</Button>
        </div>
      </div>
    </section>
  );
}
