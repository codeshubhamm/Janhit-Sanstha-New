import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Users, Calendar, MapPin, Target, CheckCircle } from 'lucide-react';
import VolunteerForm from '../components/VolunteerForm';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isVolunteerFormOpen, setIsVolunteerFormOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Check if user came from homepage
  const isFromHome = location.state?.from === 'home';

  const projectsData = {
    "kishori-vikas": {
      title: "Nirmiti",
      subtitle: "The Gang of Girls",
      description: "This initiative empowers 250 adolescent girls through education, skill development, and awareness programs to enhance their confidence and decision-making abilities.",
      fullDescription: "Under the 'NIRMITI… A Gang of Girls' program launched from July 1, 2024, adolescent girls from tribal and rural areas receive comprehensive training in education, health, personality development, career guidance, counseling, menstrual hygiene, self-defense, and leadership. The project started in six villages and currently supports 250 adolescent girls. The organization plans to expand this project to the remaining 14 villages.",
      image: "/Kishor Vikas Img.jpg",
      beneficiaries: "250 Girls",
      startDate: "July 1, 2024",
      location: "6 Villages (expanding to 14 more)",
      status: "Active",
      category: "Women Empowerment",
      objectives: [
        "Build confidence, leadership, and decision-making abilities among girls",
        "Create awareness on issues like early marriage and higher education",
        "Provide training in health, hygiene, and self-defense",
        "Offer career guidance and counseling sessions",
        "Develop personality and leadership skills"
      ],
      activities: [
        "Education and skill development workshops",
        "Health and hygiene awareness sessions",
        "Menstrual hygiene management training",
        "Self-defense training programs",
        "Career guidance and counseling",
        "Leadership development activities",
        "Personality development sessions"
      ],
      impact: [
        "250 adolescent girls currently enrolled",
        "6 villages covered with plans to expand to 14 more",
        "Increased awareness about health and hygiene",
        "Enhanced confidence and decision-making abilities",
        "Reduced early marriage cases in target areas"
      ]
    },
    "jadui-gullak": {
      title: "Jadui Gullak",
      subtitle: "Financial Literacy Program",
      description: "A financial literacy program designed for children, teaching them savings habits, budget management, and financial decision-making skills.",
      fullDescription: "Launched on January 1, 2025, this innovative program provides guidance on financial literacy to students. The program includes opening nationalized banking accounts for children and spreading awareness about savings, proper use of money, and financial management. After the Jadui Gullak arrived, kids started spending less on outside snacks like chips and began saving their money. Each time they dropped a coin in, a sweet voice said, 'Well done! You saved money!' Slowly, saving became a habit. The Jadui Gullak didn't just hold money — it taught them the value of money.",
      image: "/Jadui Gulak Img.jpg",
      beneficiaries: "68+ Students",
      startDate: "January 1, 2025",
      location: "Sunna Village and surrounding areas",
      status: "Active",
      category: "Financial Education",
      objectives: [
        "Instill financial awareness among students",
        "Teach importance of saving money",
        "Provide guidance on proper use of money",
        "Develop financial management skills",
        "Create banking habits from early age"
      ],
      activities: [
        "Financial literacy workshops",
        "Opening of nationalized banking accounts",
        "Savings habit development programs",
        "Money management training",
        "Interactive financial education sessions",
        "Practical banking experience",
        "Financial planning guidance"
      ],
      impact: [
        "68+ students have opened 'Jadui Gullak' accounts",
        "Kids started spending less on outside snacks like chips",
        "Development of saving habits among children",
        "Increased awareness about the value of money",
        "Enhanced understanding of banking systems",
        "Positive reinforcement through voice feedback"
      ]
    },
    "digital-saksharta": {
      title: "Digital Literacy Program",
      description: "A basic digital literacy program introducing students and villagers from 5 villages to essential digital tools, online transactions, and cybersecurity awareness.",
      fullDescription: "Started from August 15, 2023, this program has trained more than 180 students from five villages. The program covers basic computer literacy and digital skills essential for modern life, bridging the digital divide in rural communities.",
      image: "/Digital Saksharta Img.jpg",
      beneficiaries: "180+ Students",
      startDate: "August 15, 2023",
      location: "5 Villages",
      status: "Active",
      category: "Digital Education",
      objectives: [
        "Provide digital literacy to rural students and villagers",
        "Promote safe online practices",
        "Bridge the digital divide in rural communities",
        "Empower participants with essential digital skills"
      ],
      activities: [
        "Basic computer training",
        "Workshops on online transactions",
        "Cybersecurity awareness sessions",
        "Practical digital skills exercises"
      ],
      impact: [
        "Increased digital literacy in 5 villages",
        "Safer online practices",
        "Greater access to digital resources",
        "Empowered rural youth and adults"
      ]
    },
    "pankh-sapno-ki-udaan": {
      title: "Pankh",
      subtitle: "Sapno Ki Udaan",
      description: "Educational initiative serving 315+ students from grades 1-5 across 15 villages with trained local women educators.",
      fullDescription: "Operating since April 1, 2023, this project operates in 15 villages around the Tipeshwar Wildlife Sanctuary. Trained women educators appointed on honorarium basis in each village conduct daily 2-hour learning sessions for children, helping improve their academic performance and building strong connections with parents. Janhit provides educational materials and drawing supplies, which are used to conduct Anand Sabha sessions. The project has successfully built a strong connection with the parents of 315+ students, fostering a community-driven approach to education.",
      image: "/Pankh Replace.jpg",
      beneficiaries: "315+ Students",
      startDate: "April 1, 2023",
      location: "15 Villages around Tipeshwar Wildlife Sanctuary",
      status: "Active",
      category: "Education",
      objectives: [
        "Enhance educational standards of children in rural areas",
        "Provide better learning opportunities",
        "Strengthen early childhood education",
        "Empower women educators in rural areas",
        "Build strong parent-community connections"
      ],
      activities: [
        "Daily 2-hour learning sessions",
        "Training of women educators",
        "Academic performance monitoring",
        "Parent engagement programs",
        "Educational material distribution",
        "Learning center operations",
        "Community education awareness"
      ],
      impact: [
        "450 students benefiting from the program",
        "16 villages covered with learning centers",
        "Improved academic performance of children",
        "Strong parent-educator connections established",
        "Enhanced educational opportunities in rural areas"
      ]
    },
    "nisarg-mitra-manch": {
      title: "Nisarg Mitra Manch",
      subtitle: "Environmental Conservation Platform",
      description: "A platform for environmental conservation activities, including afforestation drives, biodiversity awareness, and sustainable livelihood practices.",
      fullDescription: "This initiative focuses on environmental awareness through comprehensive programs including tree plantation, forest conservation, waste management, and environmental education campaigns. The forum conducts eco-friendly campaigns like single-use plastic ban, alternatives to plastic, environmental protection slogans, drawing competitions, street plays, and rallies. Currently, the forum has over 40 active youth members committed to environmental protection.",
      image: "/Nisarg Mitr manch.jpg",
      additionalImages: [
        "/Nisarg mitr manch photo 2.jpg"
      ],
      beneficiaries: "40+ Youth Members",
      startDate: "Ongoing",
      location: "Multiple Villages",
      status: "Active",
      category: "Environment",
      objectives: [
        "Promote environmental conservation awareness",
        "Conduct afforestation and reforestation drives",
        "Implement waste management programs",
        "Create biodiversity awareness",
        "Develop sustainable livelihood practices"
      ],
      activities: [
        "Tree plantation drives",
        "Forest conservation programs",
        "Waste management campaigns",
        "Environmental education sessions",
        "Single-use plastic ban campaigns",
        "Environmental protection rallies",
        "Drawing competitions and street plays",
        "Eco-friendly awareness programs"
      ],
      impact: [
        "40+ active youth members engaged",
        "Multiple tree plantation drives conducted",
        "Increased environmental awareness in communities",
        "Reduced plastic usage in target areas",
        "Enhanced forest conservation efforts"
      ]
    },
    "advanced-digital-literacy": {
      title: "Advanced Digital Literacy Programme",
      subtitle: "Employment-Oriented Skill Development",
      description: "Advanced training in Coding, Tally, Web Development, Web Design, Cyber Security and other computer-related skills for rural students.",
      fullDescription: "In rural areas, students are given advanced training in Coding, Tally, Web Development, Web Design, Cyber Security and other computer-related skills. The organization is trying to create employment-oriented skilled youth in backward areas. Through this project, more than 90 students have been empowered and guided for future employment or entrepreneurship. This initiative is supported by Grand Maratha Foundation.",
      image: "/Digital Litracy Photo.jpg",
      beneficiaries: "90+ Students",
      startDate: "Ongoing",
      location: "Rural Areas",
      status: "Active",
      category: "Advanced Technology",
      objectives: [
        "Create employment-oriented skilled youth",
        "Provide advanced digital technology training",
        "Guide students for future employment",
        "Promote entrepreneurship in rural areas",
        "Bridge the technology gap in backward areas"
      ],
      activities: [
        "Coding and programming training",
        "Tally software training",
        "Web development courses",
        "Web design workshops",
        "Cyber security training",
        "Employment guidance sessions",
        "Entrepreneurship development programs"
      ],
      impact: [
        "90+ students empowered with advanced skills",
        "Enhanced employment opportunities",
        "Increased entrepreneurship in rural areas",
        "Better integration with technology sector",
        "Improved economic prospects for youth"
      ]
    },
    "jan-setu": {
      title: "Jan-Setu Program",
      subtitle: "Learn And Earn",
      description: "The Jan-Setu program helps rural people in the areas surrounding the Tipeshwar Sanctuary to access government schemes, benefits, and services.",
      fullDescription: "The Jan-Setu program helps rural people in the areas surrounding the Tipeshwar Sanctuary to access government schemes, benefits, and services. It facilitates the submission of government forms, information access, and application assistance at the local level. The project aims to spread awareness about government schemes and provide assistance with form filling and documentation, especially for marginalized communities. The program started on April 1, 2025.",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800",
      beneficiaries: "Rural Communities",
      startDate: "April 1, 2025",
      location: "Areas surrounding Tipeshwar Sanctuary",
      status: "Upcoming",
      category: "Government Services",
      objectives: [
        "Facilitate access to government schemes",
        "Provide form filling assistance",
        "Spread awareness about government benefits",
        "Support marginalized communities",
        "Bridge the gap between government and citizens"
      ],
      activities: [
        "Government scheme awareness sessions",
        "Form filling and documentation assistance",
        "Information access facilitation",
        "Application submission support",
        "Community outreach programs",
        "Documentation guidance",
        "Benefit enrollment assistance"
      ],
      impact: [
        "Enhanced access to government services",
        "Increased awareness about schemes",
        "Improved documentation for rural communities",
        "Better utilization of government benefits",
        "Strengthened government-citizen connection"
      ]
    },
    "be-the-change": {
      title: "Be the Change",
      subtitle: "Free Library Initiative",
      description: "In many rural communities, a lack of resources and high costs can make it difficult for students to achieve their academic dreams. At Be the Change, we are dedicated to bridging this educational gap. Our free library provides a welcoming space where rural students can access essential resources, receive personalized guidance, and build a foundation for a successful future. We are committed to removing financial barriers and empowering you to reach your full potential.",
      fullDescription: "Be the Change is a collaborative project with Need Sanstha to create a free library in Pandharkawda for students. The library offers a quiet study space, access to books, reference materials, and digital resources. It is designed to help rural students overcome financial and resource barriers, receive personalized guidance, and build a strong foundation for their academic and personal growth. By fostering a culture of reading and learning, the project empowers students to pursue their dreams and achieve success.",
      image: "/Be the change image .jpg",
      beneficiaries: "",
      startDate: "January 2025",
      location: "Pandharkawda, Maharashtra",
      status: "Active",
      category: "Education & Community",
      objectives: [
        "Provide free access to educational resources",
        "Create a conducive learning environment",
        "Support students' academic development",
        "Bridge educational gaps in the community",
        "Foster a culture of reading and learning"
      ],
      activities: [
        "Library management and organization",
        "Book collection and cataloging",
        "Study space provision",
        "Reading programs and workshops",
        "Academic support sessions",
        "Community outreach programs",
        "Digital resource access"
      ],
      impact: [
        "Increased access to educational materials",
        "Improved study environment for students",
        "Enhanced community learning opportunities",
        "Strengthened partnership with Need Sanstha",
        "Promoted literacy and education in Pandharkawda"
      ]
    }
  };

  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                      <button 
              onClick={() => navigate(isFromHome ? '/' : '/projects')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              {isFromHome ? 'Back to Home' : 'Back to Projects'}
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate(isFromHome ? '/' : '/projects')}
            className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>{isFromHome ? 'Back to Home' : 'Back to Projects'}</span>
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                  {project.category}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                  {project.title}
                </h1>
                {project.subtitle && (
                  <h2 className="text-xl sm:text-2xl text-orange-600 font-semibold">
                    {project.subtitle}
                  </h2>
                )}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-orange-500" />
                  <div>
                    <div className="text-sm text-gray-600">Beneficiaries</div>
                    <div className="font-semibold text-gray-900">{project.beneficiaries}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  <div>
                    <div className="text-sm text-gray-600">Start Date</div>
                    <div className="font-semibold text-gray-900">{project.startDate}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <div>
                    <div className="text-sm text-gray-600">Location</div>
                    <div className="font-semibold text-gray-900">{project.location}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-orange-500" />
                  <div>
                    <div className="text-sm text-gray-600">Status</div>
                    <div className={`font-semibold ${project.status === 'Active' ? 'text-green-600' : 'text-blue-600'}`}>{project.status}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>

            {/* Additional Project Photos */}
            {(project as any).additionalImages && (project as any).additionalImages.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(project as any).additionalImages.map((imageSrc: string, index: number) => (
                    <div key={index} className="relative">
                      <img 
                        src={imageSrc} 
                        alt={`${project.title} - Photo ${index + 1}`}
                        className="rounded-2xl shadow-lg w-full h-64 object-cover hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About the Project */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Project</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Objectives */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Objectives</h2>
                <div className="space-y-4">
                  {project.objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Activities</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.activities.map((activity, index) => (
                    <div key={index} className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-gray-700">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Impact */}
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl shadow-lg border border-orange-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Impact</h3>
                <div className="space-y-4">
                  {project.impact.map((impact, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-sm">{impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support This Project */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4">Support This Project</h3>
                <p className="text-orange-100 mb-6">
                  Your contribution can help us expand this project and reach more beneficiaries.
                </p>
                <button 
                  onClick={() => navigate('/donate')}
                  className="w-full bg-white text-orange-600 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
                >
                  Donate Now
                </button>
              </div>

              {/* Get Involved */}
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h3>
                <p className="text-gray-600 mb-6">
                  Join us as a volunteer and make a direct impact in rural communities.
                </p>
                <button 
                  onClick={() => setIsVolunteerFormOpen(true)}
                  className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                >
                  Become a Volunteer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join us in transforming more lives through our impactful projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/donate')}
              className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all duration-300 shadow-lg"
            >
              Support Our Work
            </button>
            <button 
              onClick={() => navigate(isFromHome ? '/' : '/projects')}
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              {isFromHome ? 'Back to Home' : 'View All Projects'}
            </button>
          </div>
        </div>
      </section>
      
      {/* Volunteer Form Modal */}
      <VolunteerForm 
        isOpen={isVolunteerFormOpen} 
        onClose={() => setIsVolunteerFormOpen(false)} 
      />
    </div>
  );
};

export default ProjectDetail;