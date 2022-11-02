import { useEffect, useState } from 'react'
import { Categories } from '../components/categories/categories'
import { ProductItems } from '../components/product-items/product-items'
import { Sort } from '../components/sort/sort'
import { Skeleton } from '../components/product-items/skeleton'

const URL = 'https://635fd285ca0fe3c21aa57c91.mockapi.io/products'

export const Products = () => {
	const [loading, setLoading] = useState(true)
	const [items, setItems] = useState([])

	useEffect(() => {
		fetch(URL)
			.then(arr => arr.json())
			.then(data => {
				setItems(data)
				setLoading(false)
			})
	}, [])

	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
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
