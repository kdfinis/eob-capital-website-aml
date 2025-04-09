
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, FileText, User, FileCheck, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

const PEPP: React.FC = () => {
  useEffect(() => {
    document.title = "PEPP | EOB CAP";
    
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
      icon: <User size={32} className="text-burgundy-800" />
    },
    {
      title: "Source of Pension Funds Validation",
      description: "Robust verification process for pension fund sources, ensuring compliance with EU directives.",
      icon: <FileText size={32} className="text-burgundy-800" />
    },
    {
      title: "Dynamic Document Collection",
      description: "Adaptive document requirements for cross-border workers and mobile retirees.",
      icon: <FileCheck size={32} className="text-burgundy-800" />
    },
    {
      title: "Real-time Reporting",
      description: "Comprehensive reporting tools for pension aggregators with EIOPA-aligned formats.",
      icon: <BarChart size={32} className="text-burgundy-800" />
    }
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
                Pension Compliance That Scales
              </h1>
              <p className="text-xl text-slate-700 mb-8">
                Pan-European Pension Product onboarding aligned with 2023 EIOPA standards.
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

        {/* Document Validation Widget */}
        <section className="py-16 px-6 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto mb-12 animate-on-scroll opacity-0">
              <h2 className="text-3xl font-garamond text-slate-900 mb-4">
                Document Validation Widget
              </h2>
              <p className="text-slate-600">
                Our dynamic document validation system processes and verifies essential pension documentation.
              </p>
            </div>

            <div className="border border-slate-200 p-8 bg-ivory-50 animate-on-scroll opacity-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="p-4 border border-slate-200 bg-white flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 bg-slate-100 flex items-center justify-center rounded-sm">
                    <FileText size={24} className="text-burgundy-800" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">ID Card</h4>
                    <p className="text-xs text-slate-500">Validated</p>
                  </div>
                  <CheckCircle size={16} className="text-green-600 mt-2" />
                </div>

                <div className="p-4 border border-slate-200 bg-white flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 bg-slate-100 flex items-center justify-center rounded-sm">
                    <FileText size={24} className="text-burgundy-800" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Payroll PDF</h4>
                    <p className="text-xs text-slate-500">Validated</p>
                  </div>
                  <CheckCircle size={16} className="text-green-600 mt-2" />
                </div>

                <div className="p-4 border border-slate-200 bg-white flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 bg-slate-100 flex items-center justify-center rounded-sm">
                    <FileText size={24} className="text-burgundy-800" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Banking Details</h4>
                    <p className="text-xs text-slate-500">Processing</p>
                  </div>
                  <div className="animate-pulse h-4 w-4 bg-yellow-500 rounded-full mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Section */}
        <section className="py-16 px-6 bg-burgundy-800 text-white">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-garamond mb-8 animate-on-scroll opacity-0">
              EIOPA Compliance
            </h2>

            <div className="space-y-4 animate-on-scroll opacity-0">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-ivory-200 flex-shrink-0" />
                <span>Aligned with 2023 EIOPA standards for pension product onboarding</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-ivory-200 flex-shrink-0" />
                <span>Cross-border compatibility for mobile European workers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-ivory-200 flex-shrink-0" />
                <span>Standardized reporting formats for regulatory submissions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-ivory-200 flex-shrink-0" />
                <span>GDPR-compliant data handling for sensitive pension information</span>
              </div>
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="py-16 px-6 bg-slate-100">
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="max-w-lg animate-on-scroll opacity-0">
                <h2 className="text-3xl font-garamond text-slate-900 mb-6">
                  API Integration Ready
                </h2>
                <p className="text-slate-700 mb-6">
                  Connect the PEPP solution with your existing pension administration systems through our comprehensive API suite.
                </p>
                <Button variant="outline" className="border-burgundy-800 text-burgundy-800">
                  View API Documentation
                </Button>
              </div>

              <div className="flex-1 bg-slate-800 text-slate-200 p-6 rounded-sm font-mono text-sm overflow-x-auto animate-on-scroll opacity-0">
                <pre>{`// Example API call for pension product validation
const response = await fetch('https://api.eobcap.com/pepp/validate', {
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

        {/* CTA Section */}
        <section className="py-16 px-6 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
              <h2 className="text-3xl font-garamond text-burgundy-800 mb-6">
                Ready to Simplify Pension Compliance?
              </h2>
              <p className="text-slate-700 mb-8">
                Get in touch to see how our PEPP solution can streamline your pension product onboarding and compliance.
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

export default PEPP;
