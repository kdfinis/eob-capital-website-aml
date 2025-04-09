
import React, { useEffect } from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Home/HeroSection';
import VisionSection from '@/components/Home/VisionSection';
import ProductsSection from '@/components/Home/ProductsSection';
import RegulatorySection from '@/components/Home/RegulatorySection';
import ContactSection from '@/components/Home/ContactSection';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Set document title
    document.title = "EOB CAP | Regulatory Infrastructure for Capital";
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <VisionSection />
        <ProductsSection />
        <RegulatorySection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
