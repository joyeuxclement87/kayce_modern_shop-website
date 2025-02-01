import React, { useState } from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 py-2 md:py-3 transition-all ${
      darkMode ? 'bg-brown-darkest text-cream-light' : 'bg-cream-light text-brown-dark'
    } border-b ${darkMode ? 'border-brown-dark' : 'border-cream-dark'} shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-lg md:text-xl font-serif font-bold text-primary hover:text-primary-dark transition-colors">
          Kayce Shop
        </a>
        
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden md:flex items-center space-x-6">
            <a href="#who-we-are" className="hover:text-primary transition-colors text-base">Who We Are</a>
            <a href="#products" className="hover:text-primary transition-colors text-base">Products</a>
            <a href="#contact" className="hover:text-primary transition-colors text-base">Contact</a>
          </div>
          
          <button 
            onClick={toggleDarkMode}
            className="p-1.5 md:p-2 rounded-full hover:bg-cream-dark dark:hover:bg-brown transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>

          <button 
            className="md:hidden p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - Improved transitions and spacing */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-cream-dark dark:border-brown-dark animate-fadeIn">
          <div className="py-2">
            <a href="#who-we-are" 
               className="block px-4 py-2.5 hover:bg-cream-dark dark:hover:bg-brown transition-colors text-sm">
              Who We Are
            </a>
            <a href="#products" 
               className="block px-4 py-2.5 hover:bg-cream-dark dark:hover:bg-brown transition-colors text-sm">
              Products
            </a>
            <a href="#contact" 
               className="block px-4 py-2.5 hover:bg-cream-dark dark:hover:bg-brown transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
