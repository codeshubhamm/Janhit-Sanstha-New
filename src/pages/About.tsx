import React from 'react';
import { Target, Eye, Heart, Users, Leaf, GraduationCap, Award, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const focusAreas = [
    { icon: Users, title: "Adolescent Development", color: "from-orange-400 to-red-500", description: "Empowering young minds through structured programs" },
    { icon: GraduationCap, title: "Digital Education", color: "from-blue-400 to-blue-600", description: "Bridging the digital divide in rural communities" },
    { icon: Heart, title: "Women Empowerment", color: "from-pink-400 to-pink-600", description: "Building stronger, more inclusive communities" },
    { icon: Leaf, title: "Environmental Conservation", color: "from-green-400 to-green-600", description: "Protecting our natural resources for future generations" },
    { icon: Award, title: "Financial Literacy", color: "from-purple-400 to-purple-600", description: "Teaching responsible financial management" },
    { icon: Globe, title: "Sustainable Agriculture", color: "from-yellow-400 to-yellow-600", description: "Promoting eco-friendly farming practices" }
  ];

  const values = [
    { icon: Heart, title: "Compassion", description: "We approach every community with empathy and understanding" },
    { icon: Award, title: "Excellence", description: "We strive for the highest quality in all our programs" },
    { icon: Users, title: "Collaboration", description: "We believe in the power of community-driven solutions" },
    { icon: Lightbulb, title: "Innovation", description: "We continuously seek creative approaches to rural challenges" }
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
                Janhit Bahuuddeshiya Gramin Vikas Sanstha is a non-profit organization working 
                actively in 16 tribal villages surrounding the Tipeshwar Wildlife Sanctuary in Maharashtra, India.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Rural development work" 
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
                To uplift rural and tribal communities through holistic development initiatives 
                focused on education, digital empowerment, women development, financial literacy, 
                sustainable agriculture, and environmental conservation.
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
                We envision a world where every individual—regardless of their background—has 
                access to basic necessities, education, and opportunities for personal and community growth.
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
              Comprehensive interventions designed to be inclusive, educational, and empowering
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
              <div className="text-4xl font-bold text-white mb-2">16</div>
              <div className="text-orange-100">Tribal Villages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-orange-100">Lives Transformed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-orange-100">Years of Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-orange-100">Active Projects</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;