import React from 'react';

const DonationSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/Jadui Gulak Img.jpg" 
                alt="Children learning" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Children's Support</h3>
                <p className="text-gray-600">Educational and nutritional support for underprivileged children.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/Pankh Replace.jpg" 
                alt="Food distribution" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Food Program</h3>
                <p className="text-gray-600">Daily meals and nutrition programs for communities in need.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-teal-800 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Contribute Today To Make A Difference</h3>
            <p className="text-gray-200 mb-6">Choose an amount to donate and help us continue our mission.</p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button className="bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                $25
              </button>
              <button className="bg-white/20 text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                $50
              </button>
              <button className="bg-white/20 text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                $100
              </button>
              <button className="bg-white/20 text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                $250
              </button>
            </div>
            
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;