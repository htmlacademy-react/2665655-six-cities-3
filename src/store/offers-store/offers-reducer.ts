import { createReducer } from '@reduxjs/toolkit';
import { Offer, OfferDetails } from '../../types/type-offers';
import {
  changeCity,
  fillOffers,
  requireAuthorization,
  setOffersLoadingStatus,
  setUserEmail,
  fillOffer,
  fillNearbyOffers,
  fillReviews,
  setOfferLoadingStatus,
  setOfferNotFoundStatus,
} from './offers-action';
import { CITIES, AuthorizationStatus } from '../../const';
import { Review } from '../../types/type-review';


//описание структуры
type InitialState = {
  city: string;
  offers: Offer[];
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userEmail: string;
  currentOffer: OfferDetails | null;
  nearbyOffers: Offer[];
  reviews: Review[];
  isOfferLoading: boolean;
  isOfferNotFound: boolean;
};

//начальное состояние
const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: '',
  currentOffer: null,
  nearbyOffers: [],
  reviews: [],
  isOfferLoading: false,
  isOfferNotFound: false,
};

//изменение состояние приложения
const reducer = createReducer(initialState, (builder) => {
  builder
    //экшен смены города
    .addCase(changeCity, (state, action) => {
      state.city = action.payload; //Перезаписываем текущий город на новый
    })
    //экшен успешной загрузки отелей
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload; //Кладем массив отелей с сервера в стейт
    })
    //экшен изменения статуса спиннера/загрузки
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload; //Становится true (показать спиннер) или false (скрыть)
    })
    //экшен изменения статуса пользователя
    .addCase(requireAuthorization,(state,action)=>{
      state.authorizationStatus = action.payload; // Меняем на Auth или NoAuth
    })
    .addCase(setUserEmail,(state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(fillOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(fillNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(fillReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isOfferLoading = action.payload;
    })
    .addCase(setOfferNotFoundStatus, (state, action) => {
      state.isOfferNotFound = action.payload;
    });
});

export { reducer };
