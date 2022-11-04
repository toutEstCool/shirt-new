import { useContext } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'

import { SearchContext } from '../../App'

export const Search = ({ setSearchBlockOpened }) => {
  const { searchValue, setSearchValue } = useContext(SearchContext)
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
  )
}
