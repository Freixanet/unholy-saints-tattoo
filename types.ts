export interface Artist {
  id: string;
  name: string;
  specialty: string;
  image: string;
  instagram: string;
  bio: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
