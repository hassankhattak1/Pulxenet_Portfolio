import React from 'react';
import { Mail, Globe, MapPin } from 'lucide-react';

export default function ContactCTA() {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-subheading/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="font-bebas text-4xl tracking-wide text-heading mb-6">
              <span className="text-primary-light">Pulxe</span>net
            </div>
            <p className="text-paragraph max-w-sm">
              Empowering GCC enterprises with top-tier offshore IT delivery, Managed Services, and intelligent Cloud Solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bebas text-2xl text-heading tracking-wide mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-paragraph">
                <Mail size={18} className="mr-3 text-primary-light" />
                <a href="mailto:info@pulxenet.com" className="hover:text-subheading transition-colors font-medium">info@pulxenet.com</a>
              </li>
              <li className="flex items-center text-paragraph">
                <Globe size={18} className="mr-3 text-primary-light" />
                <a href="https://pulxenet.com" className="hover:text-subheading transition-colors font-medium">www.pulxenet.com</a>
              </li>
              <li className="flex items-start text-paragraph">
                <MapPin size={18} className="mr-3 text-primary-light mt-1 flex-shrink-0" />
                <span className="font-medium">Serving the GCC Region<br />Offshore Delivery Center</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bebas text-2xl text-heading tracking-wide mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-paragraph hover:text-subheading font-medium transition-colors">About Us</a></li>
              <li><a href="#services" className="text-paragraph hover:text-subheading font-medium transition-colors">Services</a></li>
              <li><a href="#expertise" className="text-paragraph hover:text-subheading font-medium transition-colors">Technology</a></li>
              <li><a href="#process" className="text-paragraph hover:text-subheading font-medium transition-colors">Delivery Model</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pulxenet. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-subheading transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-subheading transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
