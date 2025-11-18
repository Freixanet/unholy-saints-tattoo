import React, { useState } from 'react';
import { Button } from './ui/Button';
import { ARTISTS } from '../constants';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    artist: '',
    placement: '',
    description: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', artist: '', placement: '', description: '' });
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-center p-12 border border-saint-gray bg-saint-dark/50">
        <h3 className="text-3xl font-bold text-saint-bone mb-4">Request Received</h3>
        <p className="text-saint-muted mb-8">Our saints are reviewing your request. Expect a response via email within 48 hours.</p>
        <Button onClick={() => setStatus('idle')} variant="outline">Submit Another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-saint-muted font-bold">Full Name</label>
          <input 
            required
            type="text" 
            className="w-full bg-saint-black border border-saint-gray p-4 text-saint-bone focus:border-saint-blood focus:outline-none transition-colors text-sm placeholder-saint-gray/30"
            placeholder="J. Doe"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-saint-muted font-bold">Email</label>
          <input 
            required
            type="email" 
            className="w-full bg-saint-black border border-saint-gray p-4 text-saint-bone focus:border-saint-blood focus:outline-none transition-colors text-sm placeholder-saint-gray/30"
            placeholder="email@example.com"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-saint-muted font-bold">Preferred Artist</label>
        <select 
          required
          className="w-full bg-saint-black border border-saint-gray p-4 text-saint-bone focus:border-saint-blood focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
          value={formData.artist}
          onChange={e => setFormData({...formData, artist: e.target.value})}
        >
          <option value="">No Preference / First Available</option>
          {ARTISTS.map(a => (
            <option key={a.id} value={a.id}>{a.name} ({a.specialty})</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-saint-muted font-bold">Placement & Size</label>
        <input 
          required
          type="text" 
          className="w-full bg-saint-black border border-saint-gray p-4 text-saint-bone focus:border-saint-blood focus:outline-none transition-colors text-sm placeholder-saint-gray/30"
          placeholder="e.g. Left forearm, approx 15cm"
          value={formData.placement}
          onChange={e => setFormData({...formData, placement: e.target.value})}
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-saint-muted font-bold">Description</label>
        <textarea 
          required
          rows={4}
          className="w-full bg-saint-black border border-saint-gray p-4 text-saint-bone focus:border-saint-blood focus:outline-none transition-colors text-sm placeholder-saint-gray/30 resize-none"
          placeholder="Describe your idea, references, and any specific elements you want included."
          value={formData.description}
          onChange={e => setFormData({...formData, description: e.target.value})}
        />
      </div>

      <div className="pt-4">
        <Button type="submit" disabled={status === 'submitting'} className="w-full">
          {status === 'submitting' ? 'Transmitting...' : 'Request Appointment'}
        </Button>
        <p className="text-[10px] text-saint-gray mt-4 text-center">
          By submitting, you acknowledge that a deposit is required to confirm bookings.
        </p>
      </div>
    </form>
  );
};
