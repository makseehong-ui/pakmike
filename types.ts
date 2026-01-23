
export interface ServiceFeature {
  title: string;
  desc: string;
  icon: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  poster?: string;
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  longDescription: string;
  category: 'security' | 'electrical' | 'smart' | 'maintenance';
  features: ServiceFeature[];
  benefits: string[];
  heroImageUrl: string;
  gallery?: GalleryItem[];
  relatedProjectId?: string;
  faq?: ServiceFAQ[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  imageUrl: string;
  gallery?: string[];
  description?: string;
  date: string;
  certified?: boolean;
}

export interface Product {
  id: string;
  brand: 'Hikvision' | 'Dahua';
  name: string;
  imageUrl: string;
  specs: string[];
  tag: string;
  tagColor?: string;
}

export interface LocationBranch {
  id: string;
  name: string;
  address: string;
  mapImageUrl: string;
}
