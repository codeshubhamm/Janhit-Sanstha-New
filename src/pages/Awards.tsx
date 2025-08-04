import React from 'react';
import { Trophy, Award, Star, Medal } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Excellence in Rural Development",
      year: "2024",
      organization: "Ministry of Rural Development",
      description: "Recognized for outstanding contribution to rural community development and sustainable initiatives.",
      category: "Government Recognition"
    },
    {
      icon: Award,
      title: "Best NGO for Women Empowerment",
      year: "2023",
      organization: "Maharashtra State Women Commission",
      description: "Awarded for exceptional work in empowering rural women through education and skill development programs.",
      category: "Women Empowerment"
    },
    {
      icon: Star,
      title: "Digital Literacy Champion",
      year: "2023",
      organization: "Digital India Initiative",
      description: "Recognized for bridging the digital divide in rural areas through innovative education programs.",
      category: "Digital Innovation"
    },
    {
      icon: Medal,
      title: "Community Service Excellence",
      year: "2022",
      organization: "District Administration",
      description: "Honored for dedicated service to tribal communities and commitment to social development.",
      category: "Community Service"
    },
    {
      icon: Trophy,
      title: "Education Innovation Award",
      year: "2022",
      organization: "State Education Department",
      description: "Awarded for innovative approaches in primary education and adolescent development programs.",
      category: "Education"
    },
    {
      icon: Award,
      title: "Environmental Conservation",
      year: "2021",
      organization: "Forest Department",
      description: "Recognized for environmental awareness programs and conservation efforts in tribal areas.",
      category: "Environment"
    }
  ];

  const achievements = [
    {
      number: "25+",
      label: "Years of Service",
      description: "Dedicated to rural development"
    },
    {
      number: "50+",
      label: "Villages Served",
      description: "Across Maharashtra"
    },
    {
      number: "1000+",
      label: "Families Impacted",
      description: "Through various programs"
    },
    {
      number: "15+",
      label: "Awards Received",
      description: "For excellence in service"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            🏆 Awards & Recognition
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Achievements</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the recognition and awards that acknowledge our commitment to rural development and community empowerment.
          </p>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These accolades reflect our dedication to creating positive change in rural communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-xl">
                    <award.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {award.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-orange-600 font-semibold mb-3">{award.organization}</p>
                <p className="text-gray-600 mb-4">{award.description}</p>
                
                <div className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                  {award.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantifying our journey of service and commitment to rural development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Recognition Journey</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Over the past 25+ years, Janhit Sanstha has been honored with numerous awards and recognitions 
                  that validate our commitment to rural development and community empowerment.
                </p>
                <p>
                  These accolades serve as motivation to continue our mission of creating sustainable change 
                  in tribal and rural communities across Maharashtra.
                </p>
                <p>
                  Each award represents not just recognition of our work, but also the trust and support 
                  of the communities we serve and the partners who believe in our vision.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What These Awards Mean</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Validation of our community-focused approach</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Recognition of innovative program design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Motivation to expand our impact</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Inspiration for future initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards; 