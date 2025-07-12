import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Kishori Vikas Project",
      description: "This initiative empowers 350 adolescent girls through structured programs focused on education and life skills, workshops on health, hygiene, and self-defense, leadership development and decision-making skills, and career guidance and mentorship.",
      detailedDescription: "The project's primary aim is to build confidence, independence, and informed life choices among adolescent girls in rural communities. It creates a safe and nurturing space for young girls to thrive academically and personally.",
      image: "https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=600",
      beneficiaries: "350 Girls",
      status: "Active",
      category: "Women Empowerment",
      highlights: ["Education & Life Skills", "Health & Hygiene Workshops", "Leadership Development", "Career Guidance"]
    },
    {
      title: "Jadui Gullak - Financial Literacy",
      description: "A financial literacy program designed for 100 children, teaching them savings habits, budget management, and financial decision-making skills.",
      detailedDescription: "Jadui Gullak engages children in interactive games and activities that simulate real-life financial scenarios, helping them develop practical money management skills from a young age. The program aims to build a foundation for responsible financial behavior in adulthood.",
      image: "https://images.pexels.com/photos/8101808/pexels-photo-8101808.jpeg?auto=compress&cs=tinysrgb&w=600",
      beneficiaries: "100 Children",
      status: "Active",
      category: "Financial Education",
      highlights: ["Savings Habits", "Budget Management", "Interactive Games", "Financial Planning"]
    },
    {
      title: "Digital Saksharta Program",
      description: "A basic digital literacy program introducing 230 students and villagers from 5 villages to essential digital tools, online transactions, and cybersecurity awareness.",
      detailedDescription: "Digital Saksharta bridges the digital divide by providing hands-on training in using computers, smartphones, and the internet. Participants learn about online safety, government e-services, and digital payments, empowering rural communities to participate in the digital economy.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      beneficiaries: "230 Learners",
      status: "Active",
      category: "Digital Education",
      highlights: ["Computer Training", "Digital Payments", "Online Safety", "E-Government Services"]
    },
    {
      title: "Pankh Sapno Ki Udaan",
      description: "Education initiative serving 450 students from grades 1-5 across 16 villages with trained local women educators.",
      detailedDescription: "This education-focused program provides daily learning sessions conducted by trained local women educators. It strengthens early childhood education, empowers women educators in rural areas, enhances academic performance, and integrates extracurricular activities and life skills.",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
      beneficiaries: "450 Students",
      status: "Active",
      category: "Education",
      highlights: ["Early Childhood Education", "Women Educators", "Academic Performance", "Life Skills"]
    },
    {
      title: "Nisarg Mitra Manch",
      description: "Environmental conservation platform promoting afforestation, clean-up campaigns, and biodiversity awareness.",
      detailedDescription: "Nisarg Mitra Manch encourages environmental conservation through afforestation drives, clean-up campaigns, biodiversity awareness sessions, and sustainable livelihood education. The platform promotes community participation in preserving natural resources around the Tipeshwar Wildlife Sanctuary.",
      image: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=600",
      beneficiaries: "16 Villages",
      status: "Active",
      category: "Environment",
      highlights: ["Afforestation Drives", "Clean-up Campaigns", "Biodiversity Awareness", "Sustainable Livelihoods"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            🚀 Our Active Projects
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Transforming Lives Through </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Action</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive projects address key areas of development in tribal communities, 
            from education and digital literacy to women empowerment and environmental conservation.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="relative rounded-3xl shadow-2xl w-full h-96 object-cover transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute top-6 right-6">
                      <span className="bg-white/90 backdrop-blur-sm text-orange-600 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                        <div className="text-orange-600 font-semibold">{project.beneficiaries}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h2 className="text-4xl font-bold mb-6">
                      <span className="text-gray-900">{project.title.split(' ').slice(0, -1).join(' ')} </span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">{project.title.split(' ').slice(-1)[0]}</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.detailedDescription}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Key Highlights:</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Support This Project
                    </button>
                    <button className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join us in transforming more lives across rural Maharashtra through our impactful projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all duration-300 shadow-lg">
              Support Our Projects
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all duration-300">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;