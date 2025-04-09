
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Submitted",
        description: "Thank you for your interest. Our team will contact you shortly.",
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-garamond text-burgundy-800 mb-4">
              Request Access
            </h2>
            <p className="text-slate-700 mb-6">
              Our team will contact you to discuss how EOB CAP can meet your regulatory needs.
            </p>
            <div className="h-0.5 w-16 bg-burgundy-800 mb-6" />
            <p className="text-slate-600 text-sm">
              All institutional inquiries receive a response within one business day.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-ivory-100 p-8 border border-slate-200">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  required 
                  className="bg-white border-slate-300"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="organization">Organization</Label>
                <Input 
                  id="organization" 
                  name="organization" 
                  required 
                  className="bg-white border-slate-300"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className="bg-white border-slate-300"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="jurisdiction">Primary Jurisdiction</Label>
                <Select name="jurisdiction" required>
                  <SelectTrigger className="bg-white border-slate-300">
                    <SelectValue placeholder="Select jurisdiction" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="luxembourg">Luxembourg</SelectItem>
                    <SelectItem value="ireland">Ireland</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="france">France</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-burgundy-800 hover:bg-burgundy-900 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Request Demo Access"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
