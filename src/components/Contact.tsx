import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);
    toast.success('Thank you for your message! We will get back to you soon.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Let's Discuss Your Needs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to optimize your operations? Fill out the form below or email us to book an initial no-obligation
            consultation.
          </p>
        </div>
        <div className="bg-gray-50/50 p-8 rounded-xl shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" type="text" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" type="text" placeholder="Your Company, Inc." required />
            </div>
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="How can we help?" className="min-h-[120px]" required />
            </div>
            <div className="md:col-span-2 text-right">
              <Button type="submit" size="lg" className="bg-slate-800 hover:bg-slate-900 text-white font-bold w-full sm:w-auto">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
