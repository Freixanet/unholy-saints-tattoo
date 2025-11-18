import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Artists', href: '#artists' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Book Now', href: '#booking', highlight: true },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-saint-black/95 backdrop-blur-md border-saint-gray py-4' 
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="group">
          <h1 className="text-2xl font-bold tracking-[0.2em] text-saint-bone group-hover:text-saint-blood transition-colors duration-300">
            UNHOLY<span className="font-light text-saint-muted group-hover:text-saint-bone">SAINTS</span>
          </h1>
          <div className="flex items-center gap-1 text-[10px] text-saint-muted uppercase tracking-widest mt-1">
             <MapPin size={10} /> Barcelona, ES
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${
                link.highlight 
                  ? 'text-saint-blood hover:text-white' 
                  : 'text-saint-muted hover:text-saint-bone'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-saint-bone"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-saint-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={`text-2xl font-bold uppercase tracking-widest ${
              link.highlight ? 'text-saint-blood' : 'text-saint-bone'
            }`}
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={() => setMobileOpen(false)}
          className="absolute top-8 right-6 text-saint-muted"
        >
          <X size={32} />
        </button>
      </div>
    </nav>
  );
};
