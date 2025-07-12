import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Sharma",
      position: "Founder & Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Leading rural development initiatives for over 15 years with expertise in community mobilization.",
      specialization: "Community Development"
    },
    {
      name: "Priya Patel",
      position: "Program Manager",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Specialist in women empowerment and adolescent development programs.",
      specialization: "Women Empowerment"
    },
    {
      name: "Amit Kumar",
      position: "Education Coordinator",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Dedicated to improving educational outcomes in rural and tribal communities.",
      specialization: "Education & Digital Literacy"
    },
    {
      name: "Sunita Devi",
      position: "Field Coordinator",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Grassroots worker with deep understanding of tribal community needs.",
      specialization: "Community Outreach"
    },
    {
      name: "Vikash Singh",
      position: "Financial Literacy Expert",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Expert in designing financial education programs for rural populations.",
      specialization: "Financial Education"
    },
    {
      name: "Meera Joshi",
      position: "Environmental Coordinator",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Environmental scientist working on conservation projects around Tipeshwar Wildlife Sanctuary.",
      specialization: "Environmental Conservation"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-white to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            👥 Our Team
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Change Makers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of professionals and community workers are committed to 
            transforming lives in rural Maharashtra through innovative development programs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg cursor-pointer hover:bg-white/30 transition-colors">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg cursor-pointer hover:bg-white/30 transition-colors">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg cursor-pointer hover:bg-white/30 transition-colors">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-semibold">{member.position}</p>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {member.specialization}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
            <p className="text-gray-600 mb-6">
              Are you passionate about rural development? We're always looking for dedicated individuals to join our mission.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;