import { Link } from 'react-router-dom';

import { NotFoundBlock } from '../components/not-found-block';

export const NotFound = () => {
  return (
    <div className="not-found-page">
      <NotFoundBlock />
      <Link to="/">
        <button className="button">back</button>
      </Link>
    </div>
  );
};
