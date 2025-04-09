// import '../styles.css'
// import  { useEffect, useState } from 'react';

// const projects = [
//   {
//     title: 'E-Commerce Platform',
//     description: 'A modern e-commerce solution with real-time inventory management.',
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
//   },
//   {
//     title: 'Healthcare App',
//     description: 'Mobile application for patient care and medical record management.',
//     image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
//   },
//   {
//     title: 'Financial Dashboard',
//     description: 'Real-time analytics dashboard for financial data visualization.',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
//   },
// ];

// const Projects = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section id="projects" className="py-20 overflow-hidden">
//       {projects.map((project, index) => (
//         <div 
//           key={index}
//           className="relative min-h-[50vh] flex items-center mb-4 last:mb-0"
//         >
//           <div
//             className="absolute inset-0 z-0"
//             style={{
//               backgroundImage: `url(${project.image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundAttachment: 'fixed',
//               filter: 'brightness(0.3)',
//             }}
//           />
//           <div 
//             className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
//             style={{
//               transform: `translateY(${(scrollPosition - (index * 400)) * 0.1}px)`,
//             }}
//           >
//             <div className="max-w-2xl">
//               <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
//               <p className="text-lg text-gray-200">{project.description}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Projects;