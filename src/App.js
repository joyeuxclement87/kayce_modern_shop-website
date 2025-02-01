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
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <section className="relative h-screen pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://source.unsplash.com/1600x900/?cookies,biscuits')"}}></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Welcome to Kayce Modern Shop</h1>
            <p className="text-xl mb-8">Discover our delicious selection of cookies and biscuits</p>
            <div className="space-x-4">
              <a href="#products" className="bg-primary hover:bg-primary-dark px-8 py-3 rounded-lg text-white font-semibold transition-colors">Our Products</a>
              <a href="#contact" className="bg-white hover:bg-gray-100 px-8 py-3 rounded-lg text-gray-900 font-semibold transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            At Kayce Modern Shop, we specialize in creating delightful cookies and biscuits using traditional recipes with a modern twist. Our commitment to quality ingredients and artisanal baking methods ensures every bite is pure pleasure.
          </p>
        </div>
      </section>

      <section id="products" className="py-20 bg-gray-50 dark:bg-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Chocolate Chip Classics</h3>
              <p className="text-gray-600 dark:text-gray-300">Our bestselling cookies made with premium chocolate</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Butter Shortbread</h3>
              <p className="text-gray-600 dark:text-gray-300">Traditional Scottish recipe with pure butter</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Oatmeal Raisin</h3>
              <p className="text-gray-600 dark:text-gray-300">Wholesome and delicious, perfect with tea</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
