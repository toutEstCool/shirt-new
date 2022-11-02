import './scss/app.scss'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header/header'
import { Products } from './pages/products'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'

export const App = () => {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/products' element={<Products />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}
