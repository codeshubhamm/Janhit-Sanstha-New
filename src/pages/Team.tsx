import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. Ravindra Bomenwar",
      position: "Founder of Janhit Sanstha",
      bio: "Visionary leader who established Janhit Sanstha with the mission to empower rural communities through sustainable development programs.",
      specialization: "Leadership & Vision",
      education: "Social Development",
      experience: "Founder"
    },
    {
      name: "Mr. Subodh Kalpande",
      position: "President of Janhit Sanstha",
      bio: "Leading the organization with strategic vision and commitment to rural development initiatives across Maharashtra.",
      specialization: "Strategic Leadership",
      education: "BA",
      experience: "President"
    },
    {
      name: "Mr. Swapnil Bomenwar",
      position: "Secretary",
      bio: "Managing administrative operations and ensuring effective coordination of all organizational activities and programs.",
      specialization: "Administration",
      education: "BA",
      experience: "Secretary"
    },
    {
      name: "Shardha Bomenwar",
      position: "Project Coordinator of Kishori Vikas",
      bio: "Dedicated to adolescent development programs, focusing on empowering young girls through education and skill development.",
      specialization: "Adolescent Development",
      education: "MA in History, B.Ed",
      experience: "Project Coordinator"
    },
    {
      name: "Shewta Kalpande",
      position: "Project Coordinator of Pankh and Women Empowerment",
      bio: "Leading initiatives focused on women's empowerment, skill development, and creating opportunities for rural women through the Pankh program.",
      specialization: "Women Empowerment & Pankh Program",
      education: "MA in English Literature, M.Ed",
      experience: "Project Coordinator"
    },
    {
      name: "Chiranjiv Betwar",
      position: "Tutor of Tally",
      bio: "Providing comprehensive training in Tally software and accounting practices to empower rural communities with financial literacy skills.",
      specialization: "Finance",
      education: "B.Com and Tally",
      experience: "Tally Tutor"
    },
    {
      name: "Sagar Bawne",
      position: "CEO of Janhit Sanstha",
      bio: "Chief Executive Officer driving organizational growth and ensuring effective implementation of all development programs.",
      specialization: "Executive Leadership",
      education: "BCA, MCA, BSW",
      experience: "CEO"
    },
    {
      name: "Bharat Dorshettiwar",
      position: "Project Coordinator of Advanced Digital Literacy Program",
      bio: "Spearheading digital literacy initiatives to bridge the digital divide in rural communities.",
      specialization: "Digital Literacy",
      education: "BE in Mechanical Engineering",
      experience: "Digital Program Coordinator"
    },
    {
      name: "Rajvivekanand Bokade",
      position: "Digital Tutor at Advanced Digital Literacy Program",
      bio: "Providing hands-on digital education and training to rural communities, making technology accessible to all.",
      specialization: "Digital Education",
      education: "BE in Information Technology",
      experience: "Digital Tutor"
    },
    {
      name: "Achal Chittalwar",
      position: "Digital Tutor at Advanced Digital Literacy Program",
      bio: "Committed to teaching digital skills and empowering rural communities with technological knowledge.",
      specialization: "Digital Skills Training",
      education: "BE in Computer Science",
      experience: "Digital Tutor"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-100 rounded-full opacity-30 animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-orange-600 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg border border-orange-200">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></span>
            Meet Our Team
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated professionals committed to transforming lives in rural Maharashtra through innovative development programs.
          </p>
          
          {/* Animated underline */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 overflow-hidden hover:-translate-y-2">
                <div className="relative">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="p-8 relative">
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">{member.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">{member.name}</h3>
                          <p className="text-orange-600 font-semibold text-lg">{member.position}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="inline-block bg-orange-50 text-orange-700 px-4 py-2 rounded-xl text-sm font-medium border border-orange-200 group-hover:bg-orange-100 group-hover:border-orange-300 transition-all duration-300">
                          {member.specialization}
                        </span>
                      </div>
                      
                      <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          <span><strong>Education:</strong> {member.education}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          <span><strong>Experience:</strong> {member.experience}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{member.bio}</p>
                    
                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-orange-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/20 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-8 text-lg">
            We're always looking for dedicated individuals to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="flex items-center justify-center">
                View Open Positions
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="group border-2 border-orange-600 text-orange-600 px-10 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              <span className="flex items-center justify-center">
                Send Your Resume
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Drives Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team is united by shared values and a common commitment to rural development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Purpose-Driven</h3>
              <p className="text-gray-600">Every team member is motivated by the desire to create meaningful change in rural communities.</p>
            </div>
            <div className="group text-center p-8 border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Collaborative</h3>
              <p className="text-gray-600">We believe in the power of teamwork and community-driven solutions.</p>
            </div>
            <div className="group text-center p-8 border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Innovative</h3>
              <p className="text-gray-600">We continuously seek creative approaches to address rural development challenges.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;