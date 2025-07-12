import React, { useState } from 'react';
import { Heart, Menu, Search, Globe, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg border-b-2 border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src="/Janhit Main Logo.png" 
                alt="Janhit Sanstha Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              />
              <div>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Janhit Sanstha</span>
                <p className="text-xs text-gray-600 -mt-1 hidden sm:block">Bahuuddeshiya Gramin Vikas</p>
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
            <Link 
              to="/about" 
              className={`font-medium transition-all duration-300 hover:text-orange-500 hover:scale-105 ${
                isActive('/about') ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : 'text-gray-700'
              }`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`font-medium transition-all duration-300 hover:text-orange-500 hover:scale-105 ${
                isActive('/projects') ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : 'text-gray-700'
              }`}
            >
              Our Projects
            </Link>
            <Link 
              to="/team" 
              className={`font-medium transition-all duration-300 hover:text-orange-500 hover:scale-105 ${
                isActive('/team') ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : 'text-gray-700'
              }`}
            >
              Team
            </Link>
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
            <Globe className="h-5 w-5 text-gray-500 cursor-pointer hover:text-orange-500 transition-colors" />
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
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="flex flex-col space-y-4 pt-4 border-t border-orange-100">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'text-orange-500 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-orange-500 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              onClick={closeMobileMenu}
              className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                isActive('/projects') 
                  ? 'text-orange-500 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              Our Projects
            </Link>
            <Link 
              to="/team" 
              onClick={closeMobileMenu}
              className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                isActive('/team') 
                  ? 'text-orange-500 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-orange-500 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              Contact
            </Link>
            
            {/* Mobile Additional Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-orange-100">
              <div className="flex items-center space-x-4">
                <Globe className="h-5 w-5 text-gray-500 cursor-pointer hover:text-orange-500 transition-colors" />
                <span className="text-sm text-gray-600">Language</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;