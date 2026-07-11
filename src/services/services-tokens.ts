const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);// заглядываем в память и оттуда зибираем токен

  return token ?? '';
};

export const saveToken = (token: Token): void =>{
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token); // cохраняем авторизованного пользователя
};
//когда пользователь нажимает выйти
export const dropToken = () : void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME); //стираем ячейку
};
