import { Review as ReviewType} from '../../types/type-review';
import Review from '../review/review-item';

type ReviewListProps = {
  reviews: ReviewType[];
};

function ReviewList({reviews}:ReviewListProps){
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>

      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
