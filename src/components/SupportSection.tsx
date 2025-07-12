import React from 'react';

const SupportSection = () => {
  return (
    <section className="bg-teal-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Support And Contribute To Their Urgent Needs
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Your contribution makes an immediate difference in the lives of those who need it most. 
              Every donation helps provide essential resources and hope for a better tomorrow.
            </p>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
              Make a Donation
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="/Digital Saksharta Img.jpg" 
              alt="Support urgent needs" 
              className="rounded-xl shadow-2xl w-full h-80 object-cover"
            />
            <div className="absolute top-4 right-4 bg-white text-teal-800 px-4 py-2 rounded-lg font-semibold">
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;