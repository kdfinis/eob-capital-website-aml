
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

const complianceItems = [
  "AMLD5 & AMLD6 Compliance",
  "GDPR-compliant Data Protection",
  "CSSF Circular 18/698 + 20/747 Alignment",
  "EIOPA Standards Integration",
  "ESMA Guidelines Implementation"
];

const RegulatorySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current?.classList.add('opacity-100');
          sectionRef.current?.classList.remove('opacity-0', 'translate-y-10');
          
          const items = itemsRef.current?.children;
          if (items) {
            Array.from(items).forEach((item, i) => {
              setTimeout(() => {
                item.classList.add('opacity-100');
                item.classList.remove('opacity-0', 'translate-x-4');
              }, 300 + i * 150);
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="regulatory" className="py-20 px-6 bg-gradient-to-b from-burgundy-950 to-burgundy-900 text-light-500">
      <div 
        ref={sectionRef}
        className="container max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-garamond mb-4 text-light-300">
            Regulatory Confidence
          </h2>
          <p className="text-light-500 opacity-90">
            Built to meet the expectations of European regulators.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ul ref={itemsRef} className="space-y-4">
            {complianceItems.map((item, index) => (
              <li 
                key={index} 
                className={cn(
                  "flex items-center gap-3 opacity-0 translate-x-4 transition-all duration-500",
                  "bg-burgundy-900/60 p-6 border border-burgundy-800 shadow-glow-sm luxury-card"
                )}
              >
                <CheckCircle2 size={20} className="text-light-300 flex-shrink-0" />
                <span className="text-light-400">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 text-center p-8 border-t border-burgundy-800/50">
            <p className="text-light-400 italic">
              "Our infrastructure is built from the ground up to align with European regulatory frameworks."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatorySection;
