
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

interface WaitlistFormProps {
  productName?: string;
  className?: string;
  buttonVariant?: "default" | "subtle" | "outline";
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ 
  productName = "",
  className = "",
  buttonVariant = "default"
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for your interest",
        description: `We've added you to the ${productName} waitlist. We'll be in touch soon.`,
      });
      setEmail('');
      setName('');
      setCompany('');
    }, 1000);
  };

  return (
    <div className={`${className}`}>
      <h3 className="text-xl font-garamond text-navy-700 mb-4">
        {productName ? `Join ${productName} Early Access` : "Join Our Waitlist"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white border-ivory-300 text-navy-700 placeholder:text-navy-400"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white border-ivory-300 text-navy-700 placeholder:text-navy-400"
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Company (Optional)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="bg-white border-ivory-300 text-navy-700 placeholder:text-navy-400"
          />
        </div>
        <Button 
          type="submit"
          disabled={isSubmitting}
          variant={buttonVariant === "outline" ? "outline" : buttonVariant === "subtle" ? "secondary" : "default"}
          className={`w-full ${buttonVariant === "outline" ? "border-golden text-golden hover:bg-golden-50" : buttonVariant === "subtle" ? "bg-golden-200 text-navy-700 hover:bg-golden-300" : "bg-golden text-white hover:bg-golden-600"}`}
        >
          {isSubmitting ? "Processing..." : "Join Waitlist"}
        </Button>
      </form>
    </div>
  );
};

export default WaitlistForm;
