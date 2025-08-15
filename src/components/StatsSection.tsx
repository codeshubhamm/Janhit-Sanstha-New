import React from 'react';
import { Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      number: "250+",
      label: "Students Education",
      projectName: "Nirmiti",
      highlightedText: "The Gang of Girls",
      description: "(Adolescent Girls Holistic Development)",
      logo: "/Project Logos/Nirmiti.png",
      color: "text-blue-600"
    },
    {
      number: "315+",
      label: "Students in Primary Education",
      projectName: "Pankh",
      description: "Sapno Ki Udaan program",
      logo: "/Project Logos/PANKH.png",
      color: "text-pink-600"
    },
    {
      number: "180+",
      label: "Digital Learners",
      projectName: "Foundational Digital Literacy",
      description: "Program In Rural Areas",
      logo: "/Project Logos/Foundational Digital Literacy.png",
      color: "text-green-600"
    },
    {
      number: "68+",
      label: "Financial Literacy",
      projectName: "Jadui Gullak",
      description: "In Rural Areas",
      logo: "/Project Logos/Jadui Gullak (2).png",
      color: "text-orange-600"
    },
    {
      number: "75+",
      label: "Advanced Digital Literacy Learners",
      projectName: "Digital Literacy",
      description: "Program",
      logo: "/Project Logos/Digital Literacy.png",
      color: "text-purple-600"
    },
    {
      number: "25+",
      label: "Students Supported",
      projectName: "Be The Change",
      description: "Free Library Initiative",
      logo: "/Project Logos/BE THE CHANGE.png",
      color: "text-indigo-600"
    },
    {
      number: "30+",
      label: "Rural Communities",
      projectName: "Jan-Setu",
      description: "Learn And Earn Program",
      logo: "/Project Logos/JANSETU.png",
      color: "text-teal-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-white shadow-md border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Award className="w-5 h-5 mr-2 text-orange-500" />
            Our Impact in Numbers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Transforming Lives
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            For more than two decades, Janhit has consistently delivered impactful programs in over 100 villages, creating sustainable change through grassroots action.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center flex-shrink-0 border-2 border-gray-200 rounded-xl p-4 sm:p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-3 sm:mb-4">
                <img 
                  src={stat.logo} 
                  alt={stat.projectName}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto object-contain"
                />
              </div>
              <div className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold ${stat.color} mb-1 sm:mb-2 lg:mb-3`}>
                {stat.number}
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                {stat.label}
              </div>
              <div className={`text-base sm:text-lg lg:text-xl font-bold ${stat.color} mb-1 sm:mb-2`}>
                {stat.projectName}
              </div>
              {stat.highlightedText && (
                <div className={`text-xs sm:text-sm font-semibold ${stat.color} mb-1`}>
                  {stat.highlightedText}
                </div>
              )}
              <div className="text-xs sm:text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default StatsSection;