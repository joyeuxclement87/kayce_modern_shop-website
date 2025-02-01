import React, { useState, useEffect } from 'react';
import './styles.css';
import Navbar from './components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Add this counter state and animation
  const [counters, setCounters] = useState({
    customers: 0,
    products: 0,
    satisfaction: 0,
    support: 0
  });

  const startCounting = (targetRef) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(targetRef.current);
  };

  const animate = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        customers: Math.round(progress * 5000),
        products: Math.round(progress * 50),
        satisfaction: Math.round(progress * 98),
        support: 24 // This doesn't need animation
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);
  };

  const statsRef = React.useRef(null);

  useEffect(() => {
    startCounting(statsRef);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-brown-darkest text-cream-light' : 'bg-cream-light text-brown-dark'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brown-darkest/80 to-brown-dark/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
            alt="Premium cookies and biscuits" 
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-start">
          <div className="max-w-2xl lg:max-w-3xl backdrop-blur-sm bg-brown-darkest/40 p-6 md:p-8 rounded-lg">
            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6 text-cream-light leading-tight">
              Premium Biscuits and Cookies Delivered to Your Doorstep
            </h1>
            
            {/* Subheadline */}
            <p className="text-base md:text-lg mb-6 md:mb-8 text-cream-light/90 font-light">
              We import, supply, and sell the finest biscuits and cookies in Rwanda, bringing you a taste of excellence in every bite.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-primary hover:bg-primary-dark text-cream-light rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Our Products
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border-2 border-cream-light text-cream-light hover:bg-cream-light hover:text-brown-dark rounded-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Feature Points */}
            <div className="mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-cream-light/90 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gold-light">✓</span>
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-light">✓</span>
                <span>Nationwide Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-light">✓</span>
                <span>Bulk Orders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <svg className="w-5 h-5 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-16 md:py-24 bg-cream dark:bg-brown">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column - Moved to first for better mobile experience */}
            <div className="lg:pr-8 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brown-dark dark:text-cream-light">
                Who We Are
              </h2>
              
              <div className="space-y-4 text-brown-dark/90 dark:text-cream-light/90">
                <p className="text-lg leading-relaxed">
                  At Kayce Modern Shop, we are more than just a biscuit and cookie supplier. We are a family of passionate food enthusiasts who believe in bringing joy through exceptional baked goods.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Founded in 2015 in the heart of Rwanda, we've grown from a small local shop to become the country's leading premium biscuit and cookie distributor, serving happiness one bite at a time.
                </p>

                {/* Core Values */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-3 rounded-full">
                      <svg className="w-6 h-6 text-cream-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg mb-2 text-brown-dark dark:text-cream-light">Our Promise</h3>
                      <p className="text-brown-dark/80 dark:text-cream-light/80">We guarantee premium quality in every product we deliver</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-3 rounded-full">
                      <svg className="w-6 h-6 text-cream-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg mb-2 text-brown-dark dark:text-cream-light">Our Service</h3>
                      <p className="text-brown-dark/80 dark:text-cream-light/80">Reliable delivery and exceptional customer care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Our team at work" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/50 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Redesigned */}
      <section id="why-choose-us" className="py-16 md:py-24 bg-cream-light dark:bg-brown-darkest">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-brown-dark dark:text-cream-light">
              Why Choose Us
            </h2>
            <p className="text-base md:text-lg text-brown-dark/80 dark:text-cream-light/80">
              We take pride in delivering excellence in every aspect of our service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {/* Premium Quality */}
            <div className="group bg-cream/50 dark:bg-brown/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold mb-2 text-brown-dark dark:text-cream-light">Premium Quality</h3>
                  <p className="text-sm text-brown-dark/80 dark:text-cream-light/80 leading-relaxed">
                    We partner with renowned manufacturers and use only the finest ingredients to ensure exceptional taste in every bite.
                  </p>
                </div>
              </div>
            </div>

            {/* Fast Delivery */}
            <div className="group bg-cream/50 dark:bg-brown/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold mb-2 text-brown-dark dark:text-cream-light">Fast Delivery</h3>
                  <p className="text-sm text-brown-dark/80 dark:text-cream-light/80 leading-relaxed">
                    Our efficient delivery network ensures your orders reach you fresh and on time, anywhere in Rwanda.
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Service */}
            <div className="group bg-cream/50 dark:bg-brown/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold mb-2 text-brown-dark dark:text-cream-light">Premium Service</h3>
                  <p className="text-sm text-brown-dark/80 dark:text-cream-light/80 leading-relaxed">
                    Our dedicated team ensures personalized attention and 100% satisfaction with every order.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section - Enhanced with cards and colors */}
          <div 
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto pt-12 mt-12"
          >
            {/* Customers Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary to-brown-dark p-8 rounded-2xl shadow-xl group hover:scale-105 transition-all">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-cream-light/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-4xl xl:text-5xl font-bold text-cream-light mb-2 font-serif">
                  {counters.customers.toLocaleString()}+
                </div>
                <div className="text-sm uppercase tracking-wider text-cream-light/80 font-medium">
                  Happy Customers
                </div>
                <div className="absolute -bottom-6 -right-6 text-cream-light/10 text-[80px] font-bold leading-none">
                  5K
                </div>
              </div>
            </div>

            {/* Products Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-gold-light to-gold-dark p-8 rounded-2xl shadow-xl group hover:scale-105 transition-all">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-cream-light/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-4xl xl:text-5xl font-bold text-brown-darkest mb-2 font-serif">
                  {counters.products}+
                </div>
                <div className="text-sm uppercase tracking-wider text-brown-darkest/80 font-medium">
                  Product Varieties
                </div>
                <div className="absolute -bottom-6 -right-6 text-brown-darkest/10 text-[80px] font-bold leading-none">
                  50
                </div>
              </div>
            </div>

            {/* Satisfaction Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-brown-light to-brown p-8 rounded-2xl shadow-xl group hover:scale-105 transition-all">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-cream-light/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-4xl xl:text-5xl font-bold text-cream-light mb-2 font-serif">
                  {counters.satisfaction}%
                </div>
                <div className="text-sm uppercase tracking-wider text-cream-light/80 font-medium">
                  Satisfaction Rate
                </div>
                <div className="absolute -bottom-6 -right-6 text-cream-light/10 text-[80px] font-bold leading-none">
                  98
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary-dark to-brown-darkest p-8 rounded-2xl shadow-xl group hover:scale-105 transition-all">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-cream-light/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-4xl xl:text-5xl font-bold text-cream-light mb-2 font-serif">
                  {counters.support}/7
                </div>
                <div className="text-sm uppercase tracking-wider text-cream-light/80 font-medium">
                  Customer Support
                </div>
                <div className="absolute -bottom-6 -right-6 text-cream-light/10 text-[80px] font-bold leading-none">
                  24
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-cream dark:bg-brown">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1556217477-d325251ece38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Our artisanal bakery process" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/50 to-transparent"></div>
            </div>

            {/* Content Column */}
            <div className="lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brown-dark dark:text-cream-light">
                Our Story
              </h2>
              
              <div className="space-y-4 text-brown-dark/90 dark:text-cream-light/90">
                <p className="text-lg leading-relaxed">
                  Since 2015, Kayce Modern Shop has been Rwanda's premier destination for premium biscuits and cookies. What started as a small family-owned business has grown into a nationally recognized brand, serving customers across the country.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Our mission is simple: to bring joy through exceptional baked goods while maintaining the highest standards of quality and customer service.
                </p>

                {/* Value Propositions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-3 rounded-full">
                      <svg className="w-6 h-6 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg mb-2 text-brown-dark dark:text-cream-light">Quality First</h3>
                      <p className="text-brown-dark/80 dark:text-cream-light/80">Only the finest ingredients make it into our products</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-3 rounded-full">
                      <svg className="w-6 h-6 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg mb-2 text-brown-dark dark:text-cream-light">Timely Delivery</h3>
                      <p className="text-brown-dark/80 dark:text-cream-light/80">Fresh and on-time delivery guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section id="products" className="py-16 md:py-24 bg-cream dark:bg-brown-dark">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brown-dark dark:text-cream-light">
              Our Premium Selection
            </h2>
            <p className="text-lg text-brown-dark/80 dark:text-cream-light/80">
              Discover our carefully curated collection of finest biscuits and cookies, crafted with premium ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Premium Cookies Card */}
            <div className="bg-cream-light dark:bg-brown rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80" 
                  alt="Premium Cookies" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-3 text-brown-dark dark:text-cream-light">Premium Cookies</h3>
                <ul className="space-y-2 mb-4 text-brown-dark/80 dark:text-cream-light/80">
                  <li className="flex items-center">
                    <span className="text-gold-dark mr-2">•</span>
                    Classic Chocolate Chip
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-dark mr-2">•</span>
                    Double Chocolate
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-dark mr-2">•</span>
                    Oatmeal Raisin
                  </li>
                </ul>
                <p className="text-primary font-semibold mb-4">From $12.99/box</p>
              </div>
            </div>

            {/* Specialty Biscuits Card */}
            <div className="bg-cream-light dark:bg-brown rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80" 
                  alt="Specialty Biscuits" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-3 text-brown-dark dark:text-cream-light">Specialty Biscuits</h3>
                <ul className="space-y-2 mb-4 text-brown-dark/80 dark:text-cream-light/80">
                  <li className="flex items-center">
                    <span className="text-gold-dark mr-2">•</span>
                    Gluten-Free Selection
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-dark mr-2">•</span>
                    Sugar-Free Options
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-dark mr-2">•</span>
                    Vegan Varieties
                  </li>
                </ul>
                <p className="text-primary font-semibold mb-4">From $14.99/box</p>
              </div>
            </div>

            {/* Gift Collections Card */}
            <div className="bg-cream-light dark:bg-brown rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558024920-b41e1887dc32?auto=format&fit=crop&w=800&q=80" 
                  alt="Gift Collections" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-3 text-brown-dark dark:text-cream-light">Gift Collections</h3>
                <ul className="space-y-2 mb-4 text-brown-dark/80 dark:text-cream-light/80">
                  <li className="flex items-center">
                    <span className="text-gold-dark mr-2">•</span>
                    Assorted Gift Boxes
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-dark mr-2">•</span>
                    Corporate Packages
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-dark mr-2">•</span>
                    Custom Collections
                  </li>
                </ul>
                <p className="text-primary font-semibold mb-4">From $29.99/box</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary-dark text-cream-light rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Request Our Complete Catalog
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <p className="mt-4 text-sm text-brown-dark/60 dark:text-cream-light/60">
              Bulk orders and customization options available
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-cream dark:bg-brown relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-light/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-brown-dark dark:text-cream-light">
              What Our Customers Say
            </h2>
            <p className="text-base md:text-lg text-brown-dark/80 dark:text-cream-light/80">
              Discover why customers across Rwanda choose us for their premium biscuit needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-cream-light/50 dark:bg-brown/50 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-brown-dark dark:text-cream-light">Sarah Johnson</h3>
                  <p className="text-sm text-brown-dark/60 dark:text-cream-light/60">Restaurant Owner</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 text-gold-dark">★★★★★</div>
              </div>
              <blockquote className="text-brown-dark/80 dark:text-cream-light/80">
                "The quality and consistency of Kayce's products have made them our go-to supplier for all our dessert needs. Their customer service is exceptional!"
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-cream-light/50 dark:bg-brown/50 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" 
                    alt="Michael Chang" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-brown-dark dark:text-cream-light">Michael Chang</h3>
                  <p className="text-sm text-brown-dark/60 dark:text-cream-light/60">Corporate Client</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 text-gold-dark">★★★★★</div>
              </div>
              <blockquote className="text-brown-dark/80 dark:text-cream-light/80">
                "Their gift collections are perfect for our corporate events. The presentation and taste never fail to impress our clients and partners."
              </blockquote>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-cream-light/50 dark:bg-brown/50 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80" 
                    alt="Emma Rodriguez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-brown-dark dark:text-cream-light">Emma Rodriguez</h3>
                  <p className="text-sm text-brown-dark/60 dark:text-cream-light/60">Event Planner</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 text-gold-dark">★★★★★</div>
              </div>
              <blockquote className="text-brown-dark/80 dark:text-cream-light/80">
                "The variety and quality of their products are unmatched. Their team always goes above and beyond with their service!"
              </blockquote>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-16 pt-16 border-t border-brown-dark/10 dark:border-cream-light/10">
            <h3 className="text-center text-sm uppercase tracking-wider text-brown-dark/60 dark:text-cream-light/60 mb-8">
              Trusted by Leading Businesses
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
              <img src="https://placehold.co/120x40/d4c3b3/6b4423?text=PARTNER+1" alt="Partner 1" className="h-8 dark:invert" />
              <img src="https://placehold.co/120x40/d4c3b3/6b4423?text=PARTNER+2" alt="Partner 2" className="h-8 dark:invert" />
              <img src="https://placehold.co/120x40/d4c3b3/6b4423?text=PARTNER+3" alt="Partner 3" className="h-8 dark:invert" />
              <img src="https://placehold.co/120x40/d4c3b3/6b4423?text=PARTNER+4" alt="Partner 4" className="h-8 dark:invert" />
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
