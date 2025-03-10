import React from 'react';
import { BadgeCheck, Truck, Sparkles, Trophy } from 'lucide-react';

const benefits = [
  {
    title: "EUROPEAN STANDARD QUALITY",
    description: "We only supply coffee machines with the highest European quality standards, ensuring reliable and long-lasting performance.",
    icon: <Trophy className="w-6 h-6 text-gray-700" />
  },
  {
    title: "GUARANTEED PRODUCT",
    description: "All purchases are covered by a warranty, giving our customers peace of mind in the face of technical issues.",
    icon: <BadgeCheck className="w-6 h-6 text-gray-700" />
  },
  {
    title: "LATEST DESIGNS",
    description: "We always update our collection with the latest coffee machine designs that combine aesthetic beauty with outstanding functionality.",
    icon: <Sparkles className="w-6 h-6 text-gray-700" />
  },
  {
    title: "FREE SHIPPING",
    description: "We offer free shipping on all our products, providing added value to customers by saving on shipping costs.",
    icon: <Truck className="w-6 h-6 text-gray-700" />
  }
];

export default function ShopBenefits() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Title and Video */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              BENEFITS OF BUYING FROM OUR SHOP
            </h2>
            <p className="text-gray-600">
              Discover the Advantages: Why Choose Us for Your Next Purchase?
            </p>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                controls
                muted
                autoPlay
                preload="metadata"
                poster="/api/placeholder/800/600"
              >
                <source src="/jlexpresso/vidshowcase.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right Column - Benefits List */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}