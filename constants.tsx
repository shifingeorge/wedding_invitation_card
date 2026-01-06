
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
    title: 'Haldi',
    date: 'Friday, February 6, 2026',
    time: '5:30 PM onwards',
    venue: 'Home',
    address: '',
    description: 'Join us for a vibrant evening of Haldi ceremony.',
    dressCode: 'Yellow and Orange',
    colorTheme: '#FFD700',
    icon: '🌼',
  },
  {
    id: 'mehndi',
    title: 'Mehandi Night',
    date: 'Saturday, February 7, 2026',
    time: '7:00 PM onwards',
    venue: 'KMJ CONVENTION CENTER',
    address: 'KUZHIVELIPPADY, ERNAKULAM',
    description: 'An enchanting night of henna artistry, dance performances, and melodic celebrations.',
    dressCode: '',
    colorTheme: '#2C5F2D',
    icon: '🎨',
  },
  {
    id: 'wedding',
    title: 'The Sacred Wedding',
    date: 'Sunday, February 8, 2026',
    time: '11:30 AM (Nikah)',
    venue: 'KMJ CONVENTION CENTER',
    address: 'KUZHIVELIPPADY, ERNAKULAM',
    description: 'Witness the sacred union of Nizma and Rafsal Rahim as they embark on their beautiful journey together.',
    dressCode: '',
    colorTheme: '#8B1538',
    icon: '💍',
  },
];

export const BISMILLAH = 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ';
export const BRIDE_NAME = "NIZMA PARVIN";
export const GROOM_NAME = "RAFSAL RAHIM";
export const HASHTAG = ""; // Removed hashtag as requested
