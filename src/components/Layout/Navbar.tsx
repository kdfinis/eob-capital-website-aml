
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#vision" },
  { label: "Insights", href: "#regulatory" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-garamond font-medium text-burgundy-800">
              EOB CAP
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="font-inter text-slate-800 hover:text-burgundy-800 transition-colors hover-underline py-2"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="font-medium text-slate-700 hover:text-burgundy-800"
          >
            Login
          </Button>
          <Button 
            variant="outline" 
            className="border-burgundy-800 text-burgundy-800 hover:bg-burgundy-800 hover:text-ivory-200"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
