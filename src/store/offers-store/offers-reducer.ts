import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../../types/type-offers';
import { changeCity, fillOffers,setOffersLoadingStatus } from './offers-action';
import { CITIES } from '../../const';


//описание структуры
type InitialState = {
  city: string;
  offers: Offer[];
  isOffersLoading: boolean;
};

//начальное состояние
const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  isOffersLoading: false,
};

//изменение состояние приложения
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => { //кликает на другой город
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => { //данные успешно скачались
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => { //экшен
      state.isOffersLoading = action.payload;
    });
});

export { reducer };
