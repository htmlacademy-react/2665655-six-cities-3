import classNames from 'classnames';

type CitiesListProps = {
  cities: string[];
  activeCity: string;
  onCityClick: (city:string) => void;
};

function CitiesList ({cities,activeCity,onCityClick}: CitiesListProps) {
  return(
    <ul className="locations__list tabs__list">
      {cities.map((city)=>(
        <li className="locations__item" key ={city}>
          <button
            type="button"
            className={classNames(
              'location__item-link',
              'tabs__item',
              {'tabs__item--active' : city === activeCity}
            )}
            onClick={()=> onCityClick(city)}
          ><span>{city}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
