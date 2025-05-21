import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            <a href="#" className="text-black hover:text-gray-600 transition-colors">Services</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">Pricing</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">About</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">Insights</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-black hover:text-gray-600 transition-colors">Login</button>
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-800 transition-colors">
              Get Started
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="relative">
        <div className="max-w-8xl mx-auto px-6 pt-32 text-center">
          <motion.h1 
            className="text-[180px] font-bold leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            THE PLANET 9.
          </motion.h1>

          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                <img src="https://i.pravatar.cc/40?img=2" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                <img src="https://i.pravatar.cc/40?img=3" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
              </div>
              <div>
                <div className="text-2xl font-bold">2M+</div>
                <div className="text-gray-600">World active user</div>
              </div>
            </div>

            <div className="flex justify-end space-x-8 pt-26">
              <div className="text-gray-600">
                <div>Web based</div>
                <div className="text-sm">/01</div>
              </div>
              <div className="text-gray-600">
                <div>Collaborative</div>
                <div className="text-sm">/02</div>
              </div>
              <div className="text-gray-600">
                <div>Real-time</div>
                <div className="text-sm">/03</div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl max-w-md">
                The design software that keeps your flow with AI tools and built-in graphics
              </h2>
            </div>
            <div className="flex justify-end">
              {/* <button className="bg-neon text-black w-32 h-32 rounded-full flex items-center justify-center text-sm hover:bg-opacity-90 transition-colors">
                How it works?
              </button> */}
            </div>
          </div>
        </div>

        <div className="absolute pt-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10">
          <Spline scene="https://prod.spline.design/38H6RUsMjxrrn0bi/scene.splinecode" />
        </div>
      </main>
    </div>
  );
};

export default App;