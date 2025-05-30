import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Transform values for parallax effects


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="relative"></div>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500"
        style={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center">


            {/* Navigation Links */}
            <div
              style={{ backgroundColor: '#fba907' }}
              className="flex space-x-8 pl-10 pt-2 pb-2 pr-10 rounded-lg"

            >
              <a href="#" className="text-white hover:text-gray-600 transition-colors">Services</a>
              <a href="#" className="text-white hover:text-gray-600 transition-colors">Pricing</a>
              <a href="#" className="text-white hover:text-gray-600 transition-colors">About</a>
              <a href="#" className="text-white hover:text-gray-600 transition-colors">Insights</a>
              <a href="#" className="text-white hover:text-gray-600 transition-colors">Contact</a>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-black  hover:bg-yellow-500 hover:text-gray-600 transition-colors">Login</button>
            <button
              style={{ backgroundColor: '#fba907' }}
              className="text-white px-4 py-2 rounded-lg flex items-center transition-colors"
            >
              Get Started
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;