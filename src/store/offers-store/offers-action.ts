import { createAction } from '@reduxjs/toolkit';
import {Offer} from '../../types/type-offers';

export const changeCity = createAction<string>('offers/changeCity');

export const fillOffers = createAction<Offer[]>('offers/fillOffers');

export const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');
