import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { Search } from '../search/search';

export const Header = ({ searchValue, setSearchValue }) => {
  const [searchBlockOpened, setSearchBlockOpened] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/dealers">Dealers</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>

        <Link className="header__logo" to="/">
          <img src="assets/images/logo.png" />
        </Link>

        {searchBlockOpened && (
          <Search
            setSearchBlockOpened={setSearchBlockOpened}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        )}
        <ul className="header__cart">
          <li>
            <AiOutlineSearch
              width={16}
              hanging={16}
              onClick={() => setSearchBlockOpened(true)}
            />
          </li>
          <li>
            <a style={{ fontSize: '16px', fontWeight: 700 }} href="/">
              520 $
            </a>
          </li>
          <li>
            <a href="/" className="header__cart__price">
              <BsCart2 width={16} hanging={16} />
              <span>0</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
