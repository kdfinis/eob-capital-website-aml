
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
    <div className={`bg-dark-800 border border-dark-700 p-6 rounded-sm ${className}`}>
      <h3 className="text-xl font-garamond text-light-300 mb-4">
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
            className="bg-dark-700 border-dark-600 text-light-400 placeholder:text-dark-400"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-dark-700 border-dark-600 text-light-400 placeholder:text-dark-400"
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Company (Optional)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="bg-dark-700 border-dark-600 text-light-400 placeholder:text-dark-400"
          />
        </div>
        <Button 
          type="submit"
          disabled={isSubmitting}
          variant={buttonVariant === "outline" ? "outline" : buttonVariant === "subtle" ? "secondary" : "default"}
          className={`w-full ${buttonVariant === "outline" ? "border-burgundy-800 text-burgundy-800 hover:bg-burgundy-800/10" : buttonVariant === "subtle" ? "bg-burgundy-800/20 text-light-300 hover:bg-burgundy-800/30" : "bg-burgundy-800 text-light-300 hover:bg-burgundy-700"}`}
        >
          {isSubmitting ? "Processing..." : "Join Waitlist"}
        </Button>
      </form>
    </div>
  );
};

export default WaitlistForm;
