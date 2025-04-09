
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
        "p-8 bg-white border border-slate-200 hover:border-burgundy-800/30 transition-all duration-300",
        "opacity-0 translate-y-6",
        "group",
        className
      )}
      style={{ animationDelay: delay }}
    >
      <div className="mb-6 text-burgundy-800">
        {icon}
      </div>
      <h3 className="text-2xl font-garamond text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 mb-8">{description}</p>
      
      <div className="mt-auto">
        <Button 
          variant="ghost" 
          className="p-0 h-auto flex items-center gap-2 group-hover:text-burgundy-800 text-slate-700"
          asChild
        >
          <a href={link}>
            <span>{linkText}</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
