

import Footer from '../components/footer/Footer';
import Hero from '../components/landing/Hero';
import Navbar from '../components/navbar/Navbar';
import ProjectsSection from './sections/ProjectsSection';
import SocialSection from './sections/SocialSection';



const Projects = () => {


  return (
    <div className="min-h-screen bg-white">
    <Navbar></Navbar>
    <Hero></Hero>
    <ProjectsSection />
    <SocialSection />
    <Footer></Footer>
  </div>
  );
};

export default Projects;