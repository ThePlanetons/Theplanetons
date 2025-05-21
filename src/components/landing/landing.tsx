// import Navbar from '../navbar/Navbar';
import Hero from './Hero';
import Services from '../services/Services';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

function Landing() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;