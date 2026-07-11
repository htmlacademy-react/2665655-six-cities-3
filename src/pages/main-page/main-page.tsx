import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AppRoute, CITIES, SortOption, AuthorizationStatus } from '../../const';
import OfferList from '../../components/offer-list/offer-list.tsx';
import Map from '../../components/map/map.tsx';
import { useAppDispatch, useAppSelector } from '../../components/hooks/hook-index';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import SortingOptions from '../../components/sorting-option/sorting-option.tsx';
import { getSortedOffers } from '../../utils.ts/utils-offers.ts';
import { changeCity } from '../../store/offers-store/offers-action.ts';

function MainPage(){

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null); // прямо сейчас навел курсор мышки в списке.

  const [activeSortOption, setActiveSortOption] = useState(SortOption.Popular); // какой тип сортировки выбран прямо сейчас

  const dispatch = useAppDispatch(); // подключаем Dispatch

  const city = useAppSelector((state) => state.city); // заходим в хранилице и достаем оттуда обьект текушего города

  const offers = useAppSelector((state) => state.offers); // забираем из Redux массив offers

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const currentCityOffers = offers.filter( //имя города совпадает с именем текущего выбранного города
    (offer) => offer.city.name === city
  );

  const sortedOffers = getSortedOffers(currentCityOffers, activeSortOption); //отфильтрованные квартиры текущего города и прогоняем их через функцию

  const favoriteOffersCount = currentCityOffers.filter((offer) => offer.isFavorite).length; //Подсчет избранных товаров для шапки

  const selectedOffer = currentCityOffers.find((offer) => offer.id === activeOfferId);

  const selectedCity = currentCityOffers[0]?.city;

  const handleCityClick = (selectedCityName: string) => {
    setActiveOfferId(null); //сбрасываем подсвеченный на карте отель
    dispatch(changeCity(selectedCityName)); //отправляет команду в Redux, чтобы хранилище переключилось на новый город
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {isAuth ? ( // ecли авторизован
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">{favoriteOffersCount}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </>
                ) : ( // если НЕ авторизован
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={CITIES}
              activeCity={city}
              onCityClick={handleCityClick}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentCityOffers.length} places to stay in {city}</b>
              <SortingOptions
                activeSortOption={activeSortOption}
                onSortOptionChange={setActiveSortOption}
              />
              <OfferList
                offers={sortedOffers}
                onCardMouseEnter={setActiveOfferId}
                onCardMouseLeave={()=> setActiveOfferId(null)}
              />
            </section>
            <div className="cities__right-section">
              {selectedCity && (
                <Map
                  city={selectedCity}
                  offers={currentCityOffers}
                  selectedOffer={selectedOffer}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
