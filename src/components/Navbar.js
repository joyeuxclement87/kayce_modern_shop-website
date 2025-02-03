import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: "#who-we-are", text: "Who We Are" },
    { href: "#products", text: "Products" },
    { href: "#testimonials", text: "Testimonials" },
    { href: "#faq", text: "FAQ" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar - Now with improved visibility */}
      <div className={`w-full py-2 ${
        darkMode ? 'bg-brown-dark text-cream-light/90' : 'bg-cream-dark text-brown-dark/90'
      } border-b ${darkMode ? 'border-brown-light/20' : 'border-brown-dark/20'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <a 
                href="mailto:contact@kayceshop.com"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hover:text-primary transition-colors">contact@kayceshop.com</span>
              </a>
              <a 
                href="tel:+250788123456"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hover:text-primary transition-colors">+250 788 123 456</span>
              </a>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto">
              <span className="text-sm">
                <span className={darkMode ? 'text-cream-light' : 'text-brown-dark'}>Open:</span> Mon-Fri 8:00 AM - 6:00 PM
              </span>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://facebook.com"
                  className={`hover:text-primary transition-colors ${darkMode ? 'text-cream-light/90' : 'text-brown-dark/90'}`}
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.55V10.24H18.77V14.47H14.55V27.93H9.28V14.47H6V10.24H9.28V7.46C9.28,4.91 10.96,2.77 14.55,2.77H18.77V7.46M12,0C5.37,0 0,5.37 0,12C0,18.63 5.37,24 12,24C18.63,24 24,18.63 24,12C24,5.37 18.63,0 12,0Z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com"
                  className={`hover:text-primary transition-colors ${darkMode ? 'text-cream-light/90' : 'text-brown-dark/90'}`}
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,0C5.37,0 0,5.37 0,12C0,18.63 5.37,24 12,24C18.63,24 24,18.63 24,12C24,5.37 18.63,0 12,0M17.75,2H6.25C3.9,2 2,3.9 2,6.25V17.75C2,20.1 3.9,22 6.25,22H17.75C20.1,22 22,20.1 22,17.75V6.25C22,3.9 20.1,2 17.75,2M12,7.07C14.84,7.07 17.13,9.36 17.13,12.2C17.13,15.04 14.84,17.33 12,17.33C9.16,17.33 6.87,15.04 6.87,12.2C6.87,9.36 9.16,7.07 12,7.07M12,15.82C14.03,15.82 15.67,14.18 15.67,12.15C15.67,10.12 14.03,8.48 12,8.48C9.97,8.48 8.33,10.12 8.33,12.15C8.33,14.18 9.97,15.82 12,15.82Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Updated with proper spacing for fixed top bar */}
      <nav className={`w-full px-4 py-3 transition-all ${
        darkMode ? 'bg-brown-darkest text-cream-light' : 'bg-cream-light text-brown-dark'
      } border-b ${darkMode ? 'border-brown-dark/20' : 'border-cream-dark/20'} shadow-md`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <a href="/" className="text-lg md:text-xl font-serif font-bold text-primary-logo hover:text-primary transition-colors">
              Kayce Shop
            </a>
            <span className={`text-xs ${
              darkMode ? 'text-cream-light/90' : 'text-brown-dark/90'
            } font-medium tracking-wide`}>
              Premium Biscuits & Cookies
            </span>
          </div>
          
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="hover:text-primary transition-colors text-base"
                >
                  {link.text}
                </a>
              ))}
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-cream-dark dark:border-brown-dark animate-fadeIn">
            <div className="py-2">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 

                  className="block px-4 py-2.5 hover:bg-cream-dark dark:hover:bg-brown transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-4 z-50 p-2 rounded-full bg-primary hover:bg-primary-dark text-cream-light shadow-lg transition-all duration-300 ${
          showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/250788123456"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-4 z-50 p-3 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <svg 
          className="w-6 h-6" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
        </svg>
      </a>
    </div>
  );
};

export default Navbar;

