import { useState } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Settings className="text-teal-400 h-6 w-6" />
          <span className="text-xl font-bold tracking-wide uppercase">MfgConsult</span>
        </div>
        <nav className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-teal-400 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-slate-800 px-6 py-4 space-y-3 md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="block hover:text-teal-400" onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
