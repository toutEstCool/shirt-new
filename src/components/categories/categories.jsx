import { useState } from 'react'

export const Categories = () => {
	const [activeCategory, setActiveCategory] = useState('All')
	const category = ['All', 'Men"s', 'Female', 'Childish']

	return (
		<div className='categories'>
			<ul>
				{category.map(c => (
					<li
						key={c}
						className={activeCategory === c ? 'active' : ''}
						onClick={() => setActiveCategory(c)}
					>
						{c}
					</li>
				))}
			</ul>
		</div>
	)
}
