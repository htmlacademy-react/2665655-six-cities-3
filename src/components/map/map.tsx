import { useEffect, useRef } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { City, Offer } from '../../types/type-offers';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/use-map';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | undefined; // может быть выбрано или отсутсвовать
  className?:string;
}

// создаем обычную иконку с параметрами

const defaultCustomIcon = new Icon({
  iconSize: [40,40],
  iconUrl: URL_MARKER_DEFAULT,
  iconAnchor:[20,40]
});

// создаем Активную инонку с параметрами

const currentCustomIcon = new Icon ({
  iconSize: [40,40],
  iconUrl: URL_MARKER_CURRENT,
  iconAnchor:[20,40]
});

function Map ({city, offers, selectedOffer, className = 'cities__map map'}: MapProps){
  const mapRef = useRef(null);
  const map = useMap(mapRef,city);

  useEffect(() => {
    if(map) {
      const markerLayer = layerGroup().addTo(map); // создаем слой

      offers.forEach((offer)=>{ // cоздаем маркеры по координатам

        const marker = new Marker ({
          lat: offer.location.lat,
          lng: offer.location.lng
        });
        marker .setIcon(
          selectedOffer !== undefined && offer.id === selectedOffer.id
            ? currentCustomIcon // яркая иконкаа(активная)
            : defaultCustomIcon // обычная иконка
        ).addTo(markerLayer); // добавляй в слой который создали
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  },[map, offers,selectedOffer]);

  return (
    <section
      className={className}
      ref={mapRef}
    />
  );
}

export default Map;

