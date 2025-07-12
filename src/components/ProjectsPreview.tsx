import React from 'react';

const ProjectsPreview = () => {
  const projects = [
    {
      title: "Kishori Vikas Project",
      description: "This initiative empowers 350 adolescent girls through structured programs focused on education and life skills, workshops on health, hygiene, and self-defense, leadership development and decision-making skills, and career guidance and mentorship.",
      detailedDescription: "The project's primary aim is to build confidence, independence, and informed life choices among adolescent girls in rural communities. It creates a safe and nurturing space for young girls to thrive academically and personally.",
      image: "https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=600",
      beneficiaries: "350 Girls",
      status: "Active",
      category: "Women Empowerment"
    },
    {
      title: "Jadui Gullak - Financial Literacy",
      description: "A financial literacy program designed for 100 children, teaching them savings habits, budget management, and financial decision-making skills.",
      detailedDescription: "Jadui Gullak engages children in interactive games and activities that simulate real-life financial scenarios, helping them develop practical money management skills from a young age. The program aims to build a foundation for responsible financial behavior in adulthood.",
      image: "https://images.pexels.com/photos/8101808/pexels-photo-8101808.jpeg?auto=compress&cs=tinysrgb&w=600",
      beneficiaries: "100 Children",
      status: "Active",
      category: "Financial Education"
    },
    {
      title: "Digital Saksharta Program",
      description: "A basic digital literacy program introducing 230 students and villagers from 5 villages to essential digital tools, online transactions, and cybersecurity awareness.",
      detailedDescription: "Digital Saksharta bridges the digital divide by providing hands-on training in using computers, smartphones, and the internet. Participants learn about online safety, government e-services, and digital payments, empowering rural communities to participate in the digital economy.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      beneficiaries: "230 Learners",
      status: "Active",
      category: "Digital Education"
    },
    {
      title: "Pankh Sapno Ki Udaan",
      description: "Education initiative serving 450 students from grades 1-5 across 16 villages with trained local women educators.",
      detailedDescription: "This education-focused program provides daily learning sessions conducted by trained local women educators. It strengthens early childhood education, empowers women educators in rural areas, enhances academic performance, and integrates extracurricular activities and life skills.",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
      beneficiaries: "450 Students",
      status: "Active",
      category: "Education"
    },
    {
      title: "Nisarg Mitra Manch",
      description: "Environmental conservation platform promoting afforestation, clean-up campaigns, and biodiversity awareness.",
      detailedDescription: "Nisarg Mitra Manch encourages environmental conservation through afforestation drives, clean-up campaigns, biodiversity awareness sessions, and sustainable livelihood education. The platform promotes community participation in preserving natural resources around the Tipeshwar Wildlife Sanctuary.",
      image: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=600",
      beneficiaries: "16 Villages",
      status: "Active",
      category: "Environment"
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚀 Our Active Projects
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="text-gray-900">Transforming Lives Through </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Action</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive projects address key areas of development in tribal communities, 
            from education and digital literacy to women empowerment and environmental conservation.
          </p>
        </div>
        
        <div className="space-y-12 lg:space-y-20">
          {projects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="relative rounded-3xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className={`space-y-4 lg:space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">
                    <span className="text-gray-900">{project.title.split(' ').slice(0, -1).join(' ')} </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">{project.title.split(' ').slice(-1)[0]}</span>
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-3 lg:mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {project.detailedDescription}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{project.beneficiaries}</span>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;