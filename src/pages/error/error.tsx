import {Link} from 'react-router-dom';

function ErrorPage (): JSX.Element {
  return(
    <div style={{textAlign:'center', padding:'30px'}}>
      <h1>404 Not Found</h1>
      <p>Такой страницы не существует</p>
      <Link to="/" style={{color:'black', textDecoration:'underline'}}>
      На главную страницу
      </Link>
    </div>
  );
}

export default ErrorPage;
