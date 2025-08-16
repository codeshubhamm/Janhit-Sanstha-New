import React from 'react';
import { Target, Eye, Heart, Users, Leaf, GraduationCap, Award, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const focusAreas = [
    { icon: Users, title: "Adolescent Development", color: "from-orange-400 to-red-500", description: "Empowering young minds through structured programs" },
    { icon: GraduationCap, title: "Education and Skill Development", color: "from-blue-400 to-blue-600", description: "Providing quality education and skill training" },
    { icon: Heart, title: "Women and Adolescent Empowerment", color: "from-pink-400 to-pink-600", description: "Building stronger, more inclusive communities" },
    { icon: Leaf, title: "Environmental Conservation", color: "from-green-400 to-green-600", description: "Protecting our natural resources for future generations" },
    { icon: Award, title: "Digital and Financial Literacy", color: "from-purple-400 to-purple-600", description: "Teaching digital skills and financial management" },
    { icon: Globe, title: "Rural Governance Awareness", color: "from-yellow-400 to-yellow-600", description: "Promoting awareness about government schemes and services" }
  ];

  const values = [
    { icon: Heart, title: "Transparency", description: "We maintain complete transparency in all our operations and fund utilization" },
    { icon: Award, title: "Morality", description: "We uphold the highest moral standards in our work and interactions" },
    { icon: Users, title: "Discipline", description: "We follow disciplined approaches to achieve sustainable development" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-6 py-3 rounded-full text-sm font-medium shadow-lg">
                🏢 About Our Organization
              </div>
              <h1 className="text-6xl font-bold text-gray-900">
                <span className="text-gray-900">Dedicated to </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Rural Development</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Established on March 12, 1998, in Telangtakli, Tq Kelapur, Yavatmal, Janhit is a voluntary, non-profit organization 
                registered under the Charitable Commissioner. 
                We are authorized under 12A and 80G for tax-exempt donations and are CSR-registered (CSR00045923).
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-3xl transform rotate-3"></div>
                              <img 
                  src="/ABOUT JANHIT IMAGE .jpg" 
                  alt="About Janhit organization" 
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-cover transform -rotate-1"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-3xl shadow-xl border border-orange-100">
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 p-4 rounded-2xl shadow-lg mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To implement educational initiatives, skill development, environmental awareness programs, 
                and cooperative systems in remote and tribal areas to promote self-reliant livelihood 
                and community empowerment.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-3xl shadow-xl border border-orange-100">
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 p-4 rounded-2xl shadow-lg mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create an ideal society by providing education, skill development, environmental awareness, 
                cooperation, and self-reliant livelihood opportunities to rural and tribal citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Areas of Focus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For more than two decades, Janhit has consistently delivered impactful programs in over 100 villages, creating sustainable change through grassroots action.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-orange-100">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${area.color} p-5 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <area.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{area.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to rural communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-20 h-20 mx-auto mb-6 rounded-2xl p-5 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <value.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl font-bold text-white mb-2">20</div>
              <div className="text-orange-100">Tribal Villages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-orange-100">Villages Impacted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl font-bold text-white mb-2">27+</div>
              <div className="text-orange-100">Years of Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-orange-100">Lives Transformed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;