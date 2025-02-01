import React, { useState } from 'react';
import './styles.css';
import Navbar from './components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-brown-darkest text-cream-light' : 'bg-cream-light text-brown-dark'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section - More responsive */}
      <section className="relative min-h-[60vh] md:h-[70vh] pt-20 md:pt-16 bg-gradient-to-b from-cream-DEFAULT to-cream-light dark:from-brown-dark dark:to-brown-darkest">
        <div className="container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-xl md:max-w-2xl px-4 md:px-0">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6 text-brown-dark dark:text-cream-light leading-tight">
              Welcome to Kayce Shop
            </h1>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-brown dark:text-cream-dark px-2">
              Fresh baked cookies and artisanal biscuits
            </p>
            <a href="#products" 
               className="inline-block bg-primary hover:bg-primary-dark px-6 md:px-8 py-2 md:py-3 rounded-lg text-cream-light font-medium transition-colors shadow-lg hover:shadow-xl text-sm md:text-base">
              View Our Products
            </a>
          </div>
        </div>
      </section>

      {/* Products Section - Better grid spacing */}
      <section id="products" className="py-12 md:py-16 bg-cream dark:bg-brown-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8 md:mb-12 text-brown-dark dark:text-cream-light">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-cream-light dark:bg-brown p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-brown-dark dark:text-cream-light">
                Classic Cookies
              </h3>
              <p className="text-sm md:text-base text-brown dark:text-cream-dark">
                Traditional recipes with premium ingredients
              </p>
            </div>
            <div className="bg-cream-light dark:bg-brown p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-brown-dark dark:text-cream-light">
                Special Biscuits
              </h3>
              <p className="text-sm md:text-base text-brown dark:text-cream-dark">
                Artisanal selection for special occasions
              </p>
            </div>
            <div className="bg-cream-light dark:bg-brown p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-brown-dark dark:text-cream-light">
                Gift Sets
              </h3>
              <p className="text-sm md:text-base text-brown dark:text-cream-dark">
                Perfect for sharing and gifting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Better padding */}
      <section id="contact" className="py-12 md:py-16 bg-cream-light dark:bg-brown-darkest">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 md:mb-4 text-brown-dark dark:text-cream-light">
            Get in Touch
          </h2>
          <p className="text-sm md:text-base text-brown dark:text-cream-dark mb-4 md:mb-6 px-4">
            Have questions? We'd love to hear from you.
          </p>
          <a href="mailto:contact@kayceshop.com" 
             className="text-primary hover:text-primary-dark transition-colors font-medium inline-block">
            contact@kayceshop.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
