import React from 'react';
import { TrendingUp, Users, BookOpen, Heart, Award, Target, Monitor } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      number: "250+",
      label: "Students Education",
      projectName: "Nirmiti",
      highlightedText: "The Gang of Girls",
      description: "(Adolescent Girls Holistic Development)",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      number: "315+",
      label: "Students in Primary Education",
      projectName: "Pankh",
      description: "Sapno Ki Udaan program",
      icon: Heart,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      number: "180+",
      label: "Digital Learners",
      projectName: "Foundational Digital Literacy",
      description: "Program In Rural Areas",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      number: "68+",
      label: "Financial Literacy",
      projectName: "Jadui Gullak",
      description: "In Rural Areas",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      number: "75+",
      label: "Advanced Digital Literacy Learners",
      projectName: "Digital Literacy",
      description: "Program",
      icon: Monitor,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
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
            For more than two decades, Janhit has consistently delivered impactful programs, 
            creating sustainable change through grassroots action in tribal and rural communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} ${stat.borderColor} border-2 rounded-2xl p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-300 group hover:-translate-y-1`}>
              <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 ${stat.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} mb-2 sm:mb-3`}>
                {stat.number}
              </div>
              <div className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                {stat.label}
              </div>
              <div className={`text-lg sm:text-xl font-bold ${stat.color} mb-2`}>
                {stat.projectName}
              </div>
              {stat.highlightedText && (
                <div className={`text-sm font-semibold ${stat.color} mb-1`}>
                  {stat.highlightedText}
                </div>
              )}
              <div className="text-xs sm:text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 inline-block">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Ready to Amplify Our Impact?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Join us in reaching even more communities and creating lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg">
                Support Our Mission
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-xl font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-300">
                View Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;