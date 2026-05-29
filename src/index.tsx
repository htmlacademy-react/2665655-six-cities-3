import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';

const Setting = {
  offerCount : 312
}as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount={Setting.offerCount}
    />
  </React.StrictMode>
);
