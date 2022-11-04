import { IoMdCloseCircleOutline } from 'react-icons/io';

export const Search = ({
  setSearchBlockOpened,
  searchValue,
  setSearchValue,
}) => {
  return (
    <div className="search">
      <div className="search-block">
        <label htmlFor="search">Search by:</label>
        <input
          id="search"
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Enter what you're looking for"
        />
        <IoMdCloseCircleOutline
          onClick={() => setSearchBlockOpened(false)}
          width={100}
          height={100}
          color="white"
        />
      </div>
    </div>
  );
};
