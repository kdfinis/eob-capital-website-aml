
import React, { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { ShieldCheck, Wallet, LineChart } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

const ProductsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const waitlistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current?.classList.add('opacity-100');
          sectionRef.current?.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );

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

    const waitlistObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          waitlistRef.current?.classList.add('animate-fade-in');
          waitlistRef.current?.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }

    if (waitlistRef.current) {
      waitlistObserver.observe(waitlistRef.current);
    }

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      if (cardsRef.current) cardsObserver.unobserve(cardsRef.current);
      if (waitlistRef.current) waitlistObserver.unobserve(waitlistRef.current);
    };
  }, []);

  return (
    <section id="products" className="py-20 px-6 bg-gradient-to-b from-dark-900 to-dark-800">
      <div 
        ref={sectionRef}
        className="container max-w-6xl mx-auto opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-garamond text-burgundy-700 mb-4 relative">
            <span className="relative z-10">Our Solutions</span>
            <span className="absolute w-36 h-6 bg-burgundy-900/10 left-1/2 transform -translate-x-1/2 bottom-0 z-0"></span>
          </h2>
          <p className="text-light-500">
            Comprehensive regulatory infrastructure designed for European financial institutions.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8"
        >
          <ProductCard 
            title="AML Tool"
            description="The fastest path to regulatory clarity. AML onboarding built for cross-border funds, private wealth desks, and pension aggregators."
            icon={<ShieldCheck size={32} />}
            linkText="Explore AML Tool"
            link="/aml-tool"
          />
          
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
          <WaitlistForm productName="EOB Capital Products" buttonVariant="default" className="shadow-card-hover" />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
