import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus} from '../const';
import { Offer } from '../types/type-offers';
import { AppDispatch, State } from '../types/type-state';
import { fillOffers, setOffersLoadingStatus, requireAuthorization } from './offers-store/offers-action';
import { saveToken } from '../services/services-tokens';
import { UserData } from '../types/user-data';
import {AuthData} from '../types/auth-data';

export const fetchOfferAction = createAsyncThunk<void,
undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>
(
  'offers/fetchOffers',
  async(__arg, {dispatch, extra: api}) => {

    dispatch(setOffersLoadingStatus(true)); //включаем крутилку

    const {data} = await api.get<Offer[]>(APIRoute.Offers); //отправляем запрос в константы

    dispatch(fillOffers(data)); // сохраняем данные которые получили
    dispatch(setOffersLoadingStatus(false)); //выключаем
  },
);

//Проверка авторизации при старте
export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth)); //cтатус авторизован
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth)); // не авторизован/гость
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token); // вызываем функциюб, автоматический вход
    dispatch(requireAuthorization(AuthorizationStatus.Auth)); // авторизован, меняем статус
  },
);
