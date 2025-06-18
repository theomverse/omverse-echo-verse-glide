
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AppsSection from '../components/AppsSection';
import ConnectSection from '../components/ConnectSection';
import Footer from '../components/Footer';

const Index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scrolling behavior
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <div ref={scrollContainerRef} className="relative overflow-x-hidden">
      <Header />
      <HeroSection />
      <AppsSection />
      <ConnectSection />
      <Footer />
    </div>
  );
};

export default Index;
