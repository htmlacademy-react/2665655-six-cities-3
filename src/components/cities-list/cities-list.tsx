import classNames from 'classnames';
import { City } from '../../types/type-offers';

type CitiesListProps = {
  cities: City[]; // массива со всеми городами
  activeCity: City; // город который выбран в данный момент
  onCityClick: (city:City) => void; // когда пользователь кликнет по городу
};

function CitiesList ({cities,activeCity,onCityClick}: CitiesListProps) {
  return(
    <ul className="locations__list tabs__list">
      {cities.map((city)=>(
        <li className="locations__item" key ={city.name}>
          <button
            type="button"
            className={classNames(
              'location__item-link',
              'tabs__item',
              {'tabs__item--active' : city.name === activeCity.name}
            )}
            onClick={()=> onCityClick(city)}
          ><span>{city.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
