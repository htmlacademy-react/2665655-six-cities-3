import NearbyOfferCard from '../nearby-offer-card/nearby-offer-card';
import { Offer } from '../../types/type-offers.ts';

type NearbyOffersListProps ={
  offers: Offer[];
}

function NearbyOfferList ({offers}:NearbyOffersListProps): JSX.Element{
  return(
    <div className="near-places__list places__list">
      {offers.map((offer)=>(
        <NearbyOfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default NearbyOfferList;
