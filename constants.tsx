
import React from 'react';
import { WeddingEvent } from './types';

export const COLORS = {
  burgundy: '#8B1538',
  maroon: '#6B0F1A',
  gold: '#D4AF37',
  warmGold: '#FFD700',
  cream: '#FFF8E7',
  ivory: '#FFFFF0',
};

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'haldi',
    title: 'Haldi / Punjab Night',
    date: 'Friday, February 6, 2026',
    time: '6:00 PM onwards',
    venue: 'Royal Heritage Gardens',
    address: 'Emerald Green Valley, City Center',
    description: 'Join us for a vibrant evening of Haldi ceremony followed by traditional Punjabi festivities and dinner.',
    dressCode: 'Vibrant Yellow or Traditional Punjabi Attire',
    colorTheme: '#FFD700',
    icon: '🌼',
  },
  {
    id: 'mehndi',
    title: 'Mehandi / Sangeet Night',
    date: 'Saturday, February 7, 2026',
    time: '7:00 PM onwards',
    venue: 'Grand Crystal Ballroom',
    address: '456 Celebration Boulevard, City Heights',
    description: 'An enchanting night of henna artistry, dance performances, and melodic celebrations.',
    dressCode: 'Traditional Glamour / Indo-Western',
    colorTheme: '#2C5F2D',
    icon: '🎨',
  },
  {
    id: 'wedding',
    title: 'The Sacred Wedding',
    date: 'Sunday, February 8, 2026',
    time: '12:00 PM (Noon)',
    venue: 'KMJ CONVENTION CENTER',
    address: 'KUZHIVELIPPADY, ERNAKULAM',
    description: 'Witness the sacred union of Nizma and Rafsal Rahim as they embark on their beautiful journey together.',
    dressCode: 'Royal Formal Traditional',
    colorTheme: '#8B1538',
    icon: '💍',
  },
];

export const BISMILLAH = 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ';
export const BRIDE_NAME = "NIZMA PARVIN";
export const GROOM_NAME = "RAFSAL RAHIM";
export const HASHTAG = ""; // Removed hashtag as requested
