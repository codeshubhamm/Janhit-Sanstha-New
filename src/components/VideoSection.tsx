import React from 'react';

const VideoSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            जनहित बहुउद्देशीय ग्रामीण विकास संस्था, तेलंगटाकळी
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the impact of our work in rural communities through this video showcase
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <video
              className="w-full h-auto"
              autoPlay
              loop
              muted
              controls
              playsInline
            >
              <source src="/जनहित संस्था ,पांढरकवडा.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange-500 rounded-full opacity-10"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-orange-500 rounded-full opacity-10"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 