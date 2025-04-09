
import React, { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { ShieldCheck, Wallet, LineChart } from 'lucide-react';
import WaitlistForm from './WaitlistForm';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProductsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const amlSectionRef = useRef<HTMLDivElement>(null);
  const waitlistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    [sectionRef.current, amlSectionRef.current, waitlistRef.current].forEach(el => {
      if (el) observer.observe(el);
    });

    const cardsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const cards = cardsRef.current?.children;
          if (cards) {
            Array.from(cards).forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, i * 200);
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }

    return () => {
      [sectionRef.current, amlSectionRef.current, waitlistRef.current].forEach(el => {
        if (el) observer.unobserve(el);
      });
      
      if (cardsRef.current) cardsObserver.unobserve(cardsRef.current);
    };
  }, []);

  return (
    <section id="products" className="py-20 px-6 bg-ivory-200">
      <div 
        ref={sectionRef}
        className="container max-w-6xl mx-auto opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-garamond text-navy-700 mb-4 relative">
            <span className="relative z-10">Our Solutions</span>
            <span className="absolute w-36 h-1 bg-golden left-1/2 transform -translate-x-1/2 bottom-0 z-0"></span>
          </h2>
          <p className="text-navy-600">
            Comprehensive regulatory infrastructure designed for European financial institutions.
          </p>
        </div>
        
        {/* Featured AML Tool Section */}
        <div 
          ref={amlSectionRef}
          className="mb-16 opacity-0 transition-opacity duration-1000"
        >
          <div className="floating-card p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:w-2/3">
                <div className="mb-6 text-golden">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-2xl md:text-3xl font-garamond text-navy-700 mb-4">AML Tool</h3>
                <p className="text-navy-600 mb-6">
                  The fastest path to regulatory clarity. AML onboarding built for cross-border funds, private wealth desks, and pension aggregators. Our multi-agent architecture ensures compliance with the latest European regulations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="text-golden mt-1">
                      <ShieldCheck size={18} />
                    </div>
                    <span className="text-navy-700">Document processing with AI-based OCR</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-golden mt-1">
                      <ShieldCheck size={18} />
                    </div>
                    <span className="text-navy-700">Intelligent risk scoring engine</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-golden mt-1">
                      <ShieldCheck size={18} />
                    </div>
                    <span className="text-navy-700">CSSF & AMLD6 compliant workflows</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-golden hover:bg-golden-600 text-white"
                    asChild
                  >
                    <Link to="/aml-tool">
                      Explore AML Tool
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-navy-700 text-navy-700 hover:bg-navy-50"
                    asChild
                  >
                    <Link to="/aml-tool#waitlist">
                      Join Early Access
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 bg-ivory-100 rounded flex items-center justify-center p-6">
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 bg-gradient-radial from-golden-400/10 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShieldCheck size={120} className="text-golden-400/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8"
        >
          <ProductCard 
            title="PEPP"
            description="Pan-European Pension Product onboarding aligned with 2023 EIOPA standards. Pension compliance that scales."
            icon={<Wallet size={32} />}
            linkText="Explore PEPP"
            link="/pepp"
            delay="200ms"
          />
          
          <ProductCard 
            title="ELTIF"
            description="Investor suitability, documentation, and sustainability thresholds—all in one. The complete ELTIF onboarding engine."
            icon={<LineChart size={32} />}
            linkText="Explore ELTIF"
            link="/eltif"
            delay="400ms"
          />
        </div>

        <div 
          ref={waitlistRef} 
          className="mt-16 max-w-xl mx-auto opacity-0"
        >
          <WaitlistForm productName="EOB Capital Products" buttonVariant="default" className="shadow-card-hover floating-card" />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
