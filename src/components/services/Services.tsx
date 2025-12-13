import React, { useEffect, useState, useRef } from 'react';
import { Globe, Smartphone, Palette, TrendingUp } from 'lucide-react';

interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: <Globe />,
    title: 'Web Applications',
    description: 'Custom web applications built with modern technologies and best practices.',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: <Smartphone />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    color: 'from-primary to-purple-500'
  },
  {
    icon: <Palette />,
    title: 'UI/UX Design',
    description: 'User-centered design that creates engaging and intuitive experiences.',
    color: 'from-pink-500 to-rose-400'
  },
  {
    icon: <TrendingUp />,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to grow your online presence.',
    color: 'from-amber-500 to-yellow-400'
  }
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight - 100 && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHeaderStyles = (): React.CSSProperties => ({
    transform: `translateY(${isVisible ? '0' : '30px'})`,
    opacity: isVisible ? 1 : 0,
    transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
  });

  const getCardStyles = (index: number): React.CSSProperties => {
    const delay = index * 0.1;
    return {
      transform: `translateY(${isVisible ? '0' : '50px'})`,
      opacity: isVisible ? 1 : 0,
      transition: `transform 0.7s ease-out ${delay}s, opacity 0.7s ease-out ${delay}s`
    };
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-blue-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-300/10 to-pink-300/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20" style={getHeaderStyles()}>
          <div className="inline-block mb-2">
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wide">
              What We Do
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group"
              style={getCardStyles(index)}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div
                className={`bg-white p-8 rounded-2xl shadow-md transition-all duration-300 h-full border ${
                  activeService === index ? 'border-primary' : 'border-gray-100'
                } relative z-10 overflow-hidden group-hover:shadow-xl`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                  <div className="text-white">{service.icon}</div>
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                  {service.icon}
                </div>

                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 text-center"
          style={{
            transform: `translateY(${isVisible ? '0' : '30px'})`,
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.8s ease-out 0.4s, opacity 0.8s ease-out 0.4s'
          }}
        >
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-orange-500 text-white font-medium rounded-full shadow-md hover:shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
