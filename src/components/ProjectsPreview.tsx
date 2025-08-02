import React from 'react';

import { useNavigate } from 'react-router-dom';

const ProjectsPreview = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "kishori-vikas",
      title: "Kishori Vikas Project",
      description: "This initiative empowers 250 adolescent girls through education, skill development, and awareness programs to enhance their confidence and decision-making abilities.",
      detailedDescription: "Under the 'NIRMITI… A Gang of Girls' program launched from July 1, 2024, adolescent girls from tribal and rural areas receive training in education, health, personality development, career guidance, counseling, menstrual hygiene, self-defense, and leadership.",
      image: "/Kishor Vikas Img.jpg",
      beneficiaries: "250 Girls",
      status: "Active",
      category: "Women Empowerment"
    },
    {
      id: "jadui-gullak",
      title: "Jadui Gullak - Financial Literacy",
      description: "A financial literacy program designed for children, teaching them savings habits, budget management, and financial decision-making skills.",
      detailedDescription: "Launched from January 1, 2024, this program provides guidance on financial literacy to students. Nationalized banking accounts are opened for children, spreading awareness about savings, proper use of money, and financial management. So far, 30 students have opened 'Jadui Gullak' accounts.",
      image: "/Jadui Gulak Img.jpg",
      beneficiaries: "385 Students (Target)",
      status: "Active",
      category: "Financial Education"
    },
    {
      id: "digital-saksharta",
      title: "Digital Saksharta Program",
      description: "A basic digital literacy program that introduces students and villagers to essential digital tools, online transactions, and cybersecurity awareness.",
      detailedDescription: "Started from August 15, 2023, this program has trained more than 150 students from five villages. The program covers basic computer literacy and digital skills essential for modern life.",
      image: "/Digital Saksharta Img.jpg",
      beneficiaries: "150+ Students",
      status: "Active",
      category: "Digital Education"
    },
    {
      id: "pankh-sapno-ki-udaan",
      title: "Pankh Sapno Ki Udaan",
      description: "Educational initiative serving 450 students from grades 1-5 across 16 villages with trained local women educators.",
      detailedDescription: "Operating since April 1, 2023, this project operates in 16 villages around the Tipeshwar Wildlife Sanctuary. Trained women educators appointed on honorarium basis in each village conduct daily 2-hour learning sessions for children, helping improve their academic performance and building strong connections with parents.",
      image: "/Pankh Img 1.jpg",
      beneficiaries: "450 Students",
      status: "Active",
      category: "Education"
    },
    {
      id: "nisarg-mitra-manch",
      title: "Nisarg Mitra Manch",
      description: "A platform for environmental conservation activities, including afforestation drives, biodiversity awareness, and sustainable livelihood practices.",
      detailedDescription: "This initiative focuses on environmental awareness through tree plantation, forest conservation, waste management, and environmental education campaigns. The forum conducts eco-friendly campaigns like single-use plastic ban, environmental protection activities, and has over 80 active youth members.",
      image: "/Nisarg Mitr Manch .jpg",
      beneficiaries: "80+ Youth Members",
      status: "Active",
      category: "Environment"
    },
    {
      id: "advanced-digital-literacy",
      title: "Advanced Digital Literacy Programme",
      description: "In rural areas, students are given advanced training in Coding, Tally, Web Development, Web Design, Cyber Security and other computer-related skills.",
      detailedDescription: "The organization is trying to create employment-oriented skilled youth in backward areas. Through this project, more than 90 students have been empowered and guided for future employment or entrepreneurship. This initiative is supported by Grand Maratha Foundation.",
      image: "/Digital Saksharta Img.jpg",
      beneficiaries: "90+ Students",
      status: "Active",
      category: "Advanced Technology"
    },
    {
      id: "jan-setu",
      title: "Jan-Setu Program",
      description: "The Jan-Setu program helps rural people in the areas surrounding the Tipeshwar Sanctuary to access government schemes, benefits, and services.",
      detailedDescription: "It facilitates the submission of government forms, information access, and application assistance at the local level. The project aims to spread awareness about government schemes and provide assistance with form filling and documentation, especially for marginalized communities. The program started on April 1, 2025.",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600",
      beneficiaries: "Rural Communities",
      status: "Upcoming",
      category: "Government Services"
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
                
                <button 
                  onClick={() => navigate(`/projects/${project.id}`, { state: { from: 'home' } })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            🌟 Join us in making a difference in rural Maharashtra
          </p>
          <button 
            onClick={() => navigate('/donate')}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Support Our Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;