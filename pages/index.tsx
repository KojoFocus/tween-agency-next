// pages/index.tsx
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import DigitalServices from '../components/DigitalServices';
import WorkSection from '../components/WorkSection';
import PricingSection from '../components/PricingSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import '../public/styles/bootstrap-icons.css';
import '../public/styles/bootstrap.min.css';
import '../public/styles/magnific-popup.css';
import '../public/styles/tooplate-tween-agency.css';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DigitalServices />
      <WorkSection />
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
