import { Offer } from '../types/type-offers.ts';

export const offers:Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    rating: 4.8,
    previewImage: 'img/apartment-01.jpg',
    isFavorite: true,
    isPremium: true
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'house',
    price: 80,
    rating: 4.2,
    previewImage: 'img/apartment-02.jpg',
    isFavorite: false,
    isPremium: false
  },
  {
    id: '3',
    title: 'Canal View Cozy Room',
    type: 'room',
    price: 132,
    rating: 4.7,
    previewImage: 'img/apartment-03.jpg',
    isFavorite: true,
    isPremium: false
  },
  {
    id: '4',
    title: 'Nice, cozy, warm atmosphere',
    type: 'hotel',
    price: 180,
    rating: 5.0,
    previewImage: 'img/apartment-04.jpg',
    isFavorite: false,
    isPremium: true
  },
];
