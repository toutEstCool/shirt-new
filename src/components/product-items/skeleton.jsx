import ContentLoader from 'react-content-loader'

export const Skeleton = props => (
	<ContentLoader
		speed={2}
		width={250}
		height={460}
		viewBox='0 0 250 460'
		backgroundColor='#e9e9e9'
		foregroundColor='#fafafa'
		{...props}
	>
		<rect x='-23' y='0' rx='0' ry='0' width='530' height='250' />
		<rect x='117' y='457' rx='0' ry='0' width='118' height='0' />
		<rect x='49' y='261' rx='0' ry='0' width='155' height='21' />
		<rect x='3' y='304' rx='0' ry='0' width='249' height='24' />
		<rect x='1' y='340' rx='0' ry='0' width='79' height='33' />
		<rect x='90' y='340' rx='0' ry='0' width='79' height='33' />
		<rect x='181' y='340' rx='0' ry='0' width='79' height='33' />
		<rect x='3' y='413' rx='0' ry='0' width='75' height='27' />
		<rect x='100' y='405' rx='30' ry='30' width='150' height='44' />
	</ContentLoader>
)
