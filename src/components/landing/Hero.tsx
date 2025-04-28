
import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      
      // Check if hero section is visible
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    // Set initial visibility
    setIsVisible(true);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax values with easing for smoother effect
  const calculateParallax = (factor: number) => {
    return scrollPosition * factor * 0.5;
  };
  
  const textParallaxStyles = {
    heading1: { transform: `translateY(${calculateParallax(-0.3)}px)`, transition: 'transform 0.3s ease-out' },
    heading2: { transform: `translateY(${calculateParallax(-0.2)}px)`, transition: 'transform 0.3s ease-out' },
    heading3: { transform: `translateY(${calculateParallax(-0.1)}px)`, transition: 'transform 0.3s ease-out' },
    paragraph: { transform: `translateX(${calculateParallax(0.05)}px)`, transition: 'transform 0.3s ease-out' },
    button: { transform: `translateX(${calculateParallax(0.02)}px)`, transition: 'transform 0.3s ease-out' }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Background with animated particles */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 25px 25px, #ffffff 1%, transparent 0%)`,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollPosition * 0.1}px)` 
        }} />
      </div>
      
      {/* Animated gradient orb */}
      <div 
        className="absolute rounded-full w-96 h-96 bg-gradient-to-r from-primary/30 to-blue-500/30 blur-3xl"
        style={{ 
          top: '20%', 
          right: '5%',
          transform: `translate(${calculateParallax(-0.1)}px, ${calculateParallax(0.05)}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />
      
      <div 
        className="absolute rounded-full w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
        style={{ 
          bottom: '15%', 
          left: '10%',
          transform: `translate(${calculateParallax(0.15)}px, ${calculateParallax(-0.05)}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className={`overflow-hidden transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 
              className="text-6xl md:text-8xl font-bold text-white mb-4 opacity-95"
              style={textParallaxStyles.heading1}
            >
              Crafting
            </h1>
          </div>
          
          <div className={`overflow-hidden transition-opacity duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 
              className="text-6xl md:text-8xl font-bold text-primary mb-4 bg-clip-text text-transparent bg-blue-500"
              style={textParallaxStyles.heading2}
            >
              Digital
            </h1>
          </div>
          
          <div className={`overflow-hidden transition-opacity duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 
              className="text-6xl md:text-8xl font-bold text-white mb-10 opacity-95"
              style={textParallaxStyles.heading3}
            >
              Excellence
            </h1>
          </div>
          
          <div 
            className={`prose prose-lg text-gray-300 mb-10 max-w-2xl transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={textParallaxStyles.paragraph}
          >
            <p className="text-xl leading-relaxed">
              We transform ideas into powerful digital solutions. Specializing in web applications,
              mobile development, and digital marketing that drives results.
            </p>
          </div>
          
          <div className={`transition-opacity duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <a 
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-primary to-blue-600 px-8 py-4 rounded-full text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 group"
              style={textParallaxStyles.button}
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
