import React from 'react';
import { Wallet, FileText, Globe, BarChart3, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WaitlistForm from '@/components/Home/WaitlistForm';

const PEPP: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory-100">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-navy-700 text-white">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-garamond mb-6">
              PEPP Solution
            </h1>
            <p className="text-xl text-ivory-200 mb-8">
              Pan-European Pension Product onboarding aligned with 2023 EIOPA standards. Pension compliance that scales across borders.
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
                    <Wallet size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-navy-700 mb-2">Cross-Border Pension Management</h3>
                    <p className="text-navy-600">Seamless handling of pension products across European jurisdictions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-golden-600 mt-1">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-navy-700 mb-2">EIOPA Compliance</h3>
                    <p className="text-navy-600">Full alignment with 2023 EIOPA standards and regulatory requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-golden-600 mt-1">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-navy-700 mb-2">Multi-Country Support</h3>
                    <p className="text-navy-600">Comprehensive coverage of European pension regulations and requirements.</p>
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
                    <h3 className="text-xl font-medium text-navy-700 mb-2">Regulatory Confidence</h3>
                    <p className="text-navy-600">Ensure compliance with the latest European pension regulations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-golden-600 mt-1">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-navy-700 mb-2">Operational Efficiency</h3>
                    <p className="text-navy-600">Streamline pension product management across multiple jurisdictions.</p>
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
              productName="PEPP Solution" 
              buttonVariant="default" 
              className="bg-white p-8 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PEPP;
