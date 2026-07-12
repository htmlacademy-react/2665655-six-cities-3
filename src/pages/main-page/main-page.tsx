import { useState } from 'react';
import {CITIES, SortOption} from '../../const';
import OfferList from '../../components/offer-list/offer-list.tsx';
import Map from '../../components/map/map.tsx';
import { useAppDispatch, useAppSelector } from '../../components/hooks/hook-index';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import SortingOptions from '../../components/sorting-option/sorting-option.tsx';
import { getSortedOffers } from '../../utils.ts/utils-offers.ts';
import { changeCity } from '../../store/offers-store/offers-action.ts';
import Header from '../../components/headers/headers.tsx';


function MainPage(){

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null); // прямо сейчас навел курсор мышки в списке.

  const [activeSortOption, setActiveSortOption] = useState(SortOption.Popular); // какой тип сортировки выбран прямо сейчас

  const dispatch = useAppDispatch(); // подключаем Dispatch

  const city = useAppSelector((state) => state.city); // заходим в хранилице и достаем оттуда обьект текушего города

  const offers = useAppSelector((state) => state.offers); // забираем из Redux массив offers

  const currentCityOffers = offers.filter( //имя города совпадает с именем текущего выбранного города
    (offer) => offer.city.name === city
  );

  const sortedOffers = getSortedOffers(currentCityOffers, activeSortOption); //отфильтрованные квартиры текущего города и прогоняем их через функцию

  const selectedOffer = currentCityOffers.find((offer) => offer.id === activeOfferId);

  const selectedCity = currentCityOffers[0]?.city;

  const handleCityClick = (selectedCityName: string) => {
    setActiveOfferId(null); //сбрасываем подсвеченный на карте отель
    dispatch(changeCity(selectedCityName)); //отправляет команду в Redux, чтобы хранилище переключилось на новый город
  };

  return (
    <div className="page page--gray page--main">
      <Header isMainPage/>

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
