export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;

}
export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  rating: number;
  previewImage:string;
  isFavorite: boolean;
  isPremium: boolean;
}
