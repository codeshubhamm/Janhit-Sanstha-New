import React from 'react';
import { Award, Users } from 'lucide-react';

const TrustedOrg = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Volunteer helping" 
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              A Trusted Non-Profit Charity Organisation
            </h2>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Charity Stars</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">100% Nonprofit</span>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              We are committed to transparency, accountability, and making a real difference 
              in the lives of those we serve. Our organization has been recognized for 
              excellence in charitable work and community impact.
            </p>
            
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Over 15 years of dedicated service to communities worldwide
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Transparent financial reporting and accountability
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Direct impact on thousands of lives each year
              </li>
            </ul>
            
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedOrg;