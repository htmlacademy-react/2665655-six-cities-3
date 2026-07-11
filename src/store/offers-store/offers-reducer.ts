import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../../types/type-offers';
import { changeCity, fillOffers,setOffersLoadingStatus, requireAuthorization } from './offers-action';
import { CITIES, AuthorizationStatus } from '../../const';


//описание структуры
type InitialState = {
  city: string;
  offers: Offer[];
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
};

//начальное состояние
const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
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
    });
});

export { reducer };
