
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll events: add shadow when scrolled and detect active section
  useEffect(() => {
    const handleScroll = () => {
      // Apply background and shadow when scrolled beyond 10px
      setScrolled(window.scrollY > 10);
      
      // Check for the active section based on scroll position
      const sections = ['services', 'projects', 'about', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Debug: Uncomment below to log section positions
          // console.log('Section:', section, 'rect.top:', rect.top, 'rect.bottom:', rect.bottom);
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      // Update the active section state
      if (currentSection) {
       // setActiveSection(currentSection);
      } else {
        setActiveSection('');
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-[#8c52ff]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="group flex items-center">
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['services', 'projects', 'about'].map((section) => (
              <a
                key={section}
                href={`${section}`}
                className={`relative py-2 capitalize font-medium transition-colors duration-300 ${
                  activeSection === section
                    ? 'text-primary'
                    : scrolled
                    ? 'text-gray-900 hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <span>{section}</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === section ? 'w-full' : 'w-0'
                  }`}
                ></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r  text-white px-5 py-2.5 rounded-full font-medium shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-3 space-y-1">
            {['services', 'projects', 'about'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="block px-3 py-2.5 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg capitalize transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {section}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href="#contact"
                className="block w-full text-center bg-gradient-to-r from-primary to-blue-600 text-white px-3 py-2.5 rounded-lg font-medium transition-all hover:shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Debug Display: Uncomment to display the active section on screen */}
      
      {/* <div className="fixed top-0 right-0 m-4 p-2 bg-gray-800 text-white rounded">
        Active Section: {activeSection}
      </div> */}
     
    </nav>
  );
};

export default Navbar;
