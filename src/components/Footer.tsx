import '../styles.css';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-2xl font-bold">TechCraft</span>
            </div>
            
            <p className="text-gray-400 text-sm">
              {/* Creating innovative digital solutions for businesses of all sizes.
              We transform ideas into powerful web and mobile experiences. */}
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors inline-block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {['Web Applications', 'Mobile Development', 'UI/UX Design', 'Digital Marketing'].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-gray-400 hover:text-primary transition-colors inline-block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1" />
                <span className="text-gray-400">
                  Main road, Surandai<br />
                  Tenkasi, TN
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:hello@techcraft.com" className="text-gray-400 hover:text-primary transition-colors">
                  theplanet9official.gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {year} TechCraft. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;