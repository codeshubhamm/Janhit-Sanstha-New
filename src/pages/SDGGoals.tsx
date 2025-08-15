import React from 'react';
import { ArrowRight } from 'lucide-react';

const SDGGoals = () => {
  const sdgGoals = [
    {
      number: 1,
      title: "No Poverty",
      description: "End poverty in all its forms everywhere",
      image: "/SDG GOALS IMAGES/SDG GOAL 1.png",
      color: "from-red-500 to-red-600",
      janhitContribution: "Providing skill development and livelihood opportunities in rural areas"
    },
    {
      number: 2,
      title: "Zero Hunger",
      description: "End hunger, achieve food security and improved nutrition",
      image: "/SDG GOALS IMAGES/SGD GOAL 2.png",
      color: "from-green-500 to-green-600",
      janhitContribution: "Promoting sustainable agriculture and food security programs"
    },
    {
      number: 3,
      title: "Good Health and Well-being",
      description: "Ensure healthy lives and promote well-being for all",
      image: "/SDG GOALS IMAGES/SDG GOAL 3.png",
      color: "from-blue-500 to-blue-600",
      janhitContribution: "Health awareness and hygiene programs for women and children"
    },
    {
      number: 4,
      title: "Quality Education",
      description: "Ensure inclusive and equitable quality education",
      image: "/SDG GOALS IMAGES/SDG GOAL 4.png",
      color: "from-purple-500 to-purple-600",
      janhitContribution: "Educational programs like Pankh, Digital Literacy, and Kishori Vikas"
    },
    {
      number: 5,
      title: "Gender Equality",
      description: "Achieve gender equality and empower all women and girls",
      image: "/SDG GOALS IMAGES/SDG GOAL 5.png",
      color: "from-pink-500 to-pink-600",
      janhitContribution: "Nirmiti program empowering adolescent girls and women"
    },
    {
      number: 6,
      title: "Clean Water and Sanitation",
      description: "Ensure availability and sustainable management of water",
      image: "/SDG GOALS IMAGES/SDG GOAL 6.png",
      color: "from-cyan-500 to-cyan-600",
      janhitContribution: "Environmental conservation and water management awareness"
    },
    {
      number: 7,
      title: "Affordable and Clean Energy",
      description: "Ensure access to affordable, reliable energy",
      image: "/SDG GOALS IMAGES/SDG GOAL 7.png",
      color: "from-yellow-500 to-yellow-600",
      janhitContribution: "Promoting sustainable energy practices in rural areas"
    },
    {
      number: 13,
      title: "Climate Action",
      description: "Take urgent action to combat climate change",
      image: "/SDG GOALS IMAGES/SDG GOAL 13.png",
      color: "from-emerald-500 to-emerald-600",
      janhitContribution: "Nisarg Mitra Manch environmental conservation programs"
    },
    {
      number: 15,
      title: "Life on Land",
      description: "Protect, restore and promote sustainable use of ecosystems",
      image: "/SDG GOALS IMAGES/SGD GOAL 15.png",
      color: "from-green-600 to-green-700",
      janhitContribution: "Forest conservation and biodiversity awareness"
    },
    {
      number: 16,
      title: "Peace, Justice and Strong Institutions",
      description: "Promote peaceful and inclusive societies",
      image: "/SDG GOALS IMAGES/SDG GOAL 16.png",
      color: "from-blue-600 to-blue-700",
      janhitContribution: "Community harmony and governance awareness"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-6 py-3 rounded-full text-sm font-medium shadow-lg">
              🌍 Sustainable Development Goals
            </div>
          </div>
        </div>
      </section>

      {/* SDG Goals Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Janhit Sanstha – Driving progress across key UN Sustainable Development Goals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each goal represents a critical challenge facing humanity, and together they form a blueprint for a sustainable future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sdgGoals.map((goal, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img 
                    src={goal.image} 
                    alt={goal.title}
                    className="mx-auto w-40 h-40 object-contain"
                  />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{goal.title}</h3>
                  <p className="text-base text-gray-600 mb-4">{goal.description}</p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-2xl">
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-orange-800 font-medium text-left">
                      <span className="font-semibold">Janhit's Contribution:</span> {goal.janhitContribution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Contribute */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">How Janhit Contributes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs and initiatives directly support multiple SDGs, creating a comprehensive impact on rural development
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🌱 Environmental Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Through Nisarg Mitra Manch, we address SDGs 13, 14, and 15 by promoting environmental conservation, 
                  tree plantation, and biodiversity awareness in rural communities.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎓 Educational Empowerment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our Pankh, Digital Literacy, and Kishori Vikas programs directly support SDG 4 (Quality Education) 
                  and SDG 5 (Gender Equality) by providing inclusive education opportunities.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-orange-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💪 Community Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Programs like Jadui Gullak and Jan-Setu address SDGs 1, 8, and 10 by promoting financial literacy, 
                  economic growth, and reducing inequalities in rural areas.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🤝 Partnerships</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our collaborations with government agencies, NGOs, and communities exemplify SDG 17, 
                  creating strong partnerships for sustainable development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Us in Achieving the SDGs</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Every action counts towards achieving these global goals. Support our work and be part of the solution 
            for a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Support Our Work
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Learn More About Our Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SDGGoals;
