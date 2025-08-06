import React from 'react';

const CausesSection = () => {
  const causes = [
    {
      image: "/Kishor Vikas Img.jpg",
      title: "Providing school desk to a school with 50 students",
      raised: "$2,500",
      goal: "$5,000",
      percentage: 50
    },
    {
      image: "/Pankh Replace.jpg",
      title: "Supporting Healthy School Food Programs",
      raised: "$3,200",
      goal: "$4,000",
      percentage: 80
    },
    {
      image: "/Jadui Gulak Img.jpg",
      title: "Fighting Hunger with Food Security Programs",
      raised: "$1,800",
      goal: "$3,000",
      percentage: 60
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Popular Causes</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={cause.image} 
                alt={cause.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{cause.title}</h3>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Raised: {cause.raised}</span>
                    <span>Goal: {cause.goal}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-500 h-2 rounded-full" 
                      style={{ width: `${cause.percentage}%` }}
                    ></div>
                  </div>
                </div>
                
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            🏆 Join <span className="font-semibold">100+ contributors</span> who have supported our charitable work.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            View All Causes
          </button>
        </div>
      </div>
    </section>
  );
};

export default CausesSection;