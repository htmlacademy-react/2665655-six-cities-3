import { SortOption } from '../const';
import { Offer } from '../types/type-offers';


const REVIEW_DATA_FORMAT = {
  month: 'long',
  year: 'numeric'
} as const;

// создаем функцию которая возвращает дату в строку

export function formatReviewDate (date: string){
  return new Date(date).toLocaleDateString('en-US', REVIEW_DATA_FORMAT);
}

export const getSortedOffers = (
  offers: Offer[],
  sortOption: SortOption
) => {
  switch (sortOption) {
    case SortOption.PriceLowToHigh:
      return [...offers].sort((firstOffer, secondOffer) => firstOffer.price - secondOffer.price);

    case SortOption.PriceHighToLow:
      return [...offers].sort((firstOffer, secondOffer) => secondOffer.price - firstOffer.price);

    case SortOption.TopRatedFirst:
      return [...offers].sort((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating);

    case SortOption.Popular:
      return [...offers];
  }
};
