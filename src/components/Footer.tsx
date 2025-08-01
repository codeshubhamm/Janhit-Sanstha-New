import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-white border-t-2 border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-6">
              <img 
                src="/Janhit Main Logo.png" 
                alt="Janhit Sanstha Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              />
              <div>
                <span className="text-xl sm:text-2xl font-bold text-gray-900">Janhit Sanstha</span>
                <p className="text-xs text-gray-600 -mt-1 hidden sm:block">Bahuuddeshiya Gramin Vikas</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Established in 1998, empowering rural and tribal communities in Maharashtra through education, 
              digital literacy, women empowerment, and environmental conservation initiatives.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1C7tpu6LGb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-100 p-2 rounded-lg hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/janhitsanstha?igsh=MTgzOHEyYzR5Nmt4Zw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-100 p-2 rounded-lg hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://whatsapp.com/channel/0029VaftLs52f3ELNd1aqA0X" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-100 p-2 rounded-lg hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@janhitsanstha?si=LYErzyRrKdp6j8Sm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-100 p-2 rounded-lg hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-orange-600">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Our Projects</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Annual Reports</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Transparency</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-orange-600">Our Projects</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Kishori Vikas Project</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Jadui Gullak</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Digital Saksharta</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Pankh Sapno Ki Udaan</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Nisarg Mitra Manch</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-orange-600">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                <span>Telangtakli, Tq Kelapur, Dist Yavatmal - 445302</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span>+91 8275394711</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span>+91 8275394611</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span>Emergency: +91 8698122202</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span>jbgvsanstha@gmail.com</span>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6">
              <button 
                onClick={() => navigate('/donate')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 w-full"
              >
                Support Our Work
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-orange-100 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; 2024 Janhit Bahuuddeshiya Gramin Vikas Sanstha. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">Transparency</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;