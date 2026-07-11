import { createAction } from '@reduxjs/toolkit';
import {Offer} from '../../types/type-offers';
import { AuthorizationStatus } from '../../const';

//экшен смена города
export const changeCity = createAction<string>('offers/changeCity');
//экшен записи списка отелей
export const fillOffers = createAction<Offer[]>('offers/fillOffers');
//экшен переключение индикатора загрузки
export const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');
//экшен изменение статуса авторизации
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
