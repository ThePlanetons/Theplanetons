
import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, User, MessageSquare, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  // Change ref type from HTMLFormElement to HTMLDivElement
  const formRef = useRef<HTMLDivElement>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Handle form visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      console.log(formData);
      setFormStatus('success');

      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  // Animation for form elements, delay based on element index
  const getAnimationStyle = (index: number): React.CSSProperties => {
    const delay = 0.1 + index * 0.1;
    return {
      transform: `translateY(${isVisible ? '0' : '30px'})`,
      opacity: isVisible ? 1 : 0,
      transition: `transform 0.6s ease-out ${delay}s, opacity 0.6s ease-out ${delay}s`
    };
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="text-center mb-16"
          style={{
            transform: `translateY(${isVisible ? '0' : '30px'})`,
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
          }}
        >
          <div className="inline-block mb-2">
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wide">
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Contact us today for a free consultation and bring your vision to life.
          </p>
        </div>

        <div
          className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto"
          style={{
            transform: `translateY(${isVisible ? '0' : '30px'})`,
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.6s ease-out 0.2s, opacity 0.6s ease-out 0.2s'
          }}
        >
          {/* Contact info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">How to reach us</h3>
                  <p className="text-gray-600">Have a project in mind? Let's discuss how TechCraft can help you achieve your goals.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Mail size={18} />
                    </div>
                    <a href="mailto:theplanet9official@gmail.com" className="text-gray-700 hover:text-primary transition-colors">
                      theplanet9official@gmail.com
                    </a>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-gray-500 text-sm">
                      Our team is available Monday through Friday, 9am to 5pm. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form container */}
          <div
            className="md:col-span-3"
            ref={formRef}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <Check className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div style={getAnimationStyle(0)}>
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className={`absolute left-4 transition-all duration-200 ${focusedField === 'name' || formData.name
                            ? '-top-2 text-xs bg-white px-1 text-primary'
                            : 'top-3 text-gray-500'
                          }`}
                      >
                        Your Name
                      </label>
                      <div className="flex rounded-lg border border-gray-300 overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                        <div className="bg-gray-50 p-3 flex items-center justify-center">
                          <User size={1} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          className="block w-full py-3 px-4 border-0 focus:ring-0 focus:outline-none"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div style={getAnimationStyle(1)}>
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className={`absolute left-4 transition-all duration-200 ${focusedField === 'email' || formData.email
                            ? '-top-2 text-xs bg-white px-1 text-primary'
                            : 'top-3 text-gray-500'
                          }`}
                      >
                        Email Address
                      </label>
                      <div className="flex rounded-lg border border-gray-300 overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                        <div className="bg-gray-50 p-3 flex items-center justify-center">
                          <Mail size={1} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          className="block w-full py-3 px-4 border-0 focus:ring-0 focus:outline-none"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div style={getAnimationStyle(2)}>
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className={`absolute left-4 transition-all duration-200 ${focusedField === 'message' || formData.message
                            ? '-top-2 text-xs bg-white px-1 text-primary'
                            : 'top-3 text-gray-500'
                          }`}
                      >
                        Your Message
                      </label>
                      <div className="flex rounded-lg border border-gray-300 overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                        <div className="bg-gray-50 p-3 flex items-center justify-center">
                          <MessageSquare size={1} className="text-gray-400" />
                        </div>
                        <textarea
                          id="message"
                          rows={4}
                          className="block w-full py-3 px-4 border-0 focus:ring-0 focus:outline-none"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div style={getAnimationStyle(3)}>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`w-full flex justify-center items-center bg-gradient-to-r from-primary to-orange-500 text-white px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-[1.02] ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
