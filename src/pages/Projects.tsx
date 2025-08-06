import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "kishori-vikas",
      title: "Nirmiti",
      subtitle: "The Gang of Girls",
      description: "This initiative empowers 250+ adolescent girls through structured programs focused on education and life skills, workshops on health, hygiene, and self-defense, leadership development and decision-making skills, and career guidance and mentorship.",
      detailedDescription: "Under the 'NIRMITI… A Gang of Girls' program launched from July 1, 2024, adolescent girls from tribal and rural areas receive training in education, health, personality development, career guidance, counseling, menstrual hygiene, self-defense, and leadership. The project started in six villages and currently supports 250+ adolescent girls.",
      image: "/Kishor Vikas Img.jpg",
      beneficiaries: "250+ Girls",
      status: "Active",
      category: "Women Empowerment",
      highlights: ["Education & Life Skills", "Health & Hygiene Workshops", "Leadership Development", "Career Guidance"]
    },
    {
      id: "jadui-gullak",
      title: "Jadui Gullak - Financial Literacy",
      description: "A financial literacy program designed for children, teaching them savings habits, budget management, and financial decision-making skills.",
      detailedDescription: "Launched on January 1, 2025, this program provides guidance on financial literacy to students. Nationalized banking accounts are opened for children, spreading awareness about savings, proper use of money, and financial management. After the Jadui Gullak arrived, kids started spending less on outside snacks like chips and began saving their money. Each time they dropped a coin in, a sweet voice said, 'Well done! You saved money!' Slowly, saving became a habit. The Jadui Gullak didn't just hold money — it taught them the value of money.",
      image: "/Jadui Gulak Img.jpg",
      beneficiaries: "68+ Students",
      status: "Active",
      category: "Financial Education",
      highlights: ["Savings Habits", "Budget Management", "Banking Accounts", "Financial Planning"]
    },
    {
      id: "digital-saksharta",
      title: "Digital Saksharta Program",
      description: "A basic digital literacy program introducing students and villagers from 5 villages to essential digital tools, online transactions, and cybersecurity awareness.",
      detailedDescription: "Started from August 15, 2023, this program has trained more than 180 students from five villages. The program covers basic computer literacy and digital skills essential for modern life, bridging the digital divide in rural communities.",
      image: "/Digital Saksharta Img.jpg",
      beneficiaries: "180+ Students",
      status: "Active",
      category: "Digital Education",
      highlights: ["Computer Training", "Digital Tools", "Online Safety", "Digital Skills"]
    },
    {
      id: "pankh-sapno-ki-udaan",
      title: "Pankh",
      subtitle: "Sapno Ki Udaan",
      description: "Education initiative serving 315+ students from grades 1-5 across 15 villages with trained local women educators.",
      detailedDescription: "Operating since April 1, 2023, this project operates in 15 villages around the Tipeshwar Wildlife Sanctuary. Trained women educators appointed on honorarium basis in each village conduct daily 2-hour learning sessions for children, helping improve their academic performance and building strong connections with parents. Janhit provides educational materials and drawing supplies, which are used to conduct Anand Sabha sessions.",
      image: "/Pankh Replace.jpg",
      beneficiaries: "315+ Students",
      status: "Active",
      category: "Education",
      highlights: ["Early Childhood Education", "Women Educators", "Academic Performance", "Parent Engagement"]
    },
    {
      id: "nisarg-mitra-manch",
      title: "Nisarg Mitra Manch",
      description: "Environmental conservation platform promoting afforestation, clean-up campaigns, and biodiversity awareness.",
      detailedDescription: "This initiative focuses on environmental awareness through tree plantation, forest conservation, waste management, and environmental education campaigns. The forum conducts eco-friendly campaigns like single-use plastic ban, environmental protection activities, and has over 40 active youth members.",
      image: "/Nisarg Mitr manch.jpg",
      beneficiaries: "40+ Youth Members",
      status: "Active",
      category: "Environment",
      highlights: ["Tree Plantation", "Waste Management", "Environmental Education", "Youth Engagement"]
    },
    {
      id: "advanced-digital-literacy",
      title: "Advanced Digital Literacy Programme",
      description: "Advanced training in Coding, Tally, Web Development, Web Design, Cyber Security and other computer-related skills for rural students.",
      detailedDescription: "The organization is trying to create employment-oriented skilled youth in backward areas. Through this project, more than 75 students have been empowered and guided for future employment or entrepreneurship. This initiative is supported by Grand Maratha Foundation.",
      image: "/Digital Litracy Photo.jpg",
      beneficiaries: "75+ Students",
      status: "Active",
      category: "Advanced Technology",
      highlights: ["Coding Training", "Web Development", "Cyber Security", "Employment Skills"]
    },
    {
      id: "jan-setu",
      title: "Jan-Setu Program",
      subtitle: "Learn And Earn",
      description: "Helps rural people access government schemes, benefits, and services around the Tipeshwar Sanctuary area.",
      detailedDescription: "It facilitates the submission of government forms, information access, and application assistance at the local level. The project aims to spread awareness about government schemes and provide assistance with form filling and documentation, especially for marginalized communities. The program started on April 1, 2025.",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600",
      beneficiaries: "Rural Communities",
      status: "Upcoming",
      category: "Government Services",
      highlights: ["Government Schemes", "Form Assistance", "Documentation Help", "Community Support"]
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
                    <h2 className="text-4xl font-bold mb-3">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">{project.title}</span>
                    </h2>
                    {project.subtitle && (
                      <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                        {project.subtitle}
                      </h3>
                    )}
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
                    <button 
                      onClick={() => navigate(`/projects/${project.id}`, { state: { from: 'projects' } })}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      View Details
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
            <button 
              onClick={() => navigate('/donate')}
              className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all duration-300 shadow-lg"
            >
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