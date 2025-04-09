
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
        "floating-card opacity-0 translate-y-6 glow-effect",
        className
      )}
      style={{ animationDelay: delay }}
    >
      <div className="mb-6 text-golden">
        {icon}
      </div>
      <h3 className="text-2xl font-garamond text-navy-700 mb-4">{title}</h3>
      <p className="text-navy-600 mb-8">{description}</p>
      
      <div className="mt-auto flex flex-col gap-6">
        <Button 
          variant="ghost" 
          className="p-0 h-auto flex items-center gap-2 group text-navy-600"
          asChild
        >
          <a href={link} className="relative overflow-hidden group">
            <span className="group-hover:text-golden-700 transition-colors duration-500">
              {linkText}
            </span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-500" />
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-golden transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </a>
        </Button>
        
        <div className="mt-4">
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="border-navy-600 text-navy-700 hover:bg-navy-50 transition-all duration-300 w-full"
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
