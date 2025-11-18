import React from 'react';
import { ARTISTS } from '../constants';
import { Instagram } from 'lucide-react';

export const ArtistGallery: React.FC = () => {
  return (
    <section id="artists" className="py-24 bg-saint-dark relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-saint-bone uppercase tracking-tighter mb-4">
            The <span className="text-saint-blood">Saints</span>
          </h2>
          <p className="text-saint-muted max-w-md text-sm tracking-wide leading-relaxed">
            Our residents are chosen for their mastery of craft and unique artistic vision. Browse their portfolios below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {ARTISTS.map((artist) => (
            <div key={artist.id} className="group relative h-[500px] overflow-hidden cursor-pointer bg-saint-black">
              <img 
                src={artist.image} 
                alt={artist.name}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-saint-black via-saint-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-saint-bone uppercase tracking-widest mb-1">{artist.name}</h3>
                <p className="text-xs text-saint-blood font-bold tracking-widest uppercase mb-4">{artist.specialty}</p>
                <p className="text-xs text-saint-muted leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4">
                  {artist.bio}
                </p>
                <div className="flex items-center gap-2 text-saint-bone text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <Instagram size={14} /> {artist.instagram}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
