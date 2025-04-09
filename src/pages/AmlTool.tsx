
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, FileText, Shield, AlertCircle, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import WaitlistForm from '@/components/Home/WaitlistForm';

const AmlTool: React.FC = () => {
  useEffect(() => {
    document.title = "AML Tool | EOB Capital";
    
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
      title: "Agent 1 – Document Processor",
      description: "Extracts structured text from uploaded compliance docs (passports, UBO forms, source of funds). AI-based OCR with multi-language support (EN/FR/DE).",
      icon: <FileText size={32} className="text-golden" />
    },
    {
      title: "Agent 2 – Risk Engine",
      description: "Assigns low/medium/high scores based on FATF lists, nationality, structure complexity. Fully customizable weight model.",
      icon: <AlertCircle size={32} className="text-golden" />
    },
    {
      title: "Agent 3 – Identity & Geolocation Verifier",
      description: "Uses telecom API and location services to verify device match + address match.",
      icon: <Shield size={32} className="text-golden" />
    },
    {
      title: "Agent 4 – Transaction Monitor",
      description: "AML alert scoring on first deposit + ongoing transactions. CSSF Circular 12-02 compliant thresholds.",
      icon: <Database size={32} className="text-golden" />
    },
    {
      title: "Agent 5 – Compliance Workflow Manager",
      description: "Triggers document requests, validates onboarding steps, logs audit trails. CSSF Circular 20/747-aligned onboarding orchestration.",
      icon: <CheckCircle size={32} className="text-golden" />
    }
  ];

  const regulations = [
    "GDPR-compliant storage (data minimization, encryption at rest)",
    "AMLD5 & AMLD6",
    "CSSF Circular 18/698 + 20/747"
  ];

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
                A New Standard in AML Onboarding
              </h1>
              <p className="text-xl text-navy-600 mb-8">
                Designed in Luxembourg for EU-regulated institutions.
              </p>
              <div className="h-0.5 w-24 bg-golden mb-8 shadow-glow-sm"></div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-golden hover:bg-golden-600 text-white"
                >
                  Request Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-navy-600 text-navy-700 hover:bg-navy-50"
                  asChild
                >
                  <a href="#waitlist">Join Friends & Family Early Access</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="floating-card p-10">
              <h2 className="text-3xl font-garamond text-navy-700 mb-12 animate-on-scroll opacity-0 relative">
                <span className="relative z-10">What It Does</span>
                <span className="absolute w-24 h-1 bg-golden bottom-0 left-0 z-0"></span>
              </h2>

              <div className="space-y-10">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-8 border border-ivory-300 animate-on-scroll opacity-0 luxury-card shadow-card"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0 p-4 bg-ivory-100 rounded-sm">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-garamond font-medium text-navy-700 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-navy-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Flow */}
        <section className="py-16 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="floating-card p-10">
              <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll opacity-0">
                <h2 className="text-3xl font-garamond text-navy-700 mb-4">
                  Interactive Compliance Flow
                </h2>
                <p className="text-navy-600">
                  Seamless integration of document processing, risk scoring, and workflow automation.
                </p>
              </div>

              <div className="relative py-8 animate-on-scroll opacity-0">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
                  <div className="mb-8 md:mb-0 p-6 bg-white border border-ivory-300 rounded-sm w-full md:w-48 shadow-card glow-effect">
                    <h3 className="text-lg font-medium mb-2 text-navy-700">UBO Upload</h3>
                    <p className="text-sm text-navy-600">Document collection from beneficial owners</p>
                  </div>

                  <div className="mb-8 md:mb-0 p-6 bg-white border border-ivory-300 rounded-sm w-full md:w-48 shadow-card glow-effect">
                    <h3 className="text-lg font-medium mb-2 text-navy-700">Document Parsing</h3>
                    <p className="text-sm text-navy-600">AI-powered extraction of critical data points</p>
                  </div>

                  <div className="mb-8 md:mb-0 p-6 bg-white border border-ivory-300 rounded-sm w-full md:w-48 shadow-card glow-effect">
                    <h3 className="text-lg font-medium mb-2 text-navy-700">Risk Scoring</h3>
                    <p className="text-sm text-navy-600">Comprehensive analysis based on multiple factors</p>
                  </div>

                  <div className="p-6 bg-white border border-ivory-300 rounded-sm w-full md:w-48 shadow-card glow-effect">
                    <h3 className="text-lg font-medium mb-2 text-navy-700">Workflow Trigger</h3>
                    <p className="text-sm text-navy-600">Automated actions based on risk assessment</p>
                  </div>
                </div>
                
                {/* Connecting line */}
                <div className="hidden md:block absolute top-1/2 left-[60px] right-[60px] h-0.5 bg-ivory-400 -translate-y-1/2 z-0">
                  <div className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-golden -translate-x-1/2 -translate-y-1/2 shadow-glow-sm"></div>
                  <div className="absolute top-1/2 left-2/4 w-3 h-3 rounded-full bg-golden -translate-x-1/2 -translate-y-1/2 shadow-glow-sm"></div>
                  <div className="absolute top-1/2 left-3/4 w-3 h-3 rounded-full bg-golden -translate-x-1/2 -translate-y-1/2 shadow-glow-sm"></div>
                </div>
              </div>

              <div className="mt-12 text-center animate-on-scroll opacity-0">
                <Button variant="outline" className="border-golden text-golden hover:bg-golden-50">
                  View Developer Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Alignment */}
        <section className="py-16 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="floating-card p-10 bg-white shadow-floating">
              <h2 className="text-3xl font-garamond mb-8 animate-on-scroll opacity-0 text-navy-700">
                Regulatory Alignment
              </h2>

              <div className="space-y-4">
                {regulations.map((reg, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 bg-ivory-100 border border-ivory-300 animate-on-scroll opacity-0 luxury-card"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CheckCircle size={20} className="text-golden flex-shrink-0" />
                    <span className="text-navy-700">{reg}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-ivory-300 animate-on-scroll opacity-0">
                <p className="text-navy-600 opacity-90">
                  EOB Capital's AML Tool is built from the ground up with European regulatory frameworks in mind, ensuring that your compliance processes are always aligned with the latest directives.
                </p>
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
                  Friends & Family Early Access
                </h2>
                <WaitlistForm productName="AML Tool" />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AmlTool;
