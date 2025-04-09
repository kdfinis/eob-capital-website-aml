
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, FileText, Shield, AlertCircle, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

const AmlTool: React.FC = () => {
  useEffect(() => {
    document.title = "AML Tool | EOB CAP";
    
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
      icon: <FileText size={32} className="text-burgundy-800" />
    },
    {
      title: "Agent 2 – Risk Engine",
      description: "Assigns low/medium/high scores based on FATF lists, nationality, structure complexity. Fully customizable weight model.",
      icon: <AlertCircle size={32} className="text-burgundy-800" />
    },
    {
      title: "Agent 3 – Identity & Geolocation Verifier",
      description: "Uses telecom API and location services to verify device match + address match.",
      icon: <Shield size={32} className="text-burgundy-800" />
    },
    {
      title: "Agent 4 – Transaction Monitor",
      description: "AML alert scoring on first deposit + ongoing transactions. CSSF Circular 12-02 compliant thresholds.",
      icon: <Database size={32} className="text-burgundy-800" />
    },
    {
      title: "Agent 5 – Compliance Workflow Manager",
      description: "Triggers document requests, validates onboarding steps, logs audit trails. CSSF Circular 20/747-aligned onboarding orchestration.",
      icon: <CheckCircle size={32} className="text-burgundy-800" />
    }
  ];

  const regulations = [
    "GDPR-compliant storage (data minimization, encryption at rest)",
    "AMLD5 & AMLD6",
    "CSSF Circular 18/698 + 20/747"
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
                The Fastest Path to Regulatory Clarity.
              </h1>
              <p className="text-xl text-slate-700 mb-8">
                AML onboarding built for cross-border funds, private wealth desks, and pension aggregators.
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

        {/* Features Section */}
        <section className="py-16 px-6 bg-ivory-100">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-garamond text-slate-900 mb-12 animate-on-scroll opacity-0">
              What It Does
            </h2>

            <div className="space-y-10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 border border-slate-200 animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
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

        {/* Compliance Flow */}
        <section className="py-16 px-6 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll opacity-0">
              <h2 className="text-3xl font-garamond text-slate-900 mb-4">
                Interactive Compliance Flow
              </h2>
              <p className="text-slate-600">
                Seamless integration of document processing, risk scoring, and workflow automation.
              </p>
            </div>

            <div className="relative py-8 animate-on-scroll opacity-0">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
                <div className="mb-8 md:mb-0 p-4 bg-ivory-100 border border-slate-200 rounded-sm w-full md:w-48">
                  <h3 className="text-lg font-medium mb-2">UBO Upload</h3>
                  <p className="text-sm text-slate-600">Document collection from beneficial owners</p>
                </div>

                <div className="mb-8 md:mb-0 p-4 bg-ivory-100 border border-slate-200 rounded-sm w-full md:w-48">
                  <h3 className="text-lg font-medium mb-2">Document Parsing</h3>
                  <p className="text-sm text-slate-600">AI-powered extraction of critical data points</p>
                </div>

                <div className="mb-8 md:mb-0 p-4 bg-ivory-100 border border-slate-200 rounded-sm w-full md:w-48">
                  <h3 className="text-lg font-medium mb-2">Risk Scoring</h3>
                  <p className="text-sm text-slate-600">Comprehensive analysis based on multiple factors</p>
                </div>

                <div className="p-4 bg-ivory-100 border border-slate-200 rounded-sm w-full md:w-48">
                  <h3 className="text-lg font-medium mb-2">Workflow Trigger</h3>
                  <p className="text-sm text-slate-600">Automated actions based on risk assessment</p>
                </div>
              </div>
              
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-[60px] right-[60px] h-0.5 bg-slate-300 -translate-y-1/2 z-0">
                <div className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-burgundy-800 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-2/4 w-3 h-3 rounded-full bg-burgundy-800 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-3/4 w-3 h-3 rounded-full bg-burgundy-800 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>

            <div className="mt-12 text-center animate-on-scroll opacity-0">
              <Button variant="outline" className="border-burgundy-800 text-burgundy-800">
                View Developer Documentation
              </Button>
            </div>
          </div>
        </section>

        {/* Regulatory Alignment */}
        <section className="py-16 px-6 bg-burgundy-800 text-white">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-garamond mb-8 animate-on-scroll opacity-0">
              Regulatory Alignment
            </h2>

            <div className="space-y-4">
              {regulations.map((reg, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CheckCircle size={20} className="text-ivory-200 flex-shrink-0" />
                  <span>{reg}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-burgundy-700 animate-on-scroll opacity-0">
              <p className="text-ivory-100 opacity-90">
                EOB CAP's AML Tool is built from the ground up with European regulatory frameworks in mind, ensuring that your compliance processes are always aligned with the latest directives.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
              <h2 className="text-3xl font-garamond text-burgundy-800 mb-6">
                Request a Demonstration
              </h2>
              <p className="text-slate-700 mb-8">
                Discover how the EOB CAP AML Tool can streamline your compliance processes while maintaining the highest regulatory standards.
              </p>
              <Button 
                className="bg-burgundy-800 hover:bg-burgundy-900 text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AmlTool;
