import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background blur logic
      setIsScrolled(currentScrollY > 100);

      // Scroll direction logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left */}
        <div className="flex items-center">
          <div
            style={{ backgroundColor: '#f97316' }}
            className="flex space-x-8 px-10 py-2 rounded-lg"
          >
            <a className="text-white hover:text-gray-600">Services</a>
            <a className="text-white hover:text-gray-600">Pricing</a>
            <a className="text-white hover:text-gray-600">About</a>
            <a className="text-white hover:text-gray-600">Insights</a>
            <a className="text-white hover:text-gray-600">Contact</a>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <button className="text-black hover:text-gray-600">Login</button>
          <button
            style={{ backgroundColor: '#f97316' }}
            className="text-white px-4 py-2 rounded-lg flex items-center"
          >
            Get Started <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
