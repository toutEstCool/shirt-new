import debounce from 'lodash.debounce'
import { useCallback, useContext, useState } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'

import { SearchContext } from '../../App'

export const Search = ({ setSearchBlockOpened }) => {
  const [value, setValue] = useState('')
  const { setSearchValue } = useContext(SearchContext)

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str)
    }, 500),
    [],
  )

  const changeInputValue = (e) => {
    updateSearchValue(e.target.value)
    setValue(e.target.value)
  }

  return (
    <div className="search">
      <div className="search-block">
        <label htmlFor="search">Search by:</label>
        <input
          id="search"
          type="search"
          value={value}
          onChange={changeInputValue}
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
