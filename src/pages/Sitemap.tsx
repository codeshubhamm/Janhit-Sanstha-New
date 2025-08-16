import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Award, FileText, Heart, Phone, Globe, BookOpen, Leaf, GraduationCap, Shield, Building2 } from 'lucide-react';

const Sitemap = () => {
  const pages = [
    {
      title: "Home",
      path: "/",
      description: "Main homepage of Janhit Sanstha",
      icon: Home,
      category: "Main"
    },
    {
      title: "About Us",
      path: "/about",
      description: "Learn about our organization, mission, and vision",
      icon: Building2,
      category: "About"
    },
    {
      title: "SDG Goals",
      path: "/sdg-goals",
      description: "Our contribution to United Nations Sustainable Development Goals",
      icon: Globe,
      category: "About"
    },
    {
      title: "Our Projects",
      path: "/projects",
      description: "Overview of all our development projects",
      icon: FileText,
      category: "Projects"
    },
    {
      title: "Nirmiti - The Gang of Girls",
      path: "/projects/kishori-vikas",
      description: "Adolescent girls empowerment program",
      icon: Users,
      category: "Projects"
    },
    {
      title: "Jadui Gullak - Financial Literacy",
      path: "/projects/jadui-gullak",
      description: "Financial literacy program for children",
      icon: Heart,
      category: "Projects"
    },
    {
      title: "Digital Literacy Program",
      path: "/projects/digital-saksharta",
      description: "Basic digital literacy training",
      icon: GraduationCap,
      category: "Projects"
    },
    {
      title: "Pankh - Sapno Ki Udaan",
      path: "/projects/pankh-sapno-ki-udaan",
      description: "Primary education initiative",
      icon: BookOpen,
      category: "Projects"
    },
    {
      title: "Nisarg Mitra Manch",
      path: "/projects/nisarg-mitra-manch",
      description: "Environmental conservation program",
      icon: Leaf,
      category: "Projects"
    },
    {
      title: "Advanced Digital Literacy",
      path: "/projects/advanced-digital-literacy",
      description: "Advanced technology training program",
      icon: GraduationCap,
      category: "Projects"
    },
    {
      title: "Be The Change",
      path: "/projects/be-the-change",
      description: "Free library initiative",
      icon: BookOpen,
      category: "Projects"
    },
    {
      title: "Jan-Setu Program",
      path: "/projects/jan-setu",
      description: "Learn and earn program",
      icon: Shield,
      category: "Projects"
    },
    {
      title: "Our Team",
      path: "/team",
      description: "Meet our dedicated team members",
      icon: Users,
      category: "Team"
    },
    {
      title: "Trustee",
      path: "/trusty",
      description: "Our board of trustees",
      icon: Shield,
      category: "Team"
    },
    {
      title: "Awards & Recognition",
      path: "/awards",
      description: "Awards and recognition received",
      icon: Award,
      category: "About"
    },
    {
      title: "Media & Updates",
      path: "/media",
      description: "Latest news and media coverage",
      icon: FileText,
      category: "Media"
    },
    {
      title: "Covid Pandemic Response",
      path: "/covid-pandemic",
      description: "Our response during the pandemic",
      icon: Heart,
      category: "Media"
    },
    {
      title: "Contact Us",
      path: "/contact",
      description: "Get in touch with us",
      icon: Phone,
      category: "Contact"
    },
    {
      title: "Donate",
      path: "/donate",
      description: "Support our work through donations",
      icon: Heart,
      category: "Support"
    }
  ];

  const categories = {
    "Main": pages.filter(page => page.category === "Main"),
    "About": pages.filter(page => page.category === "About"),
    "Projects": pages.filter(page => page.category === "Projects"),
    "Team": pages.filter(page => page.category === "Team"),
    "Media": pages.filter(page => page.category === "Media"),
    "Contact": pages.filter(page => page.category === "Contact"),
    "Support": pages.filter(page => page.category === "Support")
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gray-900">Website </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Sitemap</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through all pages of Janhit Sanstha website. Find information about our projects, team, and how to get involved.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {Object.entries(categories).map(([category, categoryPages]) => (
              <div key={category} className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryPages.map((page, index) => (
                    <Link
                      key={index}
                      to={page.path}
                      className="group block p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-500 p-3 rounded-xl group-hover:bg-orange-600 transition-colors duration-300">
                          <page.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-2">
                            {page.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {page.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-16 bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                to="/"
                className="text-center p-4 bg-orange-100 rounded-xl hover:bg-orange-200 transition-colors duration-300"
              >
                <Home className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                <span className="font-semibold text-gray-900">Home</span>
              </Link>
              <Link
                to="/about"
                className="text-center p-4 bg-blue-100 rounded-xl hover:bg-blue-200 transition-colors duration-300"
              >
                <Building2 className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <span className="font-semibold text-gray-900">About</span>
              </Link>
              <Link
                to="/projects"
                className="text-center p-4 bg-green-100 rounded-xl hover:bg-green-200 transition-colors duration-300"
              >
                <FileText className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <span className="font-semibold text-gray-900">Projects</span>
              </Link>
              <Link
                to="/contact"
                className="text-center p-4 bg-purple-100 rounded-xl hover:bg-purple-200 transition-colors duration-300"
              >
                <Phone className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <span className="font-semibold text-gray-900">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
