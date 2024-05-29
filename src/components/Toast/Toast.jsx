import { useState, useEffect } from 'react';
import './Toast.css';

export default function Toast({ success, message }) {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	if (!visible) return null;

	return (
		<div className='bloqs-toast-container'>
			{success ? <i className='bx bxs-check-circle bx-md'></i> : <i className='bx bxs-error-circle bx-md'></i>}
			<p>{message || 'Toast message'}</p>
		</div>
	);
}
