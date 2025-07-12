import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 sm:py-12 lg:py-16">
          <div className="space-y-6 lg:space-y-8 transform hover:-translate-y-2 transition-transform duration-500 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Rural</span><br />
                Communities Through<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Education</span> & Development
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                Founded in 1997, Janhit Bahuuddeshiya Gramin Vikas Sanstha has been actively working 
                in 20 tribal villages surrounding the Tipeshwar Wildlife Sanctuary, focusing on 
                adolescent development, digital education, women empowerment, and environmental conservation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <button 
                onClick={() => navigate('/donate')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Donate Now
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="border-2 border-orange-500 text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-orange-50 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative transform hover:-translate-y-3 transition-transform duration-500 order-1 lg:order-2 -mt-2 sm:-mt-4 lg:-mt-6">
            <img 
              src="/1.Main Image.jpg" 
              alt="Children in rural education program" 
              className="relative rounded-3xl shadow-2xl w-full h-auto max-h-[1400px] lg:max-h-[1600px] xl:max-h-[1800px] object-contain transition-transform duration-500"
            />
            <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-white p-3 sm:p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-lg sm:text-2xl font-bold text-orange-600">250+</div>
              <div className="text-xs sm:text-sm text-gray-600">Students in Education Program</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;