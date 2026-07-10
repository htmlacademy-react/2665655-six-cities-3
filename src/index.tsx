import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import { Provider } from 'react-redux';
import {store} from './store/store-index.ts';
import { fetchOfferAction } from './store/api-actions.ts';

store.dispatch(fetchOfferAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
