import React from 'react';
import { LineChart, FileText, Globe, BarChart3, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WaitlistForm from '@/components/Home/WaitlistForm';

const ELTIF: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory-100">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-navy-700 text-white">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-garamond mb-6">
              ELTIF Solution
            </h1>
            <p className="text-xl text-ivory-200 mb-8">
              Investor suitability, documentation, and sustainability thresholds—all in one. The complete ELTIF onboarding engine.
            </p>
            <Button size="lg" className="bg-golden-600 hover:bg-golden-700">
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-garamond text-navy-700 mb-8">
                Key Features
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-golden-600 mt-1">
                    <LineChart size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-navy-700 mb-2">Investor Suitability Assessment</h3>
                    <p className="text-navy-600">Comprehensive evaluation of investor profiles and risk tolerance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-golden-600 mt-1">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-navy-700 mb-2">Documentation Management</h3>
                    <p className="text-navy-600">Automated collection and verification of required documentation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-golden-600 mt-1">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-navy-700 mb-2">Sustainability Compliance</h3>
                    <p className="text-navy-600">Integration with EU sustainability standards and reporting requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-garamond text-navy-700 mb-8">
                Benefits
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-golden-600 mt-1">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-navy-700 mb-2">Regulatory Compliance</h3>
                    <p className="text-navy-600">Ensure adherence to ELTIF II regulations and requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-golden-600 mt-1">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-navy-700 mb-2">Streamlined Operations</h3>
                    <p className="text-navy-600">Efficient management of investor onboarding and compliance processes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 px-6 bg-navy-700">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-garamond text-white mb-8 text-center">
              Join the Waitlist
            </h2>
            <WaitlistForm 
              productName="ELTIF Solution" 
              buttonVariant="default" 
              className="bg-white p-8 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ELTIF;
