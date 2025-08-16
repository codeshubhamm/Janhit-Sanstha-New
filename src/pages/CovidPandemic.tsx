import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const CovidPandemic = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const covidImages = [
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0021.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0020.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0019.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0018.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0017.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0016.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0015.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0014.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0013.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0011.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0010.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0009.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0008.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0007.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0006.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0005.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0004.jpg",
    "/Covid Pandamic brochers Janhit Sanstha/IMG-20250804-WA0003.jpg"
  ];

  const openModal = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % covidImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(covidImages[nextIndex]);
  };

  const previousImage = () => {
    const prevIndex = currentImageIndex === 0 ? covidImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(covidImages[prevIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      previousImage();
    } else if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-orange-100 text-red-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            🦠 COVID-19 Response
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Pandemic Efforts</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Janhit Sanstha's comprehensive response to the COVID-19 pandemic through various initiatives and community support programs.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">COVID-19 Response Documentation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive documentation of COVID-19 relief efforts, awareness campaigns, and community support initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {covidImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
                onClick={() => openModal(image, index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={`COVID-19 Response ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-3">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our COVID-19 Response Summary</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              During the challenging times of the COVID-19 pandemic, Janhit Sanstha remained committed to serving our communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-red-600 mb-2">20+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Villages Reached</div>
              <div className="text-sm text-gray-600">With awareness campaigns</div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Families Supported</div>
              <div className="text-sm text-gray-600">With essential supplies</div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Emergency Support</div>
              <div className="text-sm text-gray-600">Throughout the crisis</div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Community Safety</div>
              <div className="text-sm text-gray-600">Our primary commitment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full" onKeyDown={handleKeyDown} tabIndex={0}>
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Image Counter */}
            <div className="absolute -top-12 left-0 text-white text-lg font-medium">
              {currentImageIndex + 1} / {covidImages.length}
            </div>
            
            <img
              src={selectedImage}
              alt="COVID-19 Response"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Navigation Buttons */}
            {covidImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    previousImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CovidPandemic; 