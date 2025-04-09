
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkText: string;
  link: string;
  className?: string;
  delay?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  icon, 
  linkText, 
  link,
  className,
  delay = "0ms"
}) => {
  return (
    <div 
      className={cn(
        "p-8 bg-dark-800 border border-dark-700",
        "opacity-0 translate-y-6 glow-effect luxury-card",
        "hover:border-burgundy-800/40 transition-all duration-500",
        className
      )}
      style={{ animationDelay: delay }}
    >
      <div className="mb-6 text-burgundy-800">
        {icon}
      </div>
      <h3 className="text-2xl font-garamond text-light-400 mb-4">{title}</h3>
      <p className="text-light-600 mb-8">{description}</p>
      
      <div className="mt-auto flex flex-col gap-6">
        <Button 
          variant="ghost" 
          className="p-0 h-auto flex items-center gap-2 group-hover:text-burgundy-800 text-light-500 group"
          asChild
        >
          <a href={link} className="relative overflow-hidden group">
            <span className="group-hover:text-burgundy-700 transition-colors duration-500">
              {linkText}
            </span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-500" />
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-burgundy-800 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </a>
        </Button>
        
        <div className="mt-4">
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="border-dark-600 text-light-500 hover:bg-dark-700 hover:text-light-300 transition-all duration-300 w-full"
          >
            <a href={`${link}#waitlist`}>
              Join Waitlist
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
