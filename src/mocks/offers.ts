import { City, Offer } from '../types/type-offers.ts';

export const amsterdam: City = {
  name: 'Amsterdam',
  location: {
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    zoom: 8,
  }
};

export const offers:Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    city: amsterdam,
    location:{
      lat: 52.3909553943508,
      lng: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'house',
    price: 80,
    city:amsterdam,
    location: {
      lat: 52.3609553943508,
      lng: 4.85309666406198,
      zoom: 8,
    },
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
    city: amsterdam,
    location: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
      zoom: 8,
    },
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
    city: amsterdam,
    location: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
      zoom: 8,
    },
    rating: 5.0,
    previewImage: 'img/apartment-04.jpg',
    isFavorite: false,
    isPremium: true
  },
];
