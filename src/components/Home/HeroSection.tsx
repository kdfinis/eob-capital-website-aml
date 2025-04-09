
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }

    return () => {
      if (headlineRef.current) {
        observer.unobserve(headlineRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden bg-ivory-200"
    >
      {/* Background with subtle zoom effect */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2069')] bg-cover bg-center opacity-10 scale-105 animate-[zoomEffect_20s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-gradient-radial from-golden-400/10 to-transparent"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto z-10">
        <div className="floating-card max-w-3xl mx-auto text-center space-y-8 stagger-animation">
          <div className="mb-8 flex justify-center">
            <div className="brand-title">
              <span className="main">EOB</span>
              <span className="sub">Capital</span>
            </div>
          </div>
          
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-garamond font-medium text-navy-700 opacity-0 translate-y-6 transition-all duration-1000 shadow-glow-sm"
          >
            Regulatory Infrastructure for Tomorrow's Capital.
          </h1>
          
          <p className="text-lg md:text-xl text-navy-600 mt-6 max-w-2xl mx-auto">
            EOB Capital builds compliance and regulatory infrastructure for institutional funds and pension platforms across Europe.
          </p>
          
          <div className="pt-8">
            <div className="h-0.5 w-24 bg-golden mx-auto glow-effect animate-glow"></div>
          </div>
          
          <p className="text-sm uppercase tracking-wider text-navy-500 font-inter">
            Compliance reimagined. Capital respected.
          </p>

          <div className="pt-4">
            <Button className="bg-golden hover:bg-golden-600 text-white">
              Join Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
