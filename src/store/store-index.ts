import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './offers-store/offers-reducer';
import { createAPI } from '../services/api';

export const api = createAPI();

export const store = configureStore({ //создаем глобальный обьект хранилища
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk :{
        extraArgument: api,
      }
    })
});
