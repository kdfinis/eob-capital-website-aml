
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, FileText, User, FileCheck, BarChart } from 'lucide-react';
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

  const features = [
    {
      title: "Investor Risk Profiling",
      description: "Comprehensive investor risk assessment aligned with EIOPA guidelines.",
      icon: <User size={32} className="text-burgundy-700" />
    },
    {
      title: "Source of Pension Funds Validation",
      description: "Robust verification process for pension fund sources, ensuring compliance with EU directives.",
      icon: <FileText size={32} className="text-burgundy-700" />
    },
    {
      title: "Dynamic Document Collection",
      description: "Adaptive document requirements for cross-border workers and mobile retirees.",
      icon: <FileCheck size={32} className="text-burgundy-700" />
    },
    {
      title: "Real-time Reporting",
      description: "Comprehensive reporting tools for pension aggregators with EIOPA-aligned formats.",
      icon: <BarChart size={32} className="text-burgundy-700" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark-900 text-light-500">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Back to home */}
        <div className="container max-w-6xl mx-auto px-6 mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-light-600 hover:text-burgundy-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-12 px-6 bg-gradient-to-b from-dark-800 to-dark-900">
          <div className="container max-w-6xl mx-auto">
            <div className="max-w-3xl animate-on-scroll opacity-0">
              <div className="brand-title mb-8">
                <span className="main text-light-300">EOB</span>
                <span className="sub text-light-500">Capital</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-garamond text-burgundy-700 mb-6">
                Pension Compliance That Scales
              </h1>
              <p className="text-xl text-light-500 mb-8">
                Pan-European Pension Product onboarding aligned with 2023 EIOPA standards.
              </p>
              <div className="h-0.5 w-24 bg-burgundy-800 mb-8 shadow-glow-sm"></div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-burgundy-800 hover:bg-burgundy-700 text-light-300"
                >
                  Request Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-dark-600 text-light-400 hover:bg-dark-800"
                  asChild
                >
                  <a href="#waitlist">Join Waitlist</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-dark-800">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-garamond text-light-300 mb-12 animate-on-scroll opacity-0 relative">
              <span className="relative z-10">Features</span>
              <span className="absolute w-20 h-3 bg-burgundy-900/20 bottom-0 left-0 z-0"></span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-dark-700 p-8 border border-dark-600 animate-on-scroll opacity-0 luxury-card shadow-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex-shrink-0 p-4 bg-dark-800 rounded-sm w-fit">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-garamond font-medium text-light-300 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-light-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Document Validation Widget */}
        <section className="py-16 px-6 bg-dark-900">
          <div className="container max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto mb-12 animate-on-scroll opacity-0">
              <h2 className="text-3xl font-garamond text-light-300 mb-4">
                Document Validation Widget
              </h2>
              <p className="text-light-600">
                Our dynamic document validation system processes and verifies essential pension documentation.
              </p>
            </div>

            <div className="border border-dark-700 p-8 bg-dark-800 animate-on-scroll opacity-0 shadow-card">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="p-6 border border-dark-600 bg-dark-700 flex flex-col items-center text-center luxury-card">
                  <div className="w-16 h-16 mb-4 bg-dark-800 flex items-center justify-center rounded-sm">
                    <FileText size={24} className="text-burgundy-700" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-light-400">ID Card</h4>
                    <p className="text-xs text-light-600">Validated</p>
                  </div>
                  <CheckCircle size={16} className="text-green-600 mt-2" />
                </div>

                <div className="p-6 border border-dark-600 bg-dark-700 flex flex-col items-center text-center luxury-card">
                  <div className="w-16 h-16 mb-4 bg-dark-800 flex items-center justify-center rounded-sm">
                    <FileText size={24} className="text-burgundy-700" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-light-400">Payroll PDF</h4>
                    <p className="text-xs text-light-600">Validated</p>
                  </div>
                  <CheckCircle size={16} className="text-green-600 mt-2" />
                </div>

                <div className="p-6 border border-dark-600 bg-dark-700 flex flex-col items-center text-center luxury-card">
                  <div className="w-16 h-16 mb-4 bg-dark-800 flex items-center justify-center rounded-sm">
                    <FileText size={24} className="text-burgundy-700" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-light-400">Banking Details</h4>
                    <p className="text-xs text-light-600">Processing</p>
                  </div>
                  <div className="animate-pulse h-4 w-4 bg-yellow-500 rounded-full mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Section */}
        <section className="py-16 px-6 bg-burgundy-950 text-light-500">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-garamond mb-8 animate-on-scroll opacity-0 text-light-300">
              EIOPA Compliance
            </h2>

            <div className="space-y-4 animate-on-scroll opacity-0">
              <div className="flex items-center gap-3 p-4 bg-burgundy-900/30 border border-burgundy-900/50 luxury-card">
                <CheckCircle size={20} className="text-light-300 flex-shrink-0" />
                <span className="text-light-400">Aligned with 2023 EIOPA standards for pension product onboarding</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-burgundy-900/30 border border-burgundy-900/50 luxury-card">
                <CheckCircle size={20} className="text-light-300 flex-shrink-0" />
                <span className="text-light-400">Cross-border compatibility for mobile European workers</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-burgundy-900/30 border border-burgundy-900/50 luxury-card">
                <CheckCircle size={20} className="text-light-300 flex-shrink-0" />
                <span className="text-light-400">Standardized reporting formats for regulatory submissions</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-burgundy-900/30 border border-burgundy-900/50 luxury-card">
                <CheckCircle size={20} className="text-light-300 flex-shrink-0" />
                <span className="text-light-400">GDPR-compliant data handling for sensitive pension information</span>
              </div>
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="py-16 px-6 bg-dark-800">
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="max-w-lg animate-on-scroll opacity-0">
                <h2 className="text-3xl font-garamond text-light-300 mb-6 relative">
                  <span className="relative z-10">API Integration Ready</span>
                  <span className="absolute w-36 h-3 bg-burgundy-900/20 bottom-0 left-0 z-0"></span>
                </h2>
                <p className="text-light-500 mb-6">
                  Connect the PEPP solution with your existing pension administration systems through our comprehensive API suite.
                </p>
                <Button variant="outline" className="border-burgundy-800 text-burgundy-700 hover:bg-burgundy-900/10">
                  View API Documentation
                </Button>
              </div>

              <div className="flex-1 bg-dark-900 text-light-500 p-6 rounded-sm font-mono text-sm overflow-x-auto animate-on-scroll opacity-0 border border-dark-700">
                <pre className="text-light-500">{`// Example API call for pension product validation
const response = await fetch('https://api.eobcapital.com/pepp/validate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${'{YOUR_API_KEY}'}'
  },
  body: JSON.stringify({
    investor_id: 'INV-12345',
    document_type: 'pension_statement',
    jurisdiction: 'lu',
    // Additional parameters...
  })
});

const result = await response.json();`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-16 px-6 bg-dark-900">
          <div className="container max-w-6xl mx-auto">
            <div className="max-w-xl mx-auto animate-on-scroll opacity-0">
              <h2 className="text-3xl font-garamond text-light-300 mb-6 text-center">
                Request Early Access
              </h2>
              <WaitlistForm productName="PEPP" />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PEPP;
