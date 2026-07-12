import { createAction } from '@reduxjs/toolkit';
import {Offer,OfferDetails} from '../../types/type-offers';
import { AuthorizationStatus } from '../../const';
import { Review } from '../../types/type-review';

//экшен смена города
export const changeCity = createAction<string>('offers/changeCity');
//экшен записи списка отелей
export const fillOffers = createAction<Offer[]>('offers/fillOffers');
//экшен переключение индикатора загрузки
export const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');
//экшен изменение статуса авторизации
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserEmail = createAction<string>('user/setUserEmail');

export const fillOffer = createAction<OfferDetails | null>('offers/fillOffer');

export const fillNearbyOffers = createAction<Offer[]>('offers/fillNearbyOffers');

export const fillReviews = createAction<Review[]>('offers/fillReviews');

export const setOfferLoadingStatus = createAction<boolean>('offers/setOfferLoadingStatus');

export const setOfferNotFoundStatus = createAction<boolean>(
  'offers/setOfferNotFoundStatus'
);
