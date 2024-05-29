import './Navigation.css';
import { useState } from 'react';

export default function Navigation() {
	const [showMenu, setShowMenu] = useState('');

	const handleMenuClick = () => {
		setShowMenu((prevShowMenu) => !prevShowMenu);
	};

	const handleLinkClick = () => {
		document.getElementById('bloqs-navigation-nav').click();
	};

	return (
		<>
			<nav className='bloqs-navigation'>
				<a href='#' className='bloqs-navigation-logo'>
					<i className='bx bx-home-alt bloqs-navigation-nav-logo'></i>
					PetPals
				</a>

				<input type='checkbox' id='bloqs-navigation-nav' className='bloqs-navigation-hidden' onChange={handleMenuClick} />
				<label htmlFor='bloqs-navigation-nav' className={`bloqs-navigation-nav-btn ${showMenu ? 'open' : ''}`}>
					<i></i>
					<i></i>
					<i></i>
				</label>

				<div className={`bloqs-navigation-nav-wrapper ${showMenu ? 'show' : ''}`}>
					<ul>
						<li>
							<a href='#' onClick={handleLinkClick}>
								Add
							</a>
						</li>
						<li>
							<a href='#' onClick={handleLinkClick}>
								Discover
							</a>
						</li>
						<li>
							<a href='#' onClick={handleLinkClick}>
								Blog
							</a>
						</li>
						<li>
							<a href='#' onClick={handleLinkClick}>
								About
							</a>
						</li>
						<li>
							<a href='#' onClick={handleLinkClick}>
								<button>
									<i className='bx bx-user-plus bx-sm'></i>
									Sign Up
								</button>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
