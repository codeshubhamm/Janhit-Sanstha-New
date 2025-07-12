import React from 'react';
import { Heart, BookOpen, Home, Utensils } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Funding",
      description: "Financial support for essential programs and initiatives"
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Educational resources and learning opportunities"
    },
    {
      icon: Home,
      title: "Adoption",
      description: "Safe homes and caring families for children"
    },
    {
      icon: Utensils,
      title: "Support",
      description: "Comprehensive care and community assistance"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Helping The Poor,<br />Your Support Matters
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;