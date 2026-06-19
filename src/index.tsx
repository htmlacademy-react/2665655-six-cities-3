import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import {offers} from './mocks/offers';
import { review } from './mocks/reviews.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers} reviews={review}/>
  </React.StrictMode>
);
