
import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  "GDPR-native privacy architecture",
  "AMLD5 + AMLD6 compliant workflows",
  "CSSF-aligned audit logs",
  "Multi-entity onboarding (funds, pension clients)"
];

const VisionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current?.classList.add('opacity-100');
          sectionRef.current?.classList.remove('opacity-0', 'translate-y-10');
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
    <section id="vision" className="py-20 px-6 bg-white">
      <div 
        ref={sectionRef}
        className="container max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-garamond text-burgundy-800">
              Built for Institutions. <br/>Ready for Auditors.
            </h2>
            <p className="text-slate-700 text-lg">
              EOB CAP is engineered for European capital frameworks, from Luxembourg to Lisbon.
              Our solutions bridge the gap between regulatory complexity and operational efficiency.
            </p>
            <div className="pt-6">
              <div className="h-0.5 w-16 bg-burgundy-800" />
            </div>
          </div>

          <div className="bg-ivory-100 p-8 border border-slate-200">
            <h3 className="font-garamond text-2xl mb-6 text-slate-800">Infrastructure Features</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-burgundy-800 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
