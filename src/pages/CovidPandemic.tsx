import React from 'react';

const CovidPandemic = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-orange-100 text-red-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            🦠 COVID-19 Response
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Pandemic Response</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            During the challenging times of COVID-19, Janhit Sanstha stood strong with our communities, 
            providing essential support, health awareness, and relief to vulnerable families across rural Maharashtra.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our COVID-19 Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implemented comprehensive programs to support our communities during the pandemic crisis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health & Safety Awareness</h3>
              <p className="text-gray-600 mb-4">Comprehensive COVID-19 awareness campaigns reaching 50+ villages with proper hygiene practices.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Support</h3>
              <p className="text-gray-600 mb-4">Provided essential medical supplies, thermometers, and first-aid kits to rural communities.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Relief</h3>
              <p className="text-gray-600 mb-4">Distributed food packages and essential supplies to vulnerable families affected by the pandemic.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Response</h3>
              <p className="text-gray-600 mb-4">Established emergency response teams to provide immediate assistance during crisis.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CovidPandemic; 