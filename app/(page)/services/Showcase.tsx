'use client'
import React from 'react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
}

const ServiceShowcase = () => {
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      src: '/jlexpresso/repairs.jpeg',
      title: 'Espresso Machine Repair'
    },
    {
      id: 2,
      type: 'image',
      src: '/jlexpresso/repairs2.jpeg',
      title: 'Professional Maintenance'
    },
    {
      id: 3,
      type: 'image',
      src: '/jlexpresso/repairs3.jpeg',
      title: 'Parts Replacement'
    },
    {
      id: 4,
      type: 'image',
      src: '/jlexpresso/repairs4.jpeg',
      title: 'Machine Servicing'
    },
    {
      id: 5,
      type: 'video',
      src: '/jlexpresso/repairvid1.mp4',
      thumbnail: '/jlexpresso/repairvid1.mp4',
      title: 'Service Workshop'
    },
    {
      id: 6,
      type: 'video',
      src: '/jlexpresso/repair2vid.mp4',
      thumbnail: '/jlexpresso/repairvid1.mp4',
      title: 'Repair Process'
    }
  ];

  return (
    <div className="bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-amber-900 text-center mb-8">
          Our Service Workshop
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
  {item.type === 'video' ? (
    <>
       <video
        className="w-full h-full object-cover"
        poster={item.thumbnail}
        controls
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={item.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  ) : (
    <>
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
    </>
  )}
  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
    <h3 className="text-white text-lg font-medium">{item.title}</h3>
  </div>
</div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <h3 className="text-white text-lg font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceShowcase;