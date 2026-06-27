import { Link, generatePath } from 'react-router-dom';
import classNames from 'classnames';
import { AppRoute,STAR_WIDTH_PERCENT } from '../../const.ts';
import { Offer } from '../../types/type-offers.ts';

type OfferCardProps ={
  offer: Offer;
  onMouseEnter?:(offerId:string)=> void;
  onMouseLeave?:()=> void;
};

function OfferCard ({
  offer,
  onMouseEnter, onMouseLeave,
}: OfferCardProps){
  const {id, title, type, price, rating, previewImage, isPremium, isFavorite} = offer;
  const offerPath = generatePath(AppRoute.Offer, {id}); // собираем адреса/добавляем в шаблон/добавляем к ним номер id

  return(
    <article
      className="cities__card place-card"
      onMouseEnter={() => onMouseEnter?.(id)}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="place__card-mark">
        <Link to={offerPath}>
          <img className="place-card__image"
            src={previewImage}
            width="260"
            height="200" alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classNames(
              'place-card__bookmark-button','button',
              {'place-card__bookmark-button--active' : isFavorite}
            )}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavorite ? 'InBookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * STAR_WIDTH_PERCENT}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerPath}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
