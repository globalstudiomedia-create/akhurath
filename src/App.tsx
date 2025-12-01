import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import AviationPrograms from './components/AviationPrograms';
import TechPrograms from './components/TechPrograms';
import WhyAkhurath from './components/WhyAkhurath';
import SuccessStats from './components/SuccessStats';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="aviation">
        <AviationPrograms />
      </div>
      <div id="tech">
        <TechPrograms />
      </div>
      <div id="cyber">
        <WhyAkhurath />
      </div>
      <div id="admissions">
        <SuccessStats />
      </div>
      <div id="placements">
        <Testimonials />
      </div>
      <div id="contact">
        <CTABanner />
      </div>
      <Footer />
    </div>
  );
}

export default App;
