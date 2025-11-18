import React from 'react';
import { MapPin, Mail, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-saint-black border-t border-saint-gray py-16 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-[0.2em] text-saint-bone">
              UNHOLY<span className="font-light text-saint-muted">SAINTS</span>
            </h2>
            <p className="text-saint-muted max-w-xs leading-relaxed">
              Ink is permanent. So is our commitment to the highest standards of art and hygiene in Barcelona.
            </p>
            <div className="flex gap-4 text-saint-bone">
              <a href="#" aria-label="Instagram" className="hover:text-saint-blood transition-colors"><Instagram size={20} /></a>
              <a href="#" aria-label="Email" className="hover:text-saint-blood transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-saint-bone uppercase tracking-widest mb-2">Studio</h3>
            <div className="flex items-start gap-3 text-saint-muted">
              <MapPin size={16} className="mt-1 shrink-0 text-saint-blood" />
              <address className="not-italic leading-loose">
                Carrer dels Sants, 666<br />
                El Raval, 08001<br />
                Barcelona, Spain
              </address>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-saint-bone uppercase tracking-widest mb-2">Hours</h3>
            <ul className="space-y-2 text-saint-muted">
              <li className="flex justify-between max-w-[200px]">
                <span>Mon - Fri</span>
                <span className="text-saint-bone">11:00 - 20:00</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Saturday</span>
                <span className="text-saint-bone">12:00 - 18:00</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Sunday</span>
                <span className="text-saint-blood">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-saint-gray/30 text-center text-xs text-saint-gray uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Unholy Saints Barcelona. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
