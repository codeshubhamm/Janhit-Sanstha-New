import React from 'react';
import { Calendar } from 'lucide-react';

const NewsSection = () => {
  const articles = [
    {
      title: "Empowering Future Minds: 10 Ways of Digital Learning",
      date: "Dec 15, 2024",
      image: "https://images.pexels.com/photos/8101808/pexels-photo-8101808.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Education"
    },
    {
      title: "The Role of Technology in Modern Charity Work",
      date: "Dec 10, 2024",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Technology"
    },
    {
      title: "Community Volunteers Making a Difference",
      date: "Dec 5, 2024",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Community"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Updated From Our News & Insights
          </h2>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            View All Posts
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-gray-600">{article.date}</span>
                  <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{article.title}</h3>
                <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;