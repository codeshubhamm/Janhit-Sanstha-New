import React from 'react';
import { Target, Eye } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
              🏢 About Our Organization
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Dedicated to </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Rural Development</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Janhit Bahuuddeshiya Gramin Vikas Sanstha is a non-profit organization working 
              actively in 16 tribal villages surrounding the Tipeshwar Wildlife Sanctuary in Maharashtra, India.
            </p>
            
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    To uplift rural and tribal communities through holistic development initiatives 
                    focused on education, digital empowerment, women development, financial literacy, 
                    sustainable agriculture, and environmental conservation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Eye className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    We envision a world where every individual—regardless of their background—has 
                    access to basic necessities, education, and opportunities for personal and community growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <img 
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Rural development work" 
              className="relative rounded-3xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;