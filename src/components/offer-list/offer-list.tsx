import { Offer } from '../../types/type-offers';
import OfferCard from '../offer-card/offer-card';

type OfferListProps ={
  offers: Offer[];
  onCardMouseEnter:(offerId:string) => void;
  onCardMouseLeave:()=> void;
};

function OfferList ({
  offers,
  onCardMouseEnter, onCardMouseLeave,
}: OfferListProps) {
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={onCardMouseEnter}
          onMouseLeave={onCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default OfferList;
