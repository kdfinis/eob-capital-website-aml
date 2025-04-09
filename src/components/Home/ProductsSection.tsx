
import React, { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { ShieldCheck, Wallet, LineChart } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      if (cardsRef.current) cardsObserver.unobserve(cardsRef.current);
    };
  }, []);

  return (
    <section id="products" className="py-20 px-6 bg-ivory-100">
      <div 
        ref={sectionRef}
        className="container max-w-6xl mx-auto opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-garamond text-burgundy-800 mb-4">
            Our Solutions
          </h2>
          <p className="text-slate-700">
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
      </div>
    </section>
  );
};

export default ProductsSection;
