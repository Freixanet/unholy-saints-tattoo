import { Artist, Service, FaqItem } from './types';

export const ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'ELARA VOID',
    specialty: 'Dark Realism',
    image: 'https://picsum.photos/seed/elara/400/500',
    instagram: '@elara_void_saints',
    bio: 'Specializing in high-contrast black and grey realism with occult undertones.'
  },
  {
    id: '2',
    name: 'MARCUS THORN',
    specialty: 'Neo-Traditional',
    image: 'https://picsum.photos/seed/marcus/400/500',
    instagram: '@thorn_tattoos',
    bio: 'Bold lines and muted color palettes. Animals, daggers, and floral brutality.'
  },
  {
    id: '3',
    name: 'SOPHIA ASH',
    specialty: 'Fine Line / Micro',
    image: 'https://picsum.photos/seed/sophia/400/500',
    instagram: '@ash_lines',
    bio: 'Delicate geometry and single-needle execution. Precision is sacrament.'
  },
  {
    id: '4',
    name: 'KAI ZEN',
    specialty: 'Abstract / Blackwork',
    image: 'https://picsum.photos/seed/kai/400/500',
    instagram: '@kaizen_ink',
    bio: 'Heavy blackwork, blast-overs, and abstract flow tailored to anatomy.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'consult',
    title: 'Consultation',
    description: 'Every piece begins with a conversation. We align your vision with our craft.',
    iconName: 'MessageSquare'
  },
  {
    id: 'custom',
    title: 'Custom Design',
    description: 'One-off pieces drawn specifically for your anatomy. No copies, ever.',
    iconName: 'PenTool'
  },
  {
    id: 'coverup',
    title: 'Cover Up',
    description: 'Expert concealment of past mistakes with heavy pigment saturation.',
    iconName: 'Layers'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Do you accept walk-ins?",
    answer: "We are primarily an appointment-only studio to ensure quality and dedication to each piece. Occasionally we host flash days which are announced on Instagram."
  },
  {
    question: "What is the deposit policy?",
    answer: "A non-refundable deposit is required to secure your date and drawing time. This comes off the final price of the tattoo."
  },
  {
    question: "How do I prepare for my session?",
    answer: "Sleep well, eat a heavy meal beforehand, stay hydrated, and avoid alcohol 24 hours prior. Wear comfortable black clothing."
  }
];
