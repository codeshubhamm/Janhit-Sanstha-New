import React from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-orange-500 p-4 rounded-2xl">
            <Mail className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Stay Connected with Our Mission
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8">
          Get updates on our projects, success stories, and ways to make a difference in rural Maharashtra.
        </p>
        
        <div className="flex flex-col sm:flex-row max-w-md mx-auto bg-white rounded-2xl p-2 gap-2 sm:gap-0">
          <input 
            type="email" 
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 bg-transparent border-0 focus:ring-0 focus:outline-none text-gray-900 placeholder-gray-500 text-sm sm:text-base"
          />
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 sm:px-6 py-3 rounded-xl text-sm sm:text-base font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 whitespace-nowrap">
            Subscribe
          </button>
        </div>
        
        <p className="text-sm text-gray-400 mt-4">
          Join 500+ supporters who receive our monthly updates. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;