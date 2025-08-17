import React, { useState } from 'react';

const Media = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<{ [key: string]: boolean }>({
    nisargMitraManch: false,
    covidPandemic: false
  });

  const brochurePages = [
    "/brocher page 1.jpg",
    "/brocher page 2.jpg"
  ];

  const newsCuttings = [
    "/News Cuttings/IMG-20250816-WA0011.jpg",
    "/News Cuttings/IMG-20250816-WA0012.jpg",
    "/News Cuttings/IMG-20250816-WA0013.jpg",
    "/News Cuttings/IMG-20250816-WA0010.jpg",
    "/News Cuttings/IMG-20250816-WA0009.jpg",
    "/News Cuttings/IMG-20250816-WA0008.jpg"
  ];

  const nisargMitraManchCuttings = [
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0068.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0069.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0066.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0067.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0065.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0064.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0063.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0062.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0061.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0060.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0059.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0058.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0057.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0056.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0055.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0054.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0052.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0053.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0051.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0050.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0049.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0047.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0046.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0045.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0044.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0043.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0042.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0040.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0041.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0039.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0038.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0037.jpg",
    "/NISARG MITRA MANCH News Cutouts/IMG-20250816-WA0036.jpg"
  ];

  const covidPandemicCuttings = [
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0098.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0097.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0096.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0095.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0094.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0093.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0092.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0091.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0090.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0089.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0088.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0087.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0085.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0086.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0084.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0082.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0083.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0081.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0071.jpg",
    "/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0070.jpg"
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

  const openImagePreview = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
  };

  const toggleFolder = (folderKey: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderKey]: !prev[folderKey]
    }));
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

      {/* Nisarg Mitra Manch Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nisarg Mitra Manch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated wing leading environmental conservators, community development, and pandemic response initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Environmental Conservation */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  🌱
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Environmental Conservators</h3>
                <p className="text-gray-600 mb-4 text-center">Leading tree plantation drives, water conservation projects, and sustainable farming initiatives across rural Maharashtra.</p>
                <div className="text-center">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Active Projects: 15+
                  </span>
                </div>
              </div>
            </div>
            
            {/* COVID-19 Pandemic Response */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  🏥
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">COVID-19 Response</h3>
                <p className="text-gray-600 mb-4 text-center">Every pandemic initiative was led by Nisarg Mitra Manch, providing essential support, awareness campaigns, and community assistance.</p>
                <div className="text-center">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Communities Served: 50+
                  </span>
                </div>
              </div>
            </div>
            
            {/* Community Development */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  🏘️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Community Development</h3>
                <p className="text-gray-600 mb-4 text-center">Empowering rural communities through skill development, infrastructure projects, and sustainable livelihood programs.</p>
                <div className="text-center">
                  <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Villages Impacted: 25+
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Nisarg Mitra Manch Info */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  Nisarg Mitra Manch serves as the dedicated environmental and community development wing of Janhit Sanstha, 
                  working tirelessly to create sustainable change in rural Maharashtra.
                </p>
                <p className="text-gray-700">
                  From environmental conservators to pandemic response, we ensure that every initiative aligns with our 
                  commitment to community welfare and sustainable development.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-medium mb-4">
                  🌿 Nature's Friends, Community's Partners
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-3">
                    <div className="font-bold text-green-600">Environmental Projects</div>
                    <div className="text-gray-600">20+ Active</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="font-bold text-blue-600">Community Programs</div>
                    <div className="text-gray-600">15+ Running</div>
                  </div>
                </div>
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

      {/* Nisarg Mitra Manch News Paper Cutouts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nisarg Mitra Manch News Paper Cutouts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Media coverage highlighting our environmental conservation, community development, and sustainable initiatives across Maharashtra.
            </p>
          </div>
          
                     {/* Folder Header with Thumbnail - Clickable */}
           <div 
             className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
             onClick={() => toggleFolder('nisargMitraManch')}
           >
             <div className="text-center mb-4">
               <p className="text-sm text-gray-500 italic">💡 Click on the folder to view all articles</p>
             </div>
                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
               <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:space-x-6">
                 <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-2xl flex items-center justify-center mx-auto sm:mx-0">
                   <img 
                     src="/Nisarg Mitr manch.jpg" 
                     alt="Nisarg Mitra Manch"
                     className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl"
                   />
                 </div>
                 <div className="text-center sm:text-left">
                   <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">🌿 Nisarg Mitra Manch</h3>
                   <p className="text-gray-600 mb-3">Environmental Conservation & Community Development</p>
                   <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:space-x-4 text-sm text-gray-500">
                     <span>📰 {nisargMitraManchCuttings.length} News Articles</span>
                     <span>🌱 Environmental Focus</span>
                     <span>🏘️ Community Projects</span>
                   </div>
                 </div>
               </div>
               <div className="text-3xl sm:text-4xl text-gray-400 transition-transform duration-300 text-center sm:text-right">
                 {expandedFolders.nisargMitraManch ? '📂' : '📁'}
               </div>
             </div>
          </div>
          
          {/* News Cuttings Grid - Expandable */}
          {expandedFolders.nisargMitraManch && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {nisargMitraManchCuttings.map((cutting, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                      src={cutting} 
                      alt={`Nisarg Mitra Manch News Cutting ${index + 1}`}
                      className="w-full h-48 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
                      onClick={() => openImagePreview(cutting)}
                    />
                    <div className="p-4">
                      <div className="text-sm text-gray-500 mb-2">Article #{index + 1}</div>
                      <div className="text-xs text-gray-400">Click to view full size</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Covid Pandemic News Paper Cutouts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Covid Pandemic News Paper Cutouts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Media coverage documenting our comprehensive response and support during the COVID-19 pandemic crisis.
            </p>
          </div>
          
                     {/* Folder Header with Thumbnail - Clickable */}
           <div 
             className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
             onClick={() => toggleFolder('covidPandemic')}
           >
             <div className="text-center mb-4">
               <p className="text-sm text-gray-500 italic">💡 Click on the folder to view all articles</p>
             </div>
                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
               <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:space-x-6">
                 <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto sm:mx-0">
                   <img 
                     src="/CORONA PANDAMIC News Cutouts/IMG-20250816-WA0070.jpg" 
                     alt="Covid Pandemic Response"
                     className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl"
                   />
                 </div>
                 <div className="text-center sm:text-left">
                   <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">🏥 Covid Pandemic Response</h3>
                   <p className="text-gray-600 mb-3">Emergency Support & Community Assistance</p>
                   <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:space-x-4 text-sm text-gray-500">
                     <span>📰 {covidPandemicCuttings.length} News Articles</span>
                     <span>🏥 Healthcare Support</span>
                     <span>🤝 Community Aid</span>
                   </div>
                 </div>
               </div>
               <div className="text-3xl sm:text-4xl text-gray-400 transition-transform duration-300 text-center sm:text-right">
                 {expandedFolders.covidPandemic ? '📂' : '📁'}
               </div>
             </div>
          </div>
          
          {/* News Cuttings Grid - Expandable */}
          {expandedFolders.covidPandemic && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {covidPandemicCuttings.map((cutting, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                      src={cutting} 
                      alt={`Covid Pandemic News Cutting ${index + 1}`}
                      className="w-full h-48 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
                      onClick={() => openImagePreview(cutting)}
                    />
                    <div className="p-4">
                      <div className="text-sm text-gray-500 mb-2">Article #{index + 1}</div>
                      <div className="text-xs text-gray-400">Click to view full size</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* News Papers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">News Papers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore media coverage and news articles featuring Janhit Sanstha's impactful work in rural development and community empowerment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsCuttings.map((cutting, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={cutting} 
                  alt={`News Cutting ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openImagePreview(cutting)}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              📰 Our work has been featured in various newspapers and media outlets, highlighting the positive impact we're making in rural communities.
            </p>
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-medium">
              🎯 Building Trust Through Transparency
            </div>
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeImagePreview}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImagePreview}
              className="absolute -top-12 right-0 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="News Cutting Preview"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Media; 