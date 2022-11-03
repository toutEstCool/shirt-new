import { useEffect, useState } from 'react'
import { Categories } from '../components/categories/categories'
import { ProductItems } from '../components/product-items/product-items'
import { Sort } from '../components/sort/sort'
import { Skeleton } from '../components/product-items/skeleton'

const URL = process.env.REACT_APP_API_URL

export const Products = () => {
	const [loading, setLoading] = useState(true)
	const [items, setItems] = useState([])
	const [activeCategory, setActiveCategory] = useState(0)
	const [activeSort, setActiveSort] = useState({
		name: 'popularity',
		sortProperty: 'rating',
	})

	const orderBy = activeSort.sortProperty.includes('-') ? 'asc' : 'desc'
	const sortBy = activeSort.sortProperty.replace('-', '')
	const categoryBy = activeCategory > 0 ? `category=${activeCategory}` : ''

	useEffect(() => {
		setLoading(true)
		fetch(`${URL}?${categoryBy}&sortBy=${sortBy}&order=${orderBy}`)
			.then(arr => arr.json())
			.then(data => {
				setItems(data)
				setLoading(false)
			})
	}, [activeCategory, activeSort])

	return (
		<>
			<div className='content__top'>
				<Categories
					value={activeCategory}
					onChangeCategory={i => setActiveCategory(i)}
				/>
				<Sort value={activeSort} onChangeSort={i => setActiveSort(i)} />
			</div>
			<h2
				className='content__title'
				style={{ marginBottom: '50px', marginTop: '50px' }}
			>
				Choose
			</h2>
			<div className='content__items'>
				{loading
					? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
					: items.map(obj => <ProductItems key={obj.id} {...obj} />)}
			</div>
		</>
	)
}

/* <ProductItems {...obj} key={obj.id} /> */
