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
    if (!targetRef.current) return;

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

    // Only observe if the ref exists
    observer.observe(targetRef.current);

    // Cleanup observer on unmount
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
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
    // Add a small delay to ensure the ref is mounted
    const timer = setTimeout(() => {
      if (statsRef.current) {
        startCounting(statsRef);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Add state for FAQ accordions
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [faqHeights, setFaqHeights] = useState({});
  
  // Add FAQ ref
  const faqRefs = React.useRef({});

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return ( 
    <div className={`min-h-screen pt-[104px] ${darkMode ? 'dark bg-brown-darkest text-cream-light' : 'bg-cream-light text-brown-dark'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} className="fixed top-0 left-0 right-0 z-50" />
      
      {/* Enhanced Hero Section - Updated Copy */}
      <section className="relative min-h-[calc(100vh-104px)] md:min-h-screen">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brown-darkest/80 to-brown-dark/60 z-10"></div>
          <img 
            src={`${process.env.PUBLIC_URL}/images/hero-image.jpg`} 
            alt="Premium cookies and biscuits" 
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        <div className="relative z-10 container mx-auto px-3 sm:px-4 h-[calc(100vh-104px)] md:h-screen flex items-center justify-start">
          <div className="max-w-[90%] w-full sm:max-w-2xl lg:max-w-3xl backdrop-blur-sm bg-brown-darkest/40 p-3 sm:p-6 md:p-8 rounded-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 sm:mb-4 md:mb-6 text-cream-light leading-tight">
              Premium Biscuits and Cookies for Rwanda
            </h1>
            
            <p className="text-base md:text-lg mb-6 md:mb-8 text-cream-light/90 font-light">
              We import, supply, and sell the finest biscuits and cookies to retailers, wholesalers, and individual customers, delivering excellence in every bite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-primary hover:bg-primary-dark text-cream-light rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us Today!
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border-2 border-cream-light text-cream-light hover:bg-cream-light hover:text-brown-dark rounded-lg transition-all duration-300"
              >
                View Our Products
              </a>
            </div>

            <div className="mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-cream-light/90 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gold-light">✓</span>
                <span>Nationwide Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-light">✓</span>
                <span>Bulk Orders Welcome</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-light">✓</span>
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-16 md:py-24 bg-cream dark:bg-brown">
        <div className="container mx-auto px-3 sm:px-4">
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

      {/* Why Choose Us Section - Enhanced */}
      <section id="why-choose-us" className="py-16 md:py-24 bg-cream-light dark:bg-brown-darkest relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-light/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-3 sm:px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium mb-4 inline-block">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brown-dark dark:text-cream-light">
              The Kayce Difference
            </h2>
            <p className="text-base md:text-lg text-brown-dark/80 dark:text-cream-light/80">
              Experience excellence in every aspect of our service, from product quality to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Premium Quality Card */}
            <div className="group bg-cream/50 dark:bg-brown/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <svg className="w-8 h-8 text-primary group-hover:text-cream-light transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-brown-dark dark:text-cream-light">Premium Quality</h3>
              <p className="text-brown-dark/80 dark:text-cream-light/80">
                Carefully selected, imported products meeting the highest quality standards
              </p>
            </div>

            {/* Competitive Pricing Card */}
            <div className="group bg-cream/50 dark:bg-brown/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <svg className="w-8 h-8 text-primary group-hover:text-cream-light transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-brown-dark dark:text-cream-light">Best Value</h3>
              <p className="text-brown-dark/80 dark:text-cream-light/80">
                Competitive pricing without compromising on quality or service
              </p>
            </div>

            {/* Fast Delivery Card */}
            <div className="group bg-cream/50 dark:bg-brown/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <svg className="w-8 h-8 text-primary group-hover:text-cream-light transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-brown-dark dark:text-cream-light">Swift Delivery</h3>
              <p className="text-brown-dark/80 dark:text-cream-light/80">
                Reliable nationwide delivery network ensuring timely order fulfillment
              </p>
            </div>

            {/* Customer Service Card */}
            <div className="group bg-cream/50 dark:bg-brown/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <svg className="w-8 h-8 text-primary group-hover:text-cream-light transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-brown-dark dark:text-cream-light">Expert Support</h3>
              <p className="text-brown-dark/80 dark:text-cream-light/80">
                Dedicated customer service team available to assist you 24/7
              </p>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 max-w-4xl mx-auto bg-cream/30 dark:bg-brown/30 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brown-dark dark:text-cream-light">Quality Guarantee</h4>
                  <p className="text-sm text-brown-dark/70 dark:text-cream-light/70">100% satisfaction or money back</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brown-dark dark:text-cream-light">Same Day Delivery</h4>
                  <p className="text-sm text-brown-dark/70 dark:text-cream-light/70">For orders before 2 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brown-dark dark:text-cream-light">Bulk Discounts</h4>
                  <p className="text-sm text-brown-dark/70 dark:text-cream-light/70">Special rates for large orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-cream-light via-cream to-cream-dark dark:from-brown-darkest dark:via-brown-dark dark:to-brown relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-light/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 relative">
          {/* Section Header - Updated colors */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-dark dark:text-primary-light font-medium mb-4 inline-block px-4 py-1 bg-primary/10 rounded-full">OUR STORY</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brown-dark dark:text-cream-light">
              About Kayce Modern Shop
            </h2>
            <p className="text-lg text-brown/80 dark:text-cream-light/90">
              A journey of excellence in premium biscuits and cookies since 2015
            </p>
          </div>

          {/* History Timeline - Updated colors */}
          <div className="relative max-w-4xl mx-auto mb-20">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary/30 dark:bg-primary/20"></div>
            
            {/* Update the timeline items with new background colors */}
            <div className="space-y-12">
              {/* 2015 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="bg-white/50 dark:bg-brown-dark/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-cream-dark/10 dark:border-brown-light/10">
                    <h3 className="text-xl font-serif font-bold mb-2 text-primary-dark dark:text-primary-light">2015</h3>
                    <p className="text-brown-dark/90 dark:text-cream-light/90">
                      Founded in Kigali with a vision to bring premium international biscuits to Rwanda
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-cream-light dark:border-brown-dark"></div>
                <div className="hidden md:block"></div>
              </div>

              {/* Update other timeline items similarly... */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block"></div>
                <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-cream-light dark:border-brown-dark"></div>
                <div>
                  <div className="bg-white/50 dark:bg-brown-dark/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-cream-dark/10 dark:border-brown-light/10">
                    <h3 className="text-xl font-serif font-bold mb-2 text-primary-dark dark:text-primary-light">2018</h3>
                    <p className="text-brown-dark/90 dark:text-cream-light/90">
                      Expanded operations nationwide, becoming Rwanda's leading premium biscuit supplier
                    </p>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="bg-white/50 dark:bg-brown-dark/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-cream-dark/10 dark:border-brown-light/10">
                    <h3 className="text-xl font-serif font-bold mb-2 text-primary-dark dark:text-primary-light">2023</h3>
                    <p className="text-brown-dark/90 dark:text-cream-light/90">
                      Achieved milestone of serving over 5,000 satisfied customers across the country
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-cream-light dark:border-brown-dark"></div>
                <div className="hidden md:block"></div>
              </div>
            </div>
          </div>

          {/* Core Values - Updated colors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <div className="text-center p-8 bg-white/30 dark:bg-brown-dark/30 backdrop-blur-sm rounded-xl border border-cream-dark/10 dark:border-brown-light/10 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 dark:bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-dark dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-brown-dark dark:text-cream-light">Excellence</h3>
              <p className="text-brown-dark/80 dark:text-cream-light/90">
                Committed to delivering the highest quality products and service in every interaction
              </p>
            </div>

            {/* Update other core values similarly... */}
            <div className="text-center p-8 bg-white/30 dark:bg-brown-dark/30 backdrop-blur-sm rounded-xl border border-cream-dark/10 dark:border-brown-light/10 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 dark:bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-dark dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-brown-dark dark:text-cream-light">Innovation</h3>
              <p className="text-brown-dark/80 dark:text-cream-light/90">
                Continuously exploring new products and ways to serve our customers better
              </p>
            </div>

            <div className="text-center p-8 bg-white/30 dark:bg-brown-dark/30 backdrop-blur-sm rounded-xl border border-cream-dark/10 dark:border-brown-light/10 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 dark:bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-dark dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-brown-dark dark:text-cream-light">Customer First</h3>
              <p className="text-brown-dark/80 dark:text-cream-light/90">
                Putting our customers' needs at the heart of everything we do
              </p>
            </div>
          </div>

          {/* Team Section - Updated colors */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-center mb-12 text-brown-dark dark:text-cream-light">
              Meet Our Leadership Team
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent group-hover:from-primary/70 transition-all duration-300"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" 
                    alt="John Smith" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-serif font-bold mb-2 text-brown-dark dark:text-cream-light">John Smith</h4>
                <p className="text-primary font-medium mb-3">Founder & CEO</p>
                <p className="text-sm text-brown-dark/80 dark:text-cream-light/80">
                  20+ years of experience in international food distribution
                </p>
              </div>

              {/* Update other team members similarly... */}
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent group-hover:from-primary/70 transition-all duration-300"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-serif font-bold mb-2 text-brown-dark dark:text-cream-light">Sarah Johnson</h4>
                <p className="text-primary font-medium mb-3">Operations Director</p>
                <p className="text-sm text-brown-dark/80 dark:text-cream-light/80">
                  Expert in supply chain management and quality control
                </p>
              </div>

              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent group-hover:from-primary/70 transition-all duration-300"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80" 
                    alt="Michael Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-serif font-bold mb-2 text-brown-dark dark:text-cream-light">Michael Chen</h4>
                <p className="text-primary font-medium mb-3">Customer Relations</p>
                <p className="text-sm text-brown-dark/80 dark:text-cream-light/80">
                  Dedicated to ensuring exceptional customer experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section id="products" className="py-16 md:py-24 bg-cream dark:bg-brown-dark">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brown-dark dark:text-cream-light">
              Our Premium Selection
            </h2>
            <p className="text-lg text-brown-dark/80 dark:text-cream-light/80">
              Discover our carefully curated collection of finest biscuits and cookies, crafted with premium ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
            {/* Premium Cookies Card */}
            <div className="bg-cream-light dark:bg-brown rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="relative h-48 sm:h-64 overflow-hidden">
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
              <div className="relative h-48 sm:h-64 overflow-hidden">
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
              <div className="relative h-48 sm:h-64 overflow-hidden">
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

      {/* Enhanced Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cream-light via-cream to-cream-dark dark:from-brown-darkest dark:via-brown-dark dark:to-brown relative overflow-hidden">
        {/* Enhanced Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-light/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 animate-pulse"></div>
        
        <div className="container mx-auto px-3 sm:px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-dark dark:text-primary-light font-medium mb-4 inline-block px-4 py-1 bg-primary/10 rounded-full">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-brown-dark dark:text-cream-light">
              What Our Customers Say
            </h2>
            <div className="w-20 h-1 bg-primary/50 dark:bg-primary/30 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-brown-dark/80 dark:text-cream-light/90">
              Discover why customers across Rwanda choose us for their premium biscuit needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Update all testimonial cards similarly */}
            <div className="bg-white/50 dark:bg-brown-dark/50 p-4 sm:p-8 rounded-2xl shadow-lg backdrop-blur-sm transform hover:-translate-y-1 transition-all hover:shadow-xl border border-cream-dark/10 dark:border-brown-light/10">
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 dark:border-primary/30 mx-auto">
                  {/* Keep existing image */}
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-cream-light px-4 py-1 rounded-full text-sm">
                  Restaurant Owner
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif font-bold text-lg mb-2 text-brown-dark dark:text-cream-light">Sarah Johnson</h3>
                <div className="flex gap-1 text-gold-light dark:text-gold-dark justify-center mb-4">
                  {/* Keep existing star rating */}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-brown-dark/80 dark:text-cream-light/90 italic">
                  "The quality and consistency of Kayce's products have made them our go-to supplier. Their customer service is exceptional!"
                </blockquote>
              </div>
            </div>

            {/* Apply same styling to other testimonial cards */}
            <div className="bg-white/50 dark:bg-brown-dark/50 p-4 sm:p-8 rounded-2xl shadow-lg backdrop-blur-sm transform hover:-translate-y-1 transition-all hover:shadow-xl border border-cream-dark/10 dark:border-brown-light/10">
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 dark:border-primary/30 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" 
                    alt="Michael Chang" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-cream-light px-4 py-1 rounded-full text-sm">
                  Corporate Client
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif font-bold text-lg mb-2 text-brown-dark dark:text-cream-light">Michael Chang</h3>
                <div className="flex gap-1 text-gold-light dark:text-gold-dark justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-brown-dark/80 dark:text-cream-light/90 italic">
                  "Their gift collections are perfect for our corporate events. The presentation and taste never fail to impress our clients and partners."
                </blockquote>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-brown-dark/50 p-4 sm:p-8 rounded-2xl shadow-lg backdrop-blur-sm transform hover:-translate-y-1 transition-all hover:shadow-xl border border-cream-dark/10 dark:border-brown-light/10">
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 dark:border-primary/30 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80" 
                    alt="Emma Rodriguez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-cream-light px-4 py-1 rounded-full text-sm">
                  Event Planner
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif font-bold text-lg mb-2 text-brown-dark dark:text-cream-light">Emma Rodriguez</h3>
                <div className="flex gap-1 text-gold-light dark:text-gold-dark justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-brown-dark/80 dark:text-cream-light/90 italic">
                  "The variety and quality of their products are unmatched. Their team always goes above and beyond with their service!"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Enhanced Partner Logos Section */}
          <div className="mt-20 pt-16 border-t border-brown-dark/10 dark:border-cream-light/10">
            <div className="text-center mb-12">
              <span className="text-primary-dark dark:text-primary-light font-medium mb-4 inline-block">OUR PARTNERS</span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-brown-dark dark:text-cream-light mb-4">
                Trusted by Leading Businesses
              </h3>
              <div className="w-16 h-1 bg-primary/50 dark:bg-primary/30 mx-auto"></div>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12">
              {/* Enhanced Partner Logo Items */}
              <div className="group w-1/3 sm:w-auto">
                <img 
                  src="https://placehold.co/180x60/d4c3b3/6b4423?text=PARTNER+1" 
                  alt="Partner 1" 
                  className="h-8 sm:h-12 md:h-14 w-auto"
                />
              </div>
              <div className="group w-1/3 sm:w-auto">
                <img 
                  src="https://placehold.co/180x60/d4c3b3/6b4423?text=PARTNER+2" 
                  alt="Partner 2" 
                  className="h-8 sm:h-12 md:h-14 w-auto"
                />
              </div>
              <div className="group w-1/3 sm:w-auto">
                <img 
                  src="https://placehold.co/180x60/d4c3b3/6b4423?text=PARTNER+3" 
                  alt="Partner 3" 
                  className="h-8 sm:h-12 md:h-14 w-auto"
                />
              </div>
              <div className="group w-1/3 sm:w-auto">
                <img 
                  src="https://placehold.co/180x60/d4c3b3/6b4423?text=PARTNER+4" 
                  alt="Partner 4" 
                  className="h-8 sm:h-12 md:h-14 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-cream-light dark:bg-brown-darkest relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-light/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-3 sm:px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium mb-4 inline-block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brown-dark dark:text-cream-light">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-brown-dark/80 dark:text-cream-light/80">
              Find answers to commonly asked questions about our products and services
            </p>
          </div>

          <div className="max-w-[95%] sm:max-w-3xl mx-auto space-y-2 sm:space-y-4">
            {[
              {
                question: "Where do you source your products?",
                answer: "We import our premium biscuits and cookies from renowned manufacturers in Europe and Asia, ensuring the highest quality standards. Each product is carefully selected and undergoes strict quality control before reaching our customers."
              },
              {
                question: "Do you offer bulk discounts?",
                answer: "Yes! We offer attractive discounts for bulk orders. The discount rate varies based on order quantity. For corporate orders and large events, please contact our sales team for a customized quote."
              },
              {
                question: "What areas do you deliver to?",
                answer: "We provide nationwide delivery across Rwanda, with same-day delivery available in Kigali for orders placed before 2 PM. Delivery times for other regions typically range from 1-3 business days."
              },
              {
                question: "How can I place an order?",
                answer: "You can place an order through multiple channels: Call us directly, email us, use our website contact form, or visit our shop in Kimihurura. For bulk orders, we recommend contacting our sales team directly to discuss your requirements."
              },
              {
                question: "What is your return policy?",
                answer: "We have a 100% satisfaction guarantee. If you're not satisfied with your purchase, please contact us within 24 hours of delivery, and we'll replace the product or offer a full refund."
              },
              {
                question: "Do you offer custom packaging for events?",
                answer: "Yes, we provide custom packaging solutions for corporate events, weddings, and special occasions. Contact us at least one week in advance to discuss your customization requirements."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-cream/50 dark:bg-brown/50 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={activeQuestion === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-serif font-bold text-lg text-brown-dark dark:text-cream-light">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-primary transition-transform duration-300 ${
                      activeQuestion === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  ref={el => faqRefs.current[index] = el}
                  className={`transition-all duration-300 ease-in-out overflow-hidden`}
                  style={{
                    maxHeight: activeQuestion === index ? `${faqRefs.current[index]?.scrollHeight}px` : '0',
                    opacity: activeQuestion === index ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-4">
                    <p className="text-brown-dark/80 dark:text-cream-light/80">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help */}
          <div className="mt-12 text-center">
            <p className="text-brown-dark/80 dark:text-cream-light/80 mb-4">
              Still have questions? We're here to help!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              Contact our support team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Refined CTA Section - Stats Removed */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brown-darkest/95 to-brown-dark/90"></div>
          <img 
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=2070&q=80" 
            alt="Background" 
            className="w-full h-full object-cover object-center scale-110"
          />
        </div>

        {/* Enhanced glass morphism overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-brown-darkest/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Refined decorative element */}
            <div className="inline-flex items-center gap-3 mb-8 bg-primary/20 px-6 py-2 rounded-full backdrop-blur-sm border border-cream-light/10">
              <span className="text-cream-light/90 uppercase text-sm tracking-wider font-medium">Experience Excellence</span>
            </div>

            {/* Main content with enhanced typography */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream-light mb-8 leading-tight">
              Elevate Your<br className="hidden sm:block"/>Moments with Us
            </h2>
            <p className="text-lg md:text-xl text-cream-light/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust us for their premium biscuit and cookie needs.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary-dark text-cream-light rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group transform hover:-translate-y-0.5"
              >
                <span className="mr-2">Get Started Today</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 border-2 border-cream-light/80 text-cream-light hover:bg-cream-light/10 rounded-xl transition-all duration-300 group transform hover:-translate-y-0.5"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Contact Section */}
      <section id="contact" className="py-20 bg-cream-light dark:bg-brown-darkest">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-brown-dark dark:text-cream-light">
              Contact Us
            </h2>
            <p className="text-brown-dark/80 dark:text-cream-light/80">
              Get in touch with us for any questions or inquiries
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Quick Contact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <a 
                href="mailto:contact@kayceshop.com" 
                className="flex flex-col items-center p-6 rounded-xl hover:bg-cream/50 dark:hover:bg-brown/50 transition-colors"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-brown-dark dark:text-cream-light font-medium">Email Us</span>
                <span className="text-sm text-brown-dark/60 dark:text-cream-light/60">contact@kayceshop.com</span>
              </a>

              <a 
                href="tel:+250788123456" 
                className="flex flex-col items-center p-6 rounded-xl hover:bg-cream/50 dark:hover:bg-brown/50 transition-colors"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-brown-dark dark:text-cream-light font-medium">Call Us</span>
                <span className="text-sm text-brown-dark/60 dark:text-cream-light/60">+250 788 123 456</span>
              </a>

              <div className="flex flex-col items-center p-6 rounded-xl hover:bg-cream/50 dark:hover:bg-brown/50 transition-colors">
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-brown-dark dark:text-cream-light font-medium">Visit Us</span>
                <span className="text-sm text-brown-dark/60 dark:text-cream-light/60 text-center">KG 123 St, Kimihurura<br/>Kigali, Rwanda</span>
              </div>
            </div>

            {/* Minimal Contact Form */}
            <form className="space-y-4 sm:space-y-6 bg-cream/50 dark:bg-brown/50 p-3 sm:p-6 md:p-8 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-cream-light dark:bg-brown-dark text-brown-dark dark:text-cream-light border-none focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-cream-light dark:bg-brown-dark text-brown-dark dark:text-cream-light border-none focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-cream-light dark:bg-brown-dark text-brown-dark dark:text-cream-light border-none focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-cream-light rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
              <a 
                href="https://facebook.com" 
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-cream-light flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.55V10.24H18.77V14.47H14.55V27.93H9.28V14.47H6V10.24H9.28V7.46C9.28,4.91 10.96,2.77 14.55,2.77H18.77V7.46M12,0C5.37,0 0,5.37 0,12C0,18.63 5.37,24 12,24C18.63,24 24,18.63 24,12C24,5.37 18.63,0 12,0Z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-cream-light flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,0C5.37,0 0,5.37 0,12C0,18.63 5.37,24 12,24C18.63,24 24,18.63 24,12C24,5.37 18.63,0 12,0M17.75,2H6.25C3.9,2 2,3.9 2,6.25V17.75C2,20.1 3.9,22 6.25,22H17.75C20.1,22 22,20.1 22,17.75V6.25C22,3.9 20.1,2 17.75,2M12,7.07C14.84,7.07 17.13,9.36 17.13,12.2C17.13,15.04 14.84,17.33 12,17.33C9.16,17.33 6.87,15.04 6.87,12.2C6.87,9.36 9.16,7.07 12,7.07M12,15.82C14.03,15.82 15.67,14.18 15.67,12.15C15.67,10.12 14.03,8.48 12,8.48C9.97,8.48 8.33,10.12 8.33,12.15C8.33,14.18 9.97,15.82 12,15.82Z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-cream-light flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-brown-darkest text-cream-light/80 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Company Info */}
            <div>
              <a href="/" className="text-2xl font-serif font-bold text-primary hover:text-primary-dark transition-colors inline-block mb-6">
                Kayce Shop
              </a>
              <p className="text-sm leading-relaxed mb-6">
                Premium biscuits and cookies supplier in Rwanda, delivering excellence in every bite since 2015.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com" 
                  className="w-8 h-8 rounded-full bg-brown-dark hover:bg-primary transition-colors flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.55V10.24H18.77V14.47H14.55V27.93H9.28V14.47H6V10.24H9.28V7.46C9.28,4.91 10.96,2.77 14.55,2.77H18.77V7.46M12,0C5.37,0 0,5.37 0,12C0,18.63 5.37,24 12,24C18.63,24 24,18.63 24,12C24,5.37 18.63,0 12,0Z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  className="w-8 h-8 rounded-full bg-brown-dark hover:bg-primary transition-colors flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,0C5.37,0 0,5.37 0,12C0,18.63 5.37,24 12,24C18.63,24 24,18.63 24,12C24,5.37 18.63,0 12,0M17.75,2H6.25C3.9,2 2,3.9 2,6.25V17.75C2,20.1 3.9,22 6.25,22H17.75C20.1,22 22,20.1 22,17.75V6.25C22,3.9 20.1,2 17.75,2M12,7.07C14.84,7.07 17.13,9.36 17.13,12.2C17.13,15.04 14.84,17.33 12,17.33C9.16,17.33 6.87,15.04 6.87,12.2C6.87,9.36 9.16,7.07 12,7.07M12,15.82C14.03,15.82 15.67,14.18 15.67,12.15C15.67,10.12 14.03,8.48 12,8.48C9.97,8.48 8.33,10.12 8.33,12.15C8.33,14.18 9.97,15.82 12,15.82Z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  className="w-8 h-8 rounded-full bg-brown-dark hover:bg-primary transition-colors flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-serif font-bold text-cream-light mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#who-we-are" className="hover:text-primary transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-primary transition-colors">Our Products</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">Contact Us</a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-serif font-bold text-cream-light mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>KG 123 St, Kimihurura, Kigali, Rwanda</span>
                </li>
                <li>
                  <a href="tel:+250788123456" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+250 788 123 456</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@kayceshop.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>contact@kayceshop.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-lg font-serif font-bold text-cream-light mb-6">Opening Hours</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-brown-dark/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="text-sm">
                © {new Date().getFullYear()} Kayce Modern Shop. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm md:justify-end">
                <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="/cookies-policy" className="hover:text-primary transition-colors">Cookies Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* End of content */}
    </div>
  );
};

export default App;
