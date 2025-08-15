import React, { useState } from 'react';
import { Heart, Menu, Search, Facebook, Instagram, Youtube, MessageCircle, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const closeAboutDropdown = () => {
    setIsAboutDropdownOpen(false);
  };

  const closeTeamDropdown = () => {
    setIsTeamDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-lg border-b-2 border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <img 
                  src="/Janhit Main Logo.png" 
                  alt="Janhit Sanstha Logo" 
                  className="h-14 w-14 sm:h-18 sm:w-18 lg:h-24 lg:w-24 object-contain drop-shadow-lg"
                />
              </div>
              <div>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Janhit Sanstha</span>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-all duration-300 hover:text-orange-500 hover:scale-105 ${
                isActive('/') ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            
            {/* About Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                className={`font-medium transition-all duration-300 hover:text-orange-500 hover:scale-105 flex items-center space-x-1 ${
                  isActive('/about') || isActive('/projects') || isActive('/awards') ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : 'text-gray-700'
                }`}
              >
                <span>About</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-orange-100 py-2 transition-all duration-200 ${
                  isAboutDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <Link 
                  to="/about" 
                  onClick={closeAboutDropdown}
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                    isActive('/about') ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  About Us
                </Link>
                <Link 
                  to="/sdg-goals" 
                  onClick={closeAboutDropdown}
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                    isActive('/sdg-goals') ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  SDG Goals
                </Link>
                <Link 
                  to="/projects" 
                  onClick={closeAboutDropdown}
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                    isActive('/projects') ? 'text-orange-500 bg-orange-500' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  Our Projects
                </Link>
                <Link 
                  to="/awards" 
                  onClick={closeAboutDropdown}
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                    isActive('/awards') ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  Awards
                </Link>
              </div>
            </div>
            
            <Link 
              to="/media" 
              className={`font-medium transition-all duration-300 hover:text-orange-500 hover:scale-105 ${
                isActive('/media') ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : 'text-gray-700'
              }`}
            >
              Media & Updates
            </Link>
            
            <Link 
              to="/covid-pandemic" 
              className={`font-medium transition-all duration-300 hover:text-orange-500 hover:scale-105 ${
                isActive('/covid-pandemic') ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : 'text-gray-700'
              }`}
            >
              Covid Pandemic
            </Link>
            
            {/* Team Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsTeamDropdownOpen(true)}
                onMouseLeave={() => setIsTeamDropdownOpen(false)}
                className={`font-medium transition-all duration-300 hover:text-orange-500 hover:scale-105 flex items-center space-x-1 ${
                  isActive('/team') || isActive('/trusty') ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : 'text-gray-700'
                }`}
              >
                <span>Team</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isTeamDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Team Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-orange-100 py-2 transition-all duration-200 ${
                  isTeamDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsTeamDropdownOpen(true)}
                onMouseLeave={() => setIsTeamDropdownOpen(false)}
              >
                <Link 
                  to="/team" 
                  onClick={closeTeamDropdown}
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                    isActive('/team') ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  Our Team
                </Link>
                <Link 
                  to="/trusty" 
                  onClick={closeTeamDropdown}
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                    isActive('/trusty') ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  Trustee
                </Link>
              </div>
            </div>
            <Link 
              to="/contact" 
              className={`font-medium transition-all duration-300 hover:text-orange-500 hover:scale-105 ${
                isActive('/contact') ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a 
                href="https://www.facebook.com/share/1C7tpu6LGb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <Facebook className="h-4 w-4 text-gray-500 hover:text-orange-500 transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/janhitsanstha?igsh=MTgzOHEyYzR5Nmt4Zw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <Instagram className="h-4 w-4 text-gray-500 hover:text-orange-500 transition-colors" />
              </a>
              <a 
                href="https://whatsapp.com/channel/0029VaftLs52f3ELNd1aqA0X" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-gray-500 hover:text-orange-500 transition-colors" />
              </a>
              <a 
                href="https://youtube.com/@janhitsanstha?si=LYErzyRrKdp6j8Sm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <Youtube className="h-4 w-4 text-gray-500 hover:text-orange-500 transition-colors" />
              </a>
            </div>
            <button 
              onClick={() => navigate('/donate')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 lg:px-8 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Donate
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2 sm:space-x-4">
            <button 
              onClick={() => navigate('/donate')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Donate
            </button>
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="flex flex-col space-y-2 pt-4 border-t border-orange-100">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center ${
                isActive('/') 
                  ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              🏠 Home
            </Link>
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center ${
                isActive('/about') 
                  ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              ℹ️ About Us
            </Link>
            <Link 
              to="/sdg-goals" 
              onClick={closeMobileMenu}
              className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center ${
                isActive('/sdg-goals') 
                  ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              🌍 SDG Goals
            </Link>
            <Link 
              to="/projects" 
              onClick={closeMobileMenu}
              className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center ${
                isActive('/projects') 
                  ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              🚀 Our Projects
            </Link>
            <Link 
              to="/awards" 
              onClick={closeMobileMenu}
              className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center ${
                isActive('/awards') 
                  ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              🏆 Awards
            </Link>
            <Link 
              to="/media" 
              onClick={closeMobileMenu}
              className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center ${
                isActive('/media') 
                  ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              📰 Media & Updates
            </Link>
            <Link 
              to="/covid-pandemic" 
              onClick={closeMobileMenu}
              className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center ${
                isActive('/covid-pandemic') 
                  ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              🦠 Covid Pandemic
            </Link>
            <Link 
              to="/team" 
              onClick={closeMobileMenu}
              className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center ${
                isActive('/team') 
                  ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              👥 Our Team
            </Link>
            <Link 
              to="/trusty" 
              onClick={closeMobileMenu}
              className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center ${
                isActive('/trusty') 
                  ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              🤝 Trustee
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center ${
                isActive('/contact') 
                  ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              📞 Contact
            </Link>
            
            {/* Mobile Social Links */}
            <div className="pt-6 border-t border-orange-100">
              <div className="text-center mb-4">
                <span className="text-sm font-medium text-gray-600">Follow Us</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <a 
                  href="https://www.facebook.com/share/1C7tpu6LGb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                </a>
                <a 
                  href="https://www.instagram.com/janhitsanstha?igsh=MTgzOHEyYzR5Nmt4Zw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-pink-600" />
                </a>
                <a 
                  href="https://whatsapp.com/channel/0029VaftLs52f3ELNd1aqA0X" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-green-50 hover:bg-green-100 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-green-600" />
                </a>
                <a 
                  href="https://youtube.com/@janhitsanstha?si=LYErzyRrKdp6j8Sm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-red-50 hover:bg-red-100 transition-colors"
                >
                  <Youtube className="h-5 w-5 text-red-600" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;