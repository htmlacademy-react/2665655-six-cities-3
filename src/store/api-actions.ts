import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute} from '../const';
import { Offer } from '../types/type-offers';
import { AppDispatch, State } from '../types/type-state';
import { fillOffers, setOffersLoadingStatus } from './offers-store/offers-action';

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
