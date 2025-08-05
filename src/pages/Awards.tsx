import React, { useState } from 'react';
import { X } from 'lucide-react';

const Awards = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);



  const achievements = [
    {
      number: "25+",
      label: "Years of Service",
      description: "Dedicated to rural development"
    },
    {
      number: "50+",
      label: "Villages Served",
      description: "Across Maharashtra"
    },
    {
      number: "1000+",
      label: "Families Impacted",
      description: "Through various programs"
    },
    {
      number: "15+",
      label: "Awards Received",
      description: "For excellence in service"
    }
  ];

  // Actual Awards images from the Awards Janhit folder
  const awardImages = [
    "/Awards Janhit/1000003310.jpg",
    "/Awards Janhit/1000003311.jpg",
    "/Awards Janhit/1000003312.jpg",
    "/Awards Janhit/1000003317.jpg",
    "/Awards Janhit/1000003318.jpg",
    "/Awards Janhit/1000003319.jpg",
    "/Awards Janhit/1000003320.jpg",
    "/Awards Janhit/1000003322.jpg",
    "/Awards Janhit/1000003325.jpg",
    "/Awards Janhit/1000005903.jpg",
    "/Awards Janhit/1000005904.jpg",
    "/Awards Janhit/1000009621.jpg",
    "/Awards Janhit/1000009622.jpg",
    "/Awards Janhit/1000009623.jpg",
    "/Awards Janhit/1000009624.jpg",
    "/Awards Janhit/1000009625.jpg",
    "/Awards Janhit/1000009626.jpg"
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            🏆 Awards & Recognition
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Achievements</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the recognition and awards that acknowledge our commitment to rural development and community empowerment.
          </p>
        </div>
      </section>

      {/* Awards Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Award Collection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our collection of awards, certificates, and recognitions received over the years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awardImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Award ${index + 1}`}
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
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



      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantifying our journey of service and commitment to rural development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Recognition Journey</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Over the past 25+ years, Janhit Sanstha has been honored with numerous awards and recognitions 
                  that validate our commitment to rural development and community empowerment.
                </p>
                <p>
                  These accolades serve as motivation to continue our mission of creating sustainable change 
                  in tribal and rural communities across Maharashtra.
                </p>
                <p>
                  Each award represents not just recognition of our work, but also the trust and support 
                  of the communities we serve and the partners who believe in our vision.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What These Awards Mean</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Validation of our community-focused approach</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Recognition of innovative program design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Motivation to expand our impact</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Inspiration for future initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Award"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Awards; 