import LogoOutline from './LogoOutline.svg';
import './MiniLoader.css';
export default function MiniLoader(props) {
	return (
		<div
			layout
			className='bloqs-miniLoader-container'
			initial={{ opacity: 0, x: '-5%' }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: '5%' }}
			transition={{
				duration: 0.5,
				delay: 0.1,
				ease: [0, 0.71, 0.2, 1.01],
			}}>
			<h3 className='bloqs-miniLoader-title'>{props.title}</h3>
			<img src={LogoOutline} alt='loader' className='bloqs-miniLoader-logo-outline' />
			<p className='bloqs-miniLoader-message'>{props.message}</p>
		</div>
	);
}
