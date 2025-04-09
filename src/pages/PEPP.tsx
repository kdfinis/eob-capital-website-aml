
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import WaitlistForm from '@/components/Home/WaitlistForm';

const PEPP: React.FC = () => {
  useEffect(() => {
    document.title = "PEPP | EOB Capital";
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-ivory-200 text-navy-700">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Back to home */}
        <div className="container max-w-6xl mx-auto px-6 mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-navy-600 hover:text-golden transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-12 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="floating-card p-10 max-w-3xl animate-on-scroll opacity-0">
              <div className="brand-title mb-8">
                <span className="main">EOB</span>
                <span className="sub">Capital</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-garamond text-navy-700 mb-6">
                Pan-European Pension Product (PEPP)
              </h1>
              <p className="text-xl text-navy-600 mb-8">
                Regulatory onboarding module in development.
              </p>
              <div className="h-0.5 w-24 bg-golden mb-8 shadow-glow-sm"></div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="floating-card p-10">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <div className="p-8 bg-ivory-100 rounded flex items-center justify-center">
                    <FileText size={120} className="text-golden-400/50" />
                  </div>
                </div>
                <div className="md:w-1/2 space-y-6">
                  <h2 className="text-3xl font-garamond text-navy-700">Coming Soon</h2>
                  <p className="text-navy-600">
                    Our Pan-European Pension Product (PEPP) module is currently in development. 
                    This comprehensive solution will provide pension compliance tools aligned 
                    with 2023 EIOPA standards.
                  </p>
                  <div className="space-y-4">
                    <p className="text-navy-700 font-medium">Key features will include:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-golden"></div>
                        <span>Investor risk profiling</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-golden"></div>
                        <span>Source of pension funds validation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-golden"></div>
                        <span>Dynamic document collection</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-golden"></div>
                        <span>Real-time reporting for pension aggregators</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-16 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="max-w-xl mx-auto animate-on-scroll opacity-0">
              <div className="floating-card p-8">
                <h2 className="text-3xl font-garamond text-navy-700 mb-6 text-center">
                  Notify Me When Live
                </h2>
                <WaitlistForm productName="PEPP" />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PEPP;
