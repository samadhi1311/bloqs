import LogoOutline from './LogoOutline.svg';
import './MiniLoader.css';
export default function MiniLoader(props) {
	return (
		<div className='bloqs-miniLoader-container'>
			<h3 className='bloqs-miniLoader-title'>{props.title}</h3>
			<img src={LogoOutline} alt='loader' className='bloqs-miniLoader-logo-outline' />
			<p className='bloqs-miniLoader-message'>{props.message}</p>
		</div>
	);
}
