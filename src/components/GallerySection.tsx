
import { useState } from "react";

const GallerySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
  { url: "/lovable-uploads/gallery/image 1.png",  caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 2.png",  caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 3.png",  caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 4.png",  caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 5.png",  caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 6.png",  caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 7.png",  caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 8.png",  caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 9.png",  caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 10.png", caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 11.png", caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 12.png", caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 13.png", caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 14.png", caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 15.png", caption: "Students / Batch" },
  { url: "/lovable-uploads/gallery/image 16.png", caption: "Students / Batch" }
];


  const scrollToImage = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    } else {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="snap-section py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Take a glimpse into our world-class facilities, training sessions, and success celebrations
          </p>
        </div>

        {/* Gallery Container */}
        <div className="relative">
          {/* Desktop Gallery - Horizontal Scroll */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2 mb-8">
              <button
                onClick={() => scrollToImage('left')}
                className="glass-card p-3 rounded-full hover:scale-110 transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex-1 overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out space-x-6"
                  style={{ transform: `translateX(-${currentImageIndex * (400 + 24)}px)` }}
                >
                  {galleryImages.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-96">
                      <div className="glass-card p-4 hover:scale-105 transition-all duration-300">
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollToImage('right')}
                className="glass-card p-3 rounded-full hover:scale-110 transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Gallery - Grid with Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={() => scrollToImage('left')}
                className="glass-card p-2 rounded-full hover:scale-110 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex-1 overflow-x-auto">
                <div className="flex space-x-4 pb-2">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-48">
                      <div className="glass-card p-3 hover:scale-105 transition-all duration-300">
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollToImage('right')}
                className="glass-card p-2 rounded-full hover:scale-110 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Counter */}
          <div className="text-center mt-8">
            <div className="glass-card inline-flex items-center px-4 py-2 rounded-full">
              <span className="text-sm text-gray-300">
                {currentImageIndex + 1} of {galleryImages.length}
              </span>
            </div>
          </div>
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="glass-card p-6 text-center">
            <div className="text-2xl font-bold gold-gradient mb-2">500+</div>
            <div className="text-sm text-gray-400">Trading Sessions</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-2xl font-bold gold-gradient mb-2">50+</div>
            <div className="text-sm text-gray-400">Workshops</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-2xl font-bold gold-gradient mb-2">1000+</div>
            <div className="text-sm text-gray-400">Success Stories</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-2xl font-bold gold-gradient mb-2">24/7</div>
            <div className="text-sm text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
