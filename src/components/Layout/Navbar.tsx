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
  { label: "Home", href: "/" },
  { label: "About", href: "/#vision" },
  { label: "Insights", href: "/#regulatory" },
];

const PRODUCTS = [
  { 
    label: "AML Tool", 
    href: "/aml-tool", 
    description: "Regulatory compliance and AML onboarding for European financial institutions",
    icon: "shield"
  },
  { 
    label: "PEPP", 
    href: "/pepp", 
    description: "Pan-European Pension Product compliance aligned with 2023 EIOPA standards",
    icon: "wallet"
  },
  { 
    label: "ELTIF", 
    href: "/eltif", 
    description: "European Long-Term Investment Fund onboarding and compliance solution",
    icon: "chart"
  },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
    )}>
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-garamond text-navy-700">EOB</span>
            <span className="text-2xl font-garamond text-golden-600">Capital</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <Link 
                    to={item.href}
                    className="font-inter text-navy-700 hover:text-golden-600 transition-colors hover-underline py-2 px-4"
                  >
                    {item.label}
                  </Link>
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
            <Button variant="outline" className="border-navy-600 text-navy-700 hover:bg-navy-50">
              Contact Us
            </Button>
            <Button className="bg-golden-600 hover:bg-golden-700">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
