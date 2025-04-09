import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, BarChart3, ShieldCheck, Users, ArrowRight, Clock, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import WaitlistForm from '@/components/Home/WaitlistForm';
import { Animate } from '@/components/ui/animate';
import { motion, useScroll, useTransform } from 'framer-motion';

const AMLTool: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.title = "AML Tool | EOB Capital";
  }, []);

  const performanceMetrics = [
    {
      title: "80% Faster Onboarding",
      description: "Reduce client onboarding time from days to hours with our automated compliance checks",
      icon: <Clock size={32} className="text-golden" />
    },
    {
      title: "95% Accuracy Rate",
      description: "Industry-leading accuracy in document verification and risk assessment",
      icon: <Target size={32} className="text-golden" />
    },
    {
      title: "60% Cost Reduction",
      description: "Significant savings in compliance operations and manual review processes",
      icon: <BarChart3 size={32} className="text-golden" />
    }
  ];

  const keyBenefits = [
    {
      title: "Seamless Integration",
      description: "Plug-and-play solution that integrates with your existing systems in under 24 hours",
      icon: <Zap size={24} className="text-golden" />
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous compliance monitoring with instant alerts for potential risks",
      icon: <ShieldCheck size={24} className="text-golden" />
    },
    {
      title: "Enhanced Client Experience",
      description: "Frictionless onboarding process that keeps your clients engaged",
      icon: <Users size={24} className="text-golden" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-navy-700 text-white">
      <Navbar />
      
      <motion.main 
        ref={mainRef}
        className="flex-grow pt-24"
        style={{ opacity }}
      >
        {/* Back to home */}
        <div className="container max-w-6xl mx-auto px-6 mb-8">
          <Animate type="slideIn">
            <Link 
              to="/" 
              className="inline-flex items-center text-ivory-200 hover:text-golden transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to home
            </Link>
          </Animate>
        </div>

        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <Animate type="slideIn" delay={0.2}>
                <h1 className="text-4xl md:text-5xl font-garamond mb-6">
                  Transform Your AML Compliance
                </h1>
                <p className="text-xl text-ivory-200 mb-8">
                  Experience the future of compliance with our AI-powered AML solution. Join the select group of financial institutions revolutionizing their compliance operations.
                </p>
                <Button size="lg" className="bg-golden-600 hover:bg-golden-700 group">
                  Request Early Access
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Animate>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20 px-6">
          <div className="container max-w-6xl mx-auto">
            <Animate type="slideIn" delay={0.3}>
              <h2 className="text-3xl font-garamond text-white mb-12 text-center">
                Industry-Leading Performance
              </h2>
            </Animate>
            <div className="grid md:grid-cols-3 gap-8">
              {performanceMetrics.map((metric, index) => (
                <Animate key={index} type="slideIn" delay={0.4 + index * 0.1}>
                  <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all hover:bg-white/20 border border-white/10">
                    <div className="text-golden mb-4">
                      {metric.icon}
                    </div>
                    <h3 className="text-2xl font-garamond text-white mb-4">{metric.title}</h3>
                    <p className="text-ivory-200/90">{metric.description}</p>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="p-10 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
              <Animate type="slideIn" delay={0.3}>
                <h2 className="text-3xl font-garamond text-white mb-12 text-center">
                  Why Choose Our Solution
                </h2>
              </Animate>
              <div className="grid md:grid-cols-3 gap-8">
                {keyBenefits.map((benefit, index) => (
                  <Animate key={index} type="slideIn" delay={0.4 + index * 0.1}>
                    <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/30 transition-all">
                      <div className="text-golden mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-medium text-white mb-2">{benefit.title}</h3>
                      <p className="text-ivory-200/90">{benefit.description}</p>
                    </div>
                  </Animate>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Early Access Section */}
        <section className="py-20 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              {/* Background Elements - Enhanced Layering */}
              <div className="absolute inset-0">
                {/* Base Layer - Subtle Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-700/80 to-navy-800/80 rounded-2xl"></div>
                
                {/* Middle Layer - Golden Orbs */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-golden/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-golden/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 opacity-50"></div>
                
                {/* Top Layer - Accent Highlights */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-golden/10 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-golden/10 rounded-full blur-3xl opacity-30"></div>
              </div>

              {/* Content */}
              <div className="relative">
                <div className="grid md:grid-cols-2 gap-12 items-center p-12">
                  {/* Left Column - Text Content */}
                  <div className="space-y-8">
                    <Animate type="slideIn" delay={0.3}>
                      <div className="space-y-4">
                        <span className="inline-block px-4 py-2 bg-golden/10 text-golden rounded-full text-sm font-medium backdrop-blur-sm border border-golden/20">
                          Limited Time Offer
                        </span>
                        <h2 className="text-4xl font-garamond text-white">
                          Join the Future of Compliance
                        </h2>
                        <p className="text-xl text-ivory-200/90">
                          Be among the first to experience our revolutionary AML solution. Early adopters receive exclusive benefits and priority support.
                        </p>
                      </div>
                    </Animate>

                    <Animate type="slideIn" delay={0.4}>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-ivory-200/90 group">
                          <div className="p-2 bg-golden/10 rounded-full group-hover:bg-golden/20 transition-colors">
                            <CheckCircle size={20} className="text-golden" />
                          </div>
                          <span>Priority access to new features</span>
                        </div>
                        <div className="flex items-center gap-3 text-ivory-200/90 group">
                          <div className="p-2 bg-golden/10 rounded-full group-hover:bg-golden/20 transition-colors">
                            <CheckCircle size={20} className="text-golden" />
                          </div>
                          <span>Dedicated onboarding support</span>
                        </div>
                        <div className="flex items-center gap-3 text-ivory-200/90 group">
                          <div className="p-2 bg-golden/10 rounded-full group-hover:bg-golden/20 transition-colors">
                            <CheckCircle size={20} className="text-golden" />
                          </div>
                          <span>Exclusive pricing for early adopters</span>
                        </div>
                      </div>
                    </Animate>
                  </div>

                  {/* Right Column - Form */}
                  <Animate type="scaleIn" delay={0.5}>
                    <div className="relative">
                      {/* Form Background Layers */}
                      <div className="absolute inset-0 bg-gradient-to-br from-golden/20 to-transparent rounded-2xl blur-xl opacity-50"></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-navy-700/50 to-transparent rounded-2xl"></div>
                      
                      {/* Form Container */}
                      <div className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
                        <div className="mb-6">
                          <h3 className="text-2xl font-garamond text-white mb-2">
                            Request Early Access
                          </h3>
                          <p className="text-ivory-200/90">
                            Join our exclusive early access program today
                          </p>
                        </div>
                        <WaitlistForm 
                          productName="AML Tool" 
                          buttonVariant="default" 
                          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors rounded-2xl"
                        />
                      </div>
                    </div>
                  </Animate>
                </div>

                {/* Decorative Elements - Enhanced */}
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-golden/5 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-golden/5 rounded-full blur-3xl opacity-30"></div>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default AMLTool;
