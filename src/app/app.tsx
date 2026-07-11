import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../const';
import LoginPage from '../pages/login-page/login-page';
import ErrorPage from '../pages/error-page/error-page';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import PrivateRoute from '../components/private-route/private-route';
import Spinner from '../components/spinner/spinner';
import { useAppSelector } from '../components/hooks/hook-index';


function App() {
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  if (isOffersLoading) {
    return <Spinner/>;
  }
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Login}
          element={
            <LoginPage/>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
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
