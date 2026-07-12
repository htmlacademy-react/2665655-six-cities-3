import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from '../../const.ts';
import { useAppSelector } from '../hooks/hook-index.ts';

type PrivateRouteProps ={
  children : JSX.Element;
}

function PrivateRoute ({children}: PrivateRouteProps){
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return(
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
