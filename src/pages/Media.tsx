import React, { useState } from 'react';

const Media = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const brochurePages = [
    "/brocher page 1.jpg",
    "/brocher page 2.jpg"
  ];

  const nextPage = () => {
    if (currentPage < brochurePages.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            📰 Media & Updates
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Stay Updated with </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Our Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest news, success stories, and updates from our community development initiatives across Maharashtra.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with our latest achievements, community stories, and program developments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Update Cards */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Jadui Gullak Launch</h3>
                <p className="text-gray-600 mb-4">Exciting launch of our innovative financial literacy program for children on January 1, 2025.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Saksharta Success</h3>
                <p className="text-gray-600 mb-4">180+ students trained in digital literacy across rural villages.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pankh Program Growth</h3>
                <p className="text-gray-600 mb-4">315+ students now benefiting from our primary education initiative.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Brochure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive brochure to learn more about Janhit Sanstha's programs and impact.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              {/* Book Container */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
                {/* Page Navigation */}
                <div className="flex justify-between items-center mb-6">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      currentPage === 0
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-orange-500 text-white hover:bg-orange-600 hover:scale-105'
                    }`}
                  >
                    ← Previous
                  </button>
                  
                  <div className="text-center">
                    <span className="text-lg font-semibold text-gray-700">
                      Page {currentPage + 1} of {brochurePages.length}
                    </span>
                  </div>
                  
                  <button
                    onClick={nextPage}
                    disabled={currentPage === brochurePages.length - 1}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      currentPage === brochurePages.length - 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-orange-500 text-white hover:bg-orange-600 hover:scale-105'
                    }`}
                  >
                    Next →
                  </button>
                </div>
                
                {/* Brochure Page */}
                <div className="relative">
                  <div 
                    className={`transition-all duration-300 ${
                      isFlipping ? 'transform rotate-y-180 opacity-0' : 'transform rotate-y-0 opacity-100'
                    }`}
                  >
                    <img 
                      src={brochurePages[currentPage]} 
                      alt={`Brochure Page ${currentPage + 1}`}
                      className="w-full h-auto rounded-lg shadow-lg"
                      style={{
                        transform: isFlipping ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        transition: 'transform 0.3s ease-in-out'
                      }}
                    />
                  </div>
                </div>
                
                {/* Page Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {brochurePages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsFlipping(true);
                        setTimeout(() => {
                          setCurrentPage(index);
                          setIsFlipping(false);
                        }, 300);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentPage === index
                          ? 'bg-orange-500 scale-125'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                      title={`Page ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media; 