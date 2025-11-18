import React from 'react';
import { Navbar } from '../components/Navbar';
import { ArtistGallery } from '../components/ArtistGallery';
import { BookingForm } from '../components/BookingForm';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { ArrowDown, ShieldCheck, PenTool, Droplet } from 'lucide-react';
import { SERVICES, FAQS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-saint-black text-saint-bone selection:bg-saint-blood selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Hero Background Image with Filters */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/unholybg/1920/1080" 
            alt="Studio Ambience" 
            className="w-full h-full object-cover grayscale brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-saint-black/70 via-transparent to-saint-black"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
          <p className="text-saint-blood text-xs md:text-sm font-bold tracking-[0.3em] uppercase animate-fade-in-up">
            Est. 2018 — Barcelona
          </p>
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
            Ink Is <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saint-bone to-saint-gray">Sacrament</span>
          </h1>
          <p className="text-saint-muted text-sm md:text-base tracking-wide max-w-lg mx-auto leading-relaxed">
            We do not just mark skin. We curate identity through pain and pigment in the heart of the gothic quarter.
          </p>
          <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              Book Appointment
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' })}>
              View Artists
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-saint-muted/50">
          <ArrowDown size={24} />
        </div>
      </header>

      {/* Features / Process Strip */}
      <section id="process" className="py-20 border-y border-saint-gray/20 bg-saint-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: ShieldCheck, title: 'Sterile Environment', text: 'Hospital-grade sterilization protocols. Your safety is the baseline of our art.' },
            { icon: PenTool, title: 'Custom Art Only', text: 'We do not copy. We create bespoke designs tailored to your narrative and anatomy.' },
            { icon: Droplet, title: 'Premium Pigments', text: 'Vegan, cruelty-free inks tested for longevity and vibrancy over decades.' }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4 group">
              <div className="p-4 rounded-full border border-saint-gray text-saint-blood group-hover:border-saint-blood group-hover:bg-saint-blood/10 transition-all duration-500">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-saint-bone">{feature.title}</h3>
              <p className="text-saint-muted text-xs leading-loose max-w-xs">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Artists Grid */}
      <ArtistGallery />

      {/* Services Info */}
      <section className="py-24 bg-saint-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold uppercase tracking-tighter text-saint-bone">
                Our <span className="text-saint-blood">Craft</span>
              </h2>
              <div className="space-y-8">
                {SERVICES.map((service) => (
                  <div key={service.id} className="pl-6 border-l-2 border-saint-gray hover:border-saint-blood transition-colors duration-300">
                    <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{service.title}</h3>
                    <p className="text-saint-muted text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[500px] w-full bg-saint-gray relative overflow-hidden">
               <img 
                src="https://picsum.photos/seed/tattooing/800/800" 
                alt="Tattoo Process" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 bg-saint-dark relative">
        <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-5xl font-bold uppercase tracking-tighter leading-none text-saint-bone">
              Secure <br/> Your <br/><span className="text-saint-blood">Flesh</span>
            </h2>
            <p className="text-saint-muted leading-relaxed">
              Due to high demand, our artists often book months in advance. Fill out the form to start the consultation process.
            </p>
            
            <div className="pt-8 space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-saint-bone mb-4">Frequently Asked</h3>
              {FAQS.map((faq, idx) => (
                <details key={idx} className="group cursor-pointer">
                  <summary className="list-none flex justify-between items-center text-xs font-bold uppercase tracking-widest text-saint-muted hover:text-saint-blood transition-colors border-b border-saint-gray py-3">
                    {faq.question}
                    <span className="group-open:rotate-180 transition-transform duration-300">▼</span>
                  </summary>
                  <p className="py-4 text-sm text-saint-muted/80 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-saint-black border border-saint-gray/30 p-8 md:p-12 shadow-2xl shadow-black">
            <BookingForm />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};
