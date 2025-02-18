import { Coffee, LucideCoffee, Package, Wrench } from "lucide-react";

const services = [
  {
    icon: <Coffee className="" size={40} />, 
    title: "Coffee", 
    description: "Our beautiful coffee beans are ethically sourced from the world's top coffee regions before being shipped, roasted, and delivered fresh."
  },
  {
    icon: <LucideCoffee size={40} />, 
    title: "Coffee Machines", 
    description: "Our coffee equipment is designed and built by Europe's leading manufacturers. Let us help you choose the best machine for your needs."
  },
  {
    icon: <Package size={40} />, 
    title: "Essentials", 
    description: "We provide all the ancillary products you need to enhance your coffee experience, making us your one-stop shop."
  },
  {
    icon: <Wrench className="text-gray-500" size={40} />, 
    title: "Service", 
    description: "Our dedicated team of technicians ensures efficient and reliable service, minimizing downtime and costs."
  }
];

export default function CoffeeServices() {
  return (
    <div className="text-center py-10 bg-white text-gray-900">
      <h2 className="text-2xl font-bold text-brown-800">Our Coffee Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 px-4 md:px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg shadow-md text-center border border-gray-300"
          >
            {service.icon}
            <h3 className="mt-2 text-lg font-semibold text-brown-700">{service.title}</h3>
            <p className="mt-2 text-sm text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
