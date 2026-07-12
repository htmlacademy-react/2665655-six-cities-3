import { Link } from 'react-router-dom';
import Header from '../../components/headers/headers'; // проверьте правильность пути к вашему Хедеру
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index page__main--index-empty">
        <div className="container" style={{ textAlign: 'center', padding: '120px 0' }}>
          <b style={{ fontSize: '120px', color: '#4481c3', display: 'block', lineHeight: '1' }}>
            404
          </b>
          <h1 className="reply__title" style={{ fontSize: '32px', marginTop: '20px', marginBottom: '20px' }}>
            Page not found
          </h1>
          <p className="reviews__text" style={{ fontSize: '18px', marginBottom: '40px', textAlign: 'center' }}>
            We are sorry, but the page you requested does not exist.
          </p>
          <Link
            to={AppRoute.Main}
            className="locations__item-link tabs__item tabs__item--active"
            style={{ padding: '15px 30px', borderRadius: '3px', display: 'inline-block' }}
          >
            <span>Go back to the main page</span>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
