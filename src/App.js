import './scss/app.scss'

import { AiOutlineSearch } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'

export const App = () => {
	return (
		<div className='wrapper'>
			<div className='header'>
				<div className='container'>
					<div className='header__nav'>
						<ul>
							<li>
								<a href='/'>Products</a>
							</li>
							<li>
								<a href='/'>Dealers</a>
							</li>
							<li>
								<a href='/'>Contacts</a>
							</li>
						</ul>
					</div>

					<a className='header__logo' href='/'>
						<img src='assets/images/logo.png' />
					</a>
					<ul className='header__cart'>
						<li>
							<AiOutlineSearch width={16} hanging={16} />
						</li>
						<li>
							<a style={{ fontSize: '16px', fontWeight: 700 }} href='/'>
								520 $
							</a>
						</li>
						<li>
							<a href='/' className='header__cart__price'>
								<BsCart2 width={16} hanging={16} />
								<span>0</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<div className='categories'>
							<ul>
								<li className='active'>All</li>
								<li>Men's</li>
								<li>Female</li>
								<li>Childish</li>
							</ul>
						</div>
						<div className='sort'>
							<div className='sort__label'>
								<svg
									width='10'
									height='6'
									viewBox='0 0 10 6'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
										fill='#2C2C2C'
									/>
								</svg>
								<b>Sorting by:</b>
								<span>popularity</span>
							</div>
							<div className='sort__popup'>
								<ul>
									<li className='active'>popularity</li>
									<li>price</li>
									<li>alphabetically</li>
								</ul>
							</div>
						</div>
					</div>
					<h2
						className='content__title'
						style={{ marginBottom: '50px', marginTop: '50px' }}
					>
						Choose
					</h2>
					<div className='content__items'>
						<div className='tshirt-block'>
							<img
								className='tshirt-block__image'
								src='https://storage.vsemayki.ru/images/0/3/3201/3201271/previews/people_7_man_hoodie_oversize_front_dustypink_700.jpg'
								alt='T-shirt'
							/>
							<h4 className='tshirt-block__title'>«Sensei»</h4>
							<div className='tshirt-block__selector'>
								<ul>
									<li className='active'>cotton</li>
									<li>synthetics</li>
								</ul>
								<ul>
									<li className='active'>xxs (40)</li>
									<li>xs (42)</li>
									<li>s (44)</li>
								</ul>
							</div>
							<div className='tshirt-block__bottom'>
								<div className='tshirt-block__price'>from 75 $</div>
								<div className='button button--outline button--add'>
									<svg
										width='12'
										height='12'
										viewBox='0 0 12 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
											fill='white'
										/>
									</svg>
									<span>Add to cart</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className='tshirt-block'>
							<img
								className='tshirt-block__image'
								src='https://storage.vsemayki.ru/images/0/2/2027/2027817/previews/people_13_hoodie_front_black_700.jpg'
								alt='T-shirt'
							/>
							<h4 className='tshirt-block__title'>«ROBLOX»</h4>
							<div className='tshirt-block__selector'>
								<ul>
									<li className='active'>cotton</li>
									<li>synthetics</li>
								</ul>
								<ul>
									<li className='active'>xxs (40)</li>
									<li>xs (42)</li>
									<li>s (44)</li>
								</ul>
							</div>
							<div className='tshirt-block__bottom'>
								<div className='tshirt-block__price'>from 32 $</div>
								<div className='button button--outline button--add'>
									<svg
										width='12'
										height='12'
										viewBox='0 0 12 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
											fill='white'
										/>
									</svg>
									<span>Add to cart</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className='tshirt-block'>
							<img
								className='tshirt-block__image'
								src='https://storage.vsemayki.ru/images/0/1/1091/1091992/previews/people_7_man_hoodie_oversize_front_black_700.jpg'
								alt='T-shirt'
							/>
							<h4 className='tshirt-block__title'>NEON STEEL</h4>
							<div className='tshirt-block__selector'>
								<ul>
									<li className='active'>cotton</li>
									<li>synthetics</li>
								</ul>
								<ul>
									<li className='active'>xxs (40)</li>
									<li>xs (42)</li>
									<li>s (44)</li>
								</ul>
							</div>
							<div className='tshirt-block__bottom'>
								<div className='tshirt-block__price'>from 60 $</div>
								<div className='button button--outline button--add'>
									<svg
										width='12'
										height='12'
										viewBox='0 0 12 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
											fill='white'
										/>
									</svg>
									<span>Add to cart</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className='tshirt-block'>
							<img
								className='tshirt-block__image'
								src='https://storage.vsemayki.ru/images/0/0/168/168994/previews/people_7_man_hoodie_oversize_front_black_700.jpg'
								alt='T-shirt'
							/>
							<h4 className='tshirt-block__title'>«anime LOVELY EYES»</h4>
							<div className='tshirt-block__selector'>
								<ul>
									<li className='active'>cotton</li>
									<li>synthetics</li>
								</ul>
								<ul>
									<li className='active'>xxs (40)</li>
									<li>xs (42)</li>
									<li>s (44)</li>
								</ul>
							</div>
							<div className='tshirt-block__bottom'>
								<div className='tshirt-block__price'>from 25 $</div>
								<div className='button button--outline button--add'>
									<svg
										width='12'
										height='12'
										viewBox='0 0 12 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
											fill='white'
										/>
									</svg>
									<span>Add to cart</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className='tshirt-block'>
							<img
								className='tshirt-block__image'
								src='https://storage.vsemayki.ru/images/0/3/3023/3023245/previews/people_7_man_hoodie_oversize_front_white_700.jpg'
								alt='T-shirt'
							/>
							<h4 className='tshirt-block__title'>«NEON GAME LOGO»</h4>
							<div className='tshirt-block__selector'>
								<ul>
									<li className='active'>cotton</li>
									<li>synthetics</li>
								</ul>
								<ul>
									<li className='active'>xxs (40)</li>
									<li>xs (42)</li>
									<li>s (44)</li>
								</ul>
							</div>
							<div className='tshirt-block__bottom'>
								<div className='tshirt-block__price'>from 90 $</div>
								<div className='button button--outline button--add'>
									<svg
										width='12'
										height='12'
										viewBox='0 0 12 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
											fill='white'
										/>
									</svg>
									<span>Add to cart</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className='tshirt-block'>
							<img
								className='tshirt-block__image'
								src='https://storage.vsemayki.ru/images/0/3/3258/3258493/previews/people_7_man_hoodie_oversize_front_khaki_700.jpg'
								alt='T-shirt'
							/>
							<h4 className='tshirt-block__title'>«Da Vinci's Cat»</h4>
							<div className='tshirt-block__selector'>
								<ul>
									<li className='active'>cotton</li>
									<li>synthetics</li>
								</ul>
								<ul>
									<li className='active'>xxs (40)</li>
									<li>xs (42)</li>
									<li>s (44)</li>
								</ul>
							</div>
							<div className='tshirt-block__bottom'>
								<div className='tshirt-block__price'>from 63 $</div>
								<div className='button button--outline button--add'>
									<svg
										width='12'
										height='12'
										viewBox='0 0 12 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
											fill='white'
										/>
									</svg>
									<span>Add to cart</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className='tshirt-block'>
							<img
								className='tshirt-block__image'
								src='https://storage.vsemayki.ru/images/0/2/2953/2953889/previews/people_7_man_hoodie_oversize_front_mustard_700.jpg'
								alt='T-shirt'
							/>
							<h4 className='tshirt-block__title'>«FOCUS»</h4>
							<div className='tshirt-block__selector'>
								<ul>
									<li className='active'>cotton</li>
									<li>synthetics</li>
								</ul>
								<ul>
									<li className='active'>xxs (40)</li>
									<li>xs (42)</li>
									<li>s (44)</li>
								</ul>
							</div>
							<div className='tshirt-block__bottom'>
								<div className='tshirt-block__price'>from 45 $</div>
								<div className='button button--outline button--add'>
									<svg
										width='12'
										height='12'
										viewBox='0 0 12 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
											fill='white'
										/>
									</svg>
									<span>Add to cart</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className='tshirt-block'>
							<img
								className='tshirt-block__image'
								src='https://storage.vsemayki.ru/images/0/3/3040/3040789/previews/people_7_man_hoodie_oversize_front_black_700.jpg'
								alt='T-shirt'
							/>
							<h4 className='tshirt-block__title'>«Tree of Life»</h4>
							<div className='tshirt-block__selector'>
								<ul>
									<li className='active'>cotton</li>
									<li>synthetics</li>
								</ul>
								<ul>
									<li className='active'>xxs (40)</li>
									<li>xs (42)</li>
									<li>s (44)</li>
								</ul>
							</div>
							<div className='tshirt-block__bottom'>
								<div className='tshirt-block__price'>from 30 $</div>
								<div className='button button--outline button--add'>
									<svg
										width='12'
										height='12'
										viewBox='0 0 12 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
											fill='white'
										/>
									</svg>
									<span>Add to cart</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className='tshirt-block'>
							<img
								className='tshirt-block__image'
								src='https://storage.vsemayki.ru/images/0/2/2037/2037337/previews/people_13_hoodie_front_black_700.jpg'
								alt='T-shirt'
							/>
							<h4 className='tshirt-block__title'>«Sarcasm»</h4>
							<div className='tshirt-block__selector'>
								<ul>
									<li className='active'>cotton</li>
									<li>synthetics</li>
								</ul>
								<ul>
									<li className='active'>xxs (40)</li>
									<li>xs (42)</li>
									<li>s (44)</li>
								</ul>
							</div>
							<div className='tshirt-block__bottom'>
								<div className='tshirt-block__price'>from 28 $</div>
								<div className='button button--outline button--add'>
									<svg
										width='12'
										height='12'
										viewBox='0 0 12 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
											fill='white'
										/>
									</svg>
									<span>Add to cart</span>
									<i>2</i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
