import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhySection from './components/WhySection';
import EpisodesSection from './components/EpisodesSection';
import FeaturedGuests from './components/FeaturedGuests';
import WhyListen from './components/WhyListen';
import Statistics from './components/Statistics';
import VideoSection from './components/VideoSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './index.css'; // Make sure Tailwind is loaded

function App() {
  return (
    <div className="bg-[#080808] min-h-screen text-white font-inter selection:bg-[#D6001C]/30 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhySection />
        <EpisodesSection />
        <FeaturedGuests />
        <WhyListen />
        <Statistics />
        <VideoSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
