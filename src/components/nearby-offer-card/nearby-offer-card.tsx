import { Link, generatePath } from 'react-router-dom';
import { Offer } from '../../types/type-offers.ts';
import { AppRoute } from '../../const.ts';

type NearbyOfferCardProps = {
  offer: Offer;
}

function NearbyOfferCard ({offer}:NearbyOfferCardProps): JSX.Element{
  const offerPath = generatePath(AppRoute.Offer, {id: offer.id});

  return(
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={offerPath}>
          <img className="place__card-image"
            src={offer.previewImage} width="260"
            height="200"
            alt={offer.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerPath}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default NearbyOfferCard;
