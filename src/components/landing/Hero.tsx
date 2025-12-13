import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../navbar/Navbar';
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const scrollRef = useRef(null);

useGSAP(() => {
  const el = scrollRef.current;

  gsap.fromTo(
    el,
    {
      scale: 1,
      yPercent: 50,
    },
    {
      scale: 1, // or try 2.5 or 4 depending on your screen
      yPercent: -150,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: false,
      },
    }
  );
}, []);


  const { scrollY } = useScroll();

  // Transform values for parallax effects
  const contentOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <div className="relative">
      <Navbar />
      {/* Hero Section */}
      <div className="h-340 bg-white relative overflow-hidden">
        <main className="relative">
          <div className="max-w-8xl mx-auto px-6  text-center">
            {/* Main Title with GSAP ScrollTrigger */}
            <div className="relative z-20">
              <div className="absolute pt-120 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 overflow-auto">
              </div>
              <h4
                className="text-7xl md:text-[150px] font-mostculine font-bold leading-none"
                ref={scrollRef}
              >
                THE PLANET 9
              </h4>
            </div>

            {/* Content that fades out on scroll */}
            <motion.div
              style={{ opacity: contentOpacity }}
              className="relative z-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div></div>
                </div>

                <div className="flex justify-center md:justify-end space-x-8 pt-8 md:pt-26">
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

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl max-w-md mx-auto md:mx-0">
                    The design software that keeps your flow with AI tools and built-in graphics
                  </h2>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3D Scene with Parallax - Placeholder for Spline or other content */}
        </main>
      </div>
    </div>
  );
};

export default Hero;
