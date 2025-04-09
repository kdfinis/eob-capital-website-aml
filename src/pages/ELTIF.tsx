
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, FileText, ClipboardCheck, BarChart3, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

const ELTIF: React.FC = () => {
  useEffect(() => {
    document.title = "ELTIF | EOB CAP";
    
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

  const features = [
    {
      title: "ELTIF Investor Check Questionnaire",
      description: "Customizable suitability and sustainability tests aligned with ELTIF II requirements.",
      icon: <ClipboardCheck size={32} className="text-burgundy-800" />
    },
    {
      title: "Automated Execution Restrictions",
      description: "Enforcement of Article 30 restrictions based on ELTIF II regulation.",
      icon: <Filter size={32} className="text-burgundy-800" />
    },
    {
      title: "Jurisdiction-aware Reporting",
      description: "Dynamic reporting exports tailored to specific jurisdictional requirements.",
      icon: <FileText size={32} className="text-burgundy-800" />
    },
    {
      title: "Modular Integration",
      description: "Seamless integration with existing fund onboarding pipelines and systems.",
      icon: <BarChart3 size={32} className="text-burgundy-800" />
    }
  ];

  const policySnippets = [
    "Investor must acknowledge the long-term nature of ELTIF investments",
    "Minimum 10,000 EUR investment threshold for retail investors",
    "Maximum 10% portfolio allocation for retail investors with < 500,000 EUR",
    "Sustainability preferences documented in accordance with SFDR"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Back to home */}
        <div className="container max-w-6xl mx-auto px-6 mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-slate-600 hover:text-burgundy-800 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-12 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="max-w-3xl animate-on-scroll opacity-0">
              <h1 className="text-4xl md:text-5xl font-garamond text-burgundy-800 mb-6">
                The ELTIF Onboarding Engine
              </h1>
              <p className="text-xl text-slate-700 mb-8">
                Investor suitability, documentation, and sustainability thresholds—all in one.
              </p>
              <div className="h-0.5 w-24 bg-burgundy-800 mb-8" />
              <Button 
                className="bg-burgundy-800 hover:bg-burgundy-900 text-white"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Split Layout */}
        <section className="py-16 px-6 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Policy Text */}
              <div className="animate-on-scroll opacity-0">
                <h2 className="text-3xl font-garamond text-slate-900 mb-6">
                  ELTIF II Policy Requirements
                </h2>
                
                <div className="space-y-6">
                  {policySnippets.map((snippet, index) => (
                    <div 
                      key={index} 
                      className="p-4 bg-ivory-100 border border-slate-200"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <p className="text-slate-800 font-medium">{snippet}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <p className="text-slate-700">
                    Our ELTIF solution automatically implements these regulatory requirements in compliance with the latest European standards.
                  </p>
                </div>
              </div>
              
              {/* Right: Animated Questionnaire */}
              <div className="animate-on-scroll opacity-0">
                <h2 className="text-3xl font-garamond text-slate-900 mb-6">
                  Investor Questionnaire
                </h2>
                
                <div className="border border-slate-200 p-6 bg-white">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Investment Experience</label>
                      <select className="w-full p-2 border border-slate-300 rounded-sm">
                        <option>Select option</option>
                        <option>Less than 1 year</option>
                        <option>1-3 years</option>
                        <option>3+ years</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Investment Horizon</label>
                      <select className="w-full p-2 border border-slate-300 rounded-sm">
                        <option>Select option</option>
                        <option>0-3 years (short term)</option>
                        <option>3-7 years (medium term)</option>
                        <option>7+ years (long term)</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Risk Tolerance</label>
                      <div className="grid grid-cols-3 gap-2">
                        <button className="p-2 border border-slate-300 hover:border-burgundy-800 transition-colors text-sm">Low</button>
                        <button className="p-2 border border-burgundy-800 bg-burgundy-50 text-burgundy-800 text-sm">Medium</button>
                        <button className="p-2 border border-slate-300 hover:border-burgundy-800 transition-colors text-sm">High</button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Sustainability Preferences</label>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="esg" />
                        <label htmlFor="esg" className="text-sm">ESG considerations are important to me</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-ivory-100">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-garamond text-slate-900 mb-12 animate-on-scroll opacity-0">
              Features
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 border border-slate-200 animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-garamond font-medium text-slate-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-slate-700">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ELTIF 2.0 Section */}
        <section className="py-16 px-6 bg-burgundy-800 text-white">
          <div className="container max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto animate-on-scroll opacity-0">
              <h2 className="text-3xl font-garamond mb-6">
                Aligned with ELTIF 2.0
              </h2>
              
              <p className="mb-8">
                Our solution is fully updated to comply with the 2023 ELTIF 2.0 regulatory updates, ensuring your fund remains compliant with the latest European standards.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border border-burgundy-700 bg-burgundy-700/30">
                  <h3 className="font-medium mb-2">Broader Asset Universe</h3>
                  <p className="text-ivory-100 text-sm opacity-90">
                    Support for the expanded eligible asset classes under ELTIF 2.0
                  </p>
                </div>
                
                <div className="p-4 border border-burgundy-700 bg-burgundy-700/30">
                  <h3 className="font-medium mb-2">Relaxed Portfolio Rules</h3>
                  <p className="text-ivory-100 text-sm opacity-90">
                    Implementation of simplified diversification requirements
                  </p>
                </div>
                
                <div className="p-4 border border-burgundy-700 bg-burgundy-700/30">
                  <h3 className="font-medium mb-2">Enhanced Retail Access</h3>
                  <p className="text-ivory-100 text-sm opacity-90">
                    Support for the lower investment thresholds for retail investors
                  </p>
                </div>
                
                <div className="p-4 border border-burgundy-700 bg-burgundy-700/30">
                  <h3 className="font-medium mb-2">SFDR Integration</h3>
                  <p className="text-ivory-100 text-sm opacity-90">
                    Seamless integration with sustainability disclosure requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
              <h2 className="text-3xl font-garamond text-burgundy-800 mb-6">
                Streamline Your ELTIF Compliance
              </h2>
              <p className="text-slate-700 mb-8">
                Contact us to learn how our ELTIF solution can help you navigate the complex regulatory landscape while providing a seamless experience for your investors.
              </p>
              <Button 
                className="bg-burgundy-800 hover:bg-burgundy-900 text-white"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ELTIF;
