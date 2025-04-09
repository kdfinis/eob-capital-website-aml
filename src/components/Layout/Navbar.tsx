
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#vision" },
  { label: "Insights", href: "#regulatory" },
];

const PRODUCTS = [
  { label: "AML Tool", href: "/aml-tool", description: "Regulatory compliance and AML onboarding" },
  { label: "PEPP", href: "/pepp", description: "Pan-European Pension Product" },
  { label: "ELTIF", href: "/eltif", description: "European Long-Term Investment Fund" },
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
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="flex items-center">
            <div className="brand-title">
              <span className="main font-normal">EOB</span>
              <span className="sub font-normal text-[0.7rem] tracking-wider">CAPITAL</span>
            </div>
          </Link>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.label}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="font-inter text-navy-700 hover:text-golden-600 transition-colors hover-underline py-2 px-4"
                >
                  {item.label}
                </button>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-inter text-navy-700 hover:text-golden-600">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {PRODUCTS.map((product) => (
                    <li key={product.label}>
                      <NavigationMenuLink asChild>
                        <Link 
                          to={product.href}
                          className="block select-none space-y-1 rounded-md p-3 hover:bg-ivory-100 transition-colors"
                        >
                          <div className="text-sm font-medium text-navy-700">{product.label}</div>
                          <p className="line-clamp-2 text-xs text-muted-foreground">
                            {product.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="font-medium text-navy-700 hover:text-golden"
          >
            Login
          </Button>
          <Button 
            variant="outline" 
            className="border-golden text-golden hover:bg-golden-100 hover:text-golden-700"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
