import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Sharma",
      position: "Founder & Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Leading rural development initiatives for over 15 years with expertise in community mobilization and sustainable development programs.",
      specialization: "Community Development",
      education: "PhD in Rural Development",
      experience: "15+ years"
    },
    {
      name: "Priya Patel",
      position: "Program Manager",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Specialist in women empowerment and adolescent development programs with a focus on creating sustainable impact.",
      specialization: "Women Empowerment",
      education: "Masters in Social Work",
      experience: "10+ years"
    },
    {
      name: "Amit Kumar",
      position: "Education Coordinator",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Dedicated to improving educational outcomes in rural and tribal communities through innovative teaching methods.",
      specialization: "Education & Digital Literacy",
      education: "M.Ed in Educational Technology",
      experience: "8+ years"
    },
    {
      name: "Sunita Devi",
      position: "Field Coordinator",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Grassroots worker with deep understanding of tribal community needs and local cultural dynamics.",
      specialization: "Community Outreach",
      education: "BA in Social Sciences",
      experience: "12+ years"
    },
    {
      name: "Vikash Singh",
      position: "Financial Literacy Expert",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Expert in designing financial education programs for rural populations with focus on practical implementation.",
      specialization: "Financial Education",
      education: "MBA in Finance",
      experience: "7+ years"
    },
    {
      name: "Meera Joshi",
      position: "Environmental Coordinator",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Environmental scientist working on conservation projects around Tipeshwar Wildlife Sanctuary.",
      specialization: "Environmental Conservation",
      education: "MSc in Environmental Science",
      experience: "9+ years"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            👥 Our Team
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Change Makers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of professionals and community workers are committed to 
            transforming lives in rural Maharashtra through innovative development programs.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 border border-orange-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl cursor-pointer hover:bg-white/30 transition-colors">
                        <Linkedin className="h-5 w-5 text-white" />
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl cursor-pointer hover:bg-white/30 transition-colors">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl cursor-pointer hover:bg-white/30 transition-colors">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-orange-600 font-semibold text-lg">{member.position}</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        {member.specialization}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div><strong>Education:</strong> {member.education}</div>
                      <div><strong>Experience:</strong> {member.experience}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
          <p className="text-xl text-orange-100 mb-8">
            Are you passionate about rural development? We're always looking for dedicated individuals to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all duration-300 shadow-lg">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all duration-300">
              Send Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Drives Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is united by shared values and a common commitment to rural development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-orange-50 rounded-3xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Purpose-Driven</h3>
              <p className="text-gray-600">Every team member is motivated by the desire to create meaningful change in rural communities.</p>
            </div>
            <div className="text-center p-8 bg-orange-50 rounded-3xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative</h3>
              <p className="text-gray-600">We believe in the power of teamwork and community-driven solutions.</p>
            </div>
            <div className="text-center p-8 bg-orange-50 rounded-3xl">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovative</h3>
              <p className="text-gray-600">We continuously seek creative approaches to address rural development challenges.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;