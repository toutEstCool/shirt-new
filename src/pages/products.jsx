import axios from 'axios'
import qs from 'qs'
import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { SearchContext } from '../App'
import { Categories } from '../components/categories/categories'
import { Pagination } from '../components/pagination/pagination'
import { ProductItems } from '../components/product-items/product-items'
import { Skeleton } from '../components/product-items/skeleton'
import { Sort } from '../components/sort/sort'
import { setCategoryId } from '../redux/slices/filterSlice'

const URL = process.env.REACT_APP_API_URL

export const Products = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const activeSort = useSelector(
    (state) => state.filter.activeSort.sortProperty,
  )
  const activeCategoryId = useSelector((state) => state.filter.activeCategory)

  const { searchValue } = useContext(SearchContext)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [items, setItems] = useState([])

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const orderBy = activeSort.includes('-') ? 'asc' : 'desc'
  const sortBy = activeSort.replace('-', '')
  const categoryBy = activeCategoryId > 0 ? `category=${activeCategoryId}` : ''
  const searchRequest = searchValue ? `&search=${searchValue}` : ''

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `${URL}?${categoryBy}&sortBy=${sortBy}&order=${orderBy}&page=${currentPage}&limit=3${searchRequest}`,
      )
      .then((res) => {
        setItems(res.data)
        setLoading(false)
      })
  }, [activeCategoryId, activeSort, currentPage, searchValue])

  useEffect(() => {
    const queryParams = qs.stringify({
      category: activeCategoryId,
      sort: activeSort,
    })
    navigate(`?${queryParams}`)
  }, [activeCategoryId, activeSort])

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />)
  const products = items.map((obj) => <ProductItems key={obj.id} {...obj} />)

  return (
    <>
      <div className="content__top">
        <Categories
          value={activeCategoryId}
          onChangeCategory={onChangeCategory}
        />
        <Sort />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '50px',
          marginTop: '50px',
        }}
      >
        <h2 className="content__title">Choose</h2>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
      <div className="content__items">{loading ? skeletons : products}</div>
    </>
  )
}
