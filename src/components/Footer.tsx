import { Settings, Globe, Briefcase, Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="text-teal-400 h-6 w-6" />
              <span className="text-xl font-bold tracking-wide uppercase">MfgConsult</span>
            </div>
            <p className="text-gray-400 text-sm">
              Driving Excellence in Industrial Operations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-200">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400"><Globe className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400"><Code className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MfgConsult. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
