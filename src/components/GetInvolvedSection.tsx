import React from 'react';
import { Users, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GetInvolvedSection = () => {
  const navigate = useNavigate();

  const ways = [
    {
      icon: Users,
      title: "Volunteer",
      description: "Share your time, skills, and knowledge with our community programs",
      action: "Join as Volunteer",
      benefits: ["Flexible timing", "Skill development", "Community impact"]
    },
    {
      icon: Heart,
      title: "Donate",
      description: "Support our programs with one-time or recurring donations",
      action: "Make a Donation",
      benefits: ["Tax benefits", "Transparent usage", "Direct impact"]
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="text-gray-900">Get Involved & Make a </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Difference</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            We believe every contribution counts. Here's how you can support Janhit Sanstha's mission 
            to transform rural communities in Maharashtra.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {ways.map((way, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 lg:p-10 text-center hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 rounded-2xl bg-orange-500 p-4 lg:p-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <way.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{way.title}</h3>
              <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">{way.description}</p>
              
              <div className="mb-6">
                <ul className="space-y-2">
                  {way.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={() => way.title === 'Donate' ? navigate('/donate') : null}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl text-base lg:text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {way.action}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            🌟 Join hundreds of supporters making a difference in rural Maharashtra
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;