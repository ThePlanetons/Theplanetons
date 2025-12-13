import Hero from './Hero';
import Services from '../services/Services';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Work from '../works/works';

function Landing() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Work />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default Landing;