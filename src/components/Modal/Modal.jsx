import './Modal.css';

export default function Modal(props) {
	function handleClose() {
		props.setShow(false);
	}

	if (!props.show) {
		return null;
	} else {
		return (
			<div className='bloqs-modal-container'>
				<div className='bloqs-modal'>
					<div className='bloqs-modal-close-button'>
						<i onClick={handleClose} className='bx bx-x bx-md'></i>
					</div>
					<div className='bloqs-modal-title'>
						{props.success ? <i className='bx bxs-check-circle bx-lg'></i> : <i className='bx bxs-error-circle bx-lg'></i>}
						<h2>{props.title ? props.title : 'Error'}</h2>
					</div>
					<div className='bloqs-modal-content'>
						<p>{props.content ? props.content : 'A simple brief description of the error'}</p>
					</div>
				</div>
			</div>
		);
	}
}
