import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import {Offer} from '../types/type-offers.ts';
import LoginPage from '../pages/login-page/login-page.tsx';
import ErrorPage from '../pages/error-page/error-page.tsx';
import MainPage from '../pages/main-page/main-page.tsx';
import FavoritesPage from '../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../pages/offer-page/offer-page.tsx';
import PrivateRoute from '../components/private-route/private-route.tsx';

type AppProps = {
  offers: Offer[];
}

function App({offers}:AppProps): JSX.Element{
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <LoginPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage offers={offers}/>}
        />
        <Route
          path="*"
          element={<ErrorPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
