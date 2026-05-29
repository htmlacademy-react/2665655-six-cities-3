import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import LoginScreen from '../pages/login-screen/login-screen.tsx';
import ErrorPage from '../pages/error/error.tsx';
import MainPage from '../pages/main-screen/main-screen.tsx';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen.tsx';
import Offer from '../pages/offer-screen/offer-screen.tsx';
import PrivateRoute from '../components/private-route/private-route.tsx';


type AppProps = {
  offersCount: number;
}

function App({offersCount} : AppProps):JSX.Element{
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage offersCount={offersCount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <LoginScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer/>}
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
