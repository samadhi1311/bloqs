import { useState } from 'react';
import './Components.css';
import Modal from '../components/Modal/Modal';
import MiniLoader from '../components/MiniLoader/MiniLoader';
import Navigation from '../components/Navigation/Navigation';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import '../components/Toast/Toast.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../components/Login/Login';
import SignUp from '../components/Signup/SignUp';

export default function Components() {
	// Modal
	const [show, setShow] = useState(false);

	const notify = () => {
		toast(<ToastDisplay />);
	};

	function ToastDisplay() {
		return (
			<div className='bloqs-toast-container'>
				<i className='bx bxs-check-circle bx-sm'></i>
				<p>Copied to clipboard.</p>
			</div>
		);
	}

	const [activeComponent, setActiveComponent] = useState('getting-started');

	const handleComponentClick = (component) => {
		setActiveComponent(component);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const renderSyntax = (jsxCode, cssCode) => {
		return (
			<>
				<div className='jsx'>
					<span className='copy-button'>
						<p>JSX</p>
						<button>
							<CopyToClipboard text={jsxCode} onCopy={(copied) => notify()}>
								<i className='bx bx-copy'></i>
							</CopyToClipboard>
						</button>
					</span>
					<SyntaxHighlighter language='jsx' style={theme} wrapLongLines customStyle={{ borderRadius: '0 0 12px 12px', margin: 0 }}>
						{jsxCode}
					</SyntaxHighlighter>
				</div>
				<div className='css'>
					<span className='copy-button'>
						<p>CSS</p>
						<button>
							<CopyToClipboard text={cssCode} onCopy={(copied) => notify()}>
								<i className='bx bx-copy'></i>
							</CopyToClipboard>
						</button>
					</span>
					<SyntaxHighlighter language='css' style={theme} wrapLongLines customStyle={{ borderRadius: '0 0 12px 12px', margin: 0 }}>
						{cssCode}
					</SyntaxHighlighter>
				</div>
			</>
		);
	};

	const renderGettingStarted = () => {
		const cssCode = `:root {
	font-family: 'Inter', sans-serif;
	line-height: 1.5;
	font-weight: 500;
	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	scrollbar-width: thin;
	accent-color: #656bdd;

	--acrylic-bg: hsla(0, 0%, 100%, 0.5);
	--acrylic-blur: blur(16px);
	--acrylic-border: 1px solid hsla(0, 0%, 100%, 0.8);
	--acrylic-shadow: 4px 4px 12px 2px hsla(0, 0%, 0%, 0.05);
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	overflow-y: scroll;
}

a {
	color: #656bdd;
	font-weight: 500;
	text-decoration: none;
	cursor: pointer;
	transition: all 300ms ease-in-out;
}

a:hover {
	color: black;
}

button {
	color: black;
	background-color: white;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 16px;
	padding: 0.6rem 1.25rem;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	cursor: pointer;
	transition: all 300ms;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
	transform: scale(1) translateZ(0);
}

button:hover {
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
	border: 1px solid #7178f6;
	background-color: #7178f6;
	color: white;
	transform: scale(1.1) translateZ(0);
}

button:focus,
button:focus-visible {
	outline: none;
}

button:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

input[type='text'],
input[type='email'],
input[type='password'],
select,
textarea {
	border-radius: 8px;
	border: 1px solid grey;
	padding: 0.6rem 1.25rem;
	font-size: 1rem;
	font-weight: 500;
	font-family: inherit;
	transition: all 300ms ease;
}

input[type='number'] {
	border-radius: 8px;
}

input[type='text']:focus,
input[type='email']:focus,
input[type='password']:focus,
input[type='number']:focus,
select:focus,
textarea:focus {
	outline: none;
	border: 1px solid #7178f6;
	box-shadow: 0px 0px 8px #7178f6;
}

input[type='checkbox'] {
	scale: 1.25;
}
		`;

		return (
			<section className='component-info'>
				<h2>Getting Started</h2>
				<p>
					1. Install <a href='https://boxicons.com/'>BoxIcons</a>.
				</p>
				<div>
					<span className='copy-button'>
						<p>NPM</p>
						<CopyToClipboard text='npm install boxicons'>
							<button>
								<i className='bx bx-copy'></i>
							</button>
						</CopyToClipboard>
					</span>
					<SyntaxHighlighter style={theme} customStyle={{ borderRadius: '0 0 12px 12px', margin: 0 }}>
						npm install boxicons
					</SyntaxHighlighter>
				</div>
				<p style={{ marginTop: '2rem' }}>2. Include following CSS in the entry point of your app.(ie: App.jsx)</p>
				<div>
					<span className='copy-button'>
						<p>CSS</p>
						<CopyToClipboard text={cssCode}>
							<button>
								<i className='bx bx-copy'></i>
							</button>
						</CopyToClipboard>
					</span>
					<SyntaxHighlighter language='css' style={theme} customStyle={{ borderRadius: '0 0 12px 12px', margin: 0 }}>
						{cssCode}
					</SyntaxHighlighter>
				</div>
			</section>
		);
	};

	const renderModal = () => {
		const jsxCode = `import './Modal.css';

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
`;
		const cssCode = `.bloqs-modal-container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	z-index: 100;
	background-color: hsla(0, 0%, 100%, 0.1);
	backdrop-filter: blur(8px);
	display: flex;
	justify-content: center;
	align-items: center;
}

.bloqs-modal {
	width: 90%;
	max-width: 512px;
	padding: 0.5rem;
	text-align: center;
	border-radius: 12px;
	background-color: var(--acrylic-bg);
	backdrop-filter: var(--acrylic-blur);
	border: var(--acrylic-border);
	box-shadow: var(--acrylic-shadow);
}

.bloqs-modal-title {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 1rem;
	margin: 1rem 0;
}

.bloqs-modal-close-button {
	width: 100%;
	text-align: right;
}

.bloqs-modal-close-button i {
	color: black;
	cursor: pointer;
	transition: all 300ms;
}

.bloqs-modal-close-button i:hover {
	color: #7178f6;
}

.bloqs-modal-content {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 0;
}

.bloqs-modal-content p {
	text-align: left;
}
		`;

		return (
			<section className='modal component-info' id='modal'>
				<h2>Modal</h2>
				<p>Modal component is a simple modal that can be used to display messages to user. It accepts three props: success, title, and content.</p>

				<button onClick={() => setShow(!show)}>Show Modal</button>

				<div className='sandbox'>
					<Modal show={show} setShow={setShow} />
				</div>

				<div className='syntax'>{renderSyntax(jsxCode, cssCode)}</div>
			</section>
		);
	};

	const renderMiniLoader = () => {
		const jsxCode = `import LogoOutline from './LogoOutline.svg';
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
		`;
		const cssCode = `.bloqs-miniLoader-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	border-radius: 12px;
	background-color: var(--acrylic-bg);
	backdrop-filter: var(--acrylic-blur);
	border: var(--acrylic-border);
	box-shadow: var(--acrylic-shadow);
	width: max-content;
}

@keyframes blink {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

.bloqs-miniLoader-logo-outline {
	width: 5rem;
	animation: blink 400ms ease-in-out alternate infinite;
}
		`;

		return (
			<section className='mini-loader component-info' id='mini-loader'>
				<h2>MiniLoader</h2>
				<p>MiniLoader component is a simple loader to let user know something is happening in the background. It accepts two props title and message.</p>

				<div className='sandbox'>
					<MiniLoader title='Loading...' message='Please wait...' />
				</div>

				<div className='syntax'>{renderSyntax(jsxCode, cssCode)}</div>
			</section>
		);
	};

	const renderNavigation = () => {
		const jsxCode = `import './Navigation.css';
import { useState } from 'react';
	
export default function Navigation() {
	const [showMenu, setShowMenu] = useState(false);
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
				<label htmlFor='bloqs-navigation-nav' className={\`bloqs-navigation-nav-btn \${showMenu ? 'open' : ''}\`}>
					<i></i>
					<i></i>
					<i></i>
				</label>
				<div className={\`bloqs-navigation-nav-wrapper \${showMenu ? 'show' : ''}\`}>
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
	`;

		const cssCode = `.bloqs-navigation {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 1rem;
	border-radius: 18px;

	background-color: hsla(0, 0%, 100%, 0.95);
	border: var(--acrylic-border);
	box-shadow: var(--acrylic-shadow);

	position: absolute;
	box-sizing: border-box;
	width: 90%;
}

.bloqs-navigation a {
	color: black;
}

.bloqs-navigation a:hover {
	color: #7178f6;
}

.bloqs-navigation-nav-logo {
	width: 36px;
}

.bloqs-navigation-logo {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	font-size: 2.5rem;
	font-weight: bold;
	padding: 0 1.5rem;
}

.bloqs-navigation ul li button {
	display: inline-flex;
	cursor: pointer;
}

.bloqs-navigation-nav-btn {
	display: none;
}

.bloqs-navigation-nav-btn i {
	display: block;
	width: 1.3rem;
	height: 0.15rem;
	background: black;
	border-radius: 0.15rem;
	margin-left: 0.9rem;
}

.bloqs-navigation-nav-btn i:nth-child(1) {
	margin-top: 1rem;
}

.bloqs-navigation-nav-btn i:nth-child(2) {
	margin-top: 0.3rem;
	opacity: 1;
}

.bloqs-navigation-nav-btn i:nth-child(3) {
	margin-top: 0.3rem;
}

.bloqs-navigation ul {
	float: none;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.bloqs-navigation ul li {
	display: inline;
}

.bloqs-navigation ul li:not(:first-child) {
	margin-left: 3rem;
}

.bloqs-navigation ul li:last-child {
	margin-right: 1.5rem;
}

.bloqs-navigation ul li Link {
	display: inline-block;
	outline: none;
}

@media screen and (max-width: 768px) {
	.bloqs-navigation ul {
		flex-direction: column;
		justify-content: center;
	}

	.bloqs-navigation-logo {
		padding: 0;
	}

	.bloqs-navigation-nav-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		opacity: 0;
		transition: all 300ms ease-in-out;
		background: rgba(255, 255, 255, 0.75);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(16px);
	}

	.bloqs-navigation-nav-wrapper ul {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		padding-inline-start: 0;
	}

	.bloqs-navigation-nav-wrapper ul li {
		display: block;
		float: none;
		width: 100%;
		text-align: center;
		margin-bottom: 1rem;
	}

	.bloqs-navigation-nav-wrapper ul li:not(:first-child) {
		margin-left: 0;
	}

	.bloqs-navigation-nav-wrapper ul li Link {
		padding: 1.5rem 1.5rem;
		opacity: 0;
		transform: translateX(-1.3rem);
		transition: all 300ms ease-in-out;
	}

	.bloqs-navigation-nav-btn {
		position: relative;
		display: block;
		align-self: center;
		height: 3rem;
		width: 3rem;
		cursor: pointer;
		z-index: 9999;
		border-radius: 50%;
	}

	.bloqs-navigation-nav-btn i {
		display: block;
		width: 1.3rem;
		height: 0.15rem;
		background: black;
		border-radius: 0.15rem;
		margin-left: 0.9rem;
	}

	.bloqs-navigation-nav-btn i:nth-child(1) {
		margin-top: 1rem;
	}

	.bloqs-navigation-nav-btn i:nth-child(2) {
		margin-top: 0.3rem;
		opacity: 1;
	}

	.bloqs-navigation-nav-btn i:nth-child(3) {
		margin-top: 0.3rem;
	}

	li {
		font-size: large;
		padding: 1rem 0;
	}
}

#bloqs-navigation-nav:checked + .bloqs-navigation-nav-btn {
	transform: rotate(45deg);
}

#bloqs-navigation-nav:checked + .bloqs-navigation-nav-btn i {
	background: black;
	transition: transform 300ms ease;
}

#bloqs-navigation-nav:checked + .bloqs-navigation-nav-btn i:nth-child(1) {
	transform: translateY(0.4rem) rotate(180deg);
}

#bloqs-navigation-nav:checked + .bloqs-navigation-nav-btn i:nth-child(2) {
	opacity: 0;
}

#bloqs-navigation-nav:checked + .bloqs-navigation-nav-btn i:nth-child(3) {
	transform: translateY(-0.4rem) rotate(90deg);
}

#bloqs-navigation-nav:checked ~ .bloqs-navigation-nav-wrapper {
	z-index: 9990;
	opacity: 1;
}

#bloqs-navigation-nav:checked ~ .bloqs-navigation-nav-wrapper ul li Link {
	opacity: 1;
	transform: translateX(0);
}

.bloqs-navigation-hidden {
	display: none;
}
		`;

		return (
			<section className='navigation component-info' id='navigation'>
				<h2>Navigation</h2>
				<p>Navigation component provides a navigation bar for desktop and full screen hamburger menu for mobile.</p>

				<div className='sandbox'>
					<Navigation />
				</div>

				<div className='syntax'>{renderSyntax(jsxCode, cssCode)}</div>
			</section>
		);
	};

	const renderLogin = () => {
		const jsxCode = `import './Login.css';

export default function Login() {
	return (
		<div className='bloqs-login-form-container'>
			<h2>Continue to petpals, </h2>

			<form className='bloqs-login-form'>
				<input type='email' name='email' placeholder='Email' />

				<input type='password' name='password' placeholder='Password' autoComplete='current-password' />

				<div className='bloqs-login-submit'>
					<button type='submit'>
						<i className='bx bxs-user-check bx-sm'></i>
						Log In
					</button>
				</div>

				<div className='bloqs-login-forgot-password'>
					<a href='#'>Forgot password?</a>
				</div>
			</form>

			<div className='bloqs-login-seperator'>
				<hr />
				<span>or log in with</span>
				<hr />
			</div>

			<div className='bloqs-login-social'>
				<button className='login-google'>
					<i className='bx bxl-google bx-sm'></i> Google
				</button>
			</div>

			<div className='bloqs-login-sign-up'>
				<p>
					Not a member yet? <a href='#'>Sign up</a>
				</p>
			</div>
		</div>
	);
}
		`;

		const cssCode = `.bloqs-login-form-container {
	width: 100%;
	max-width: 512px;
	padding: 1rem 0;
	text-align: center;
	border-radius: 12px;
	background-color: var(--acrylic-bg);
	backdrop-filter: var(--acrylic-blur);
	border: var(--acrylic-border);
	box-shadow: var(--acrylic-shadow);
}

.bloqs-login-form-container h2 {
	padding: 3rem 0;
}

.bloqs-login-form {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 1rem 0;
	padding: 1rem 0;
}

input {
	padding: 0.5rem 0.5rem;
	width: 80%;
	max-width: 480px;
}

.bloqs-login-submit {
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.bloqs-login-forgot-password {
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 0;
}

.bloqs-login-seperator {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	padding: 1.5rem;
}

.bloqs-login-seperator hr {
	width: 20%;
}

.bloqs-login-social {
	padding: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: center;
}

.bloqs-login-sign-up {
	padding: 1rem 0;
}
		`;

		return (
			<section className='login component-info' id='login'>
				<h2>Login</h2>
				<p>Login component provides a login form with typical elements.</p>

				<div className='sandbox'>
					<Login />
				</div>

				<div className='syntax'>{renderSyntax(jsxCode, cssCode)}</div>
			</section>
		);
	};

	const renderSignUp = () => {
		const jsxCode = `import './SignUp.css';

export default function SignUp() {
	return (
		<div className='bloqs-signup-form-container'>
			<h2>Welcome to PetPals</h2>

			<form className='bloqs-signup-form'>
				<input type='email' name='email' placeholder='Email' />

				<input type='password' name='password' placeholder='Password' autoComplete='new-password' />

				<input type='password' name='confirmPassword' placeholder='Confirm password' autoComplete='new-password' />

				<div className='bloqs-signup-submit'>
					<button type='submit'>
						<i className='bx bxs-user-plus bx-sm'></i>
						Sign Up
					</button>
				</div>
			</form>

			<div className='bloqs-signup-seperator'>
				<hr />
				<span>or sign up with</span>
				<hr />
			</div>

			<div className='bloqs-signup-social'>
				<button className='bloqs-signup-google'>
					<i className='bx bxl-google bx-sm'></i> Google
				</button>
			</div>

			<div className='bloqs-signup-login'>
				<p>
					Already have an account? <a href='#'>Login</a>
				</p>
			</div>
		</div>
	);
}
		`;

		const cssCode = `.bloqs-signup-page {
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow-x: hidden;
}

.bloqs-signup-form-container {
	width: 95%;
	max-width: 512px;
	padding: 1rem;
	text-align: center;
	border-radius: 12px;
	background-color: var(--acrylic-bg);
	backdrop-filter: var(--acrylic-blur);
	border: var(--acrylic-border);
	box-shadow: var(--acrylic-shadow);
}

.bloqs-signup-form-container h2 {
	padding: 3rem 0;
}

.bloqs-signup-form {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 0.6rem 0;
	padding: 1rem;
}

.bloqs-signup-form input,
.bloqs-signup-form select,
.bloqs-signup-form option {
	padding: 0.5rem 0.5rem;
	width: 80%;
	max-width: 480px;
}

.bloqs-signup-submit {
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.bloqs-signup-seperator {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	padding: 1.5rem;
}

.bloqs-signup-seperator hr {
	width: 20%;
}

.bloqs-signup-social {
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
}

.bloqs-signup-sign-up {
	padding: 1rem;
}

.bloqs-sign-up-login {
	margin-top: 1rem;
}
`;
		return (
			<section className='sign-up component-info' id='sign-up'>
				<h2>Sign Up</h2>
				<p>Sign Up component provides a Sign up form with typical elements.</p>

				<div className='sandbox'>
					<SignUp />
				</div>

				<div className='syntax'>{renderSyntax(jsxCode, cssCode)}</div>
			</section>
		);
	};

	return (
		<div className='components-container'>
			<aside className='components-sidebar'>
				<h2>Components</h2>
				<hr className='components-hr' />
				<br />
				<a onClick={() => handleComponentClick('getting-started')} style={{ marginBottom: '1rem' }}>
					Getting Started
				</a>
				<a onClick={() => handleComponentClick('login')}>Login</a>
				<a onClick={() => handleComponentClick('modal')}>Modal</a>
				<a onClick={() => handleComponentClick('mini-loader')}>MiniLoader</a>
				<a onClick={() => handleComponentClick('navigation')}>Navigation</a>
				<a onClick={() => handleComponentClick('sign-up')}>Sign Up</a>
			</aside>
			<div className='components-main'>
				{activeComponent === 'getting-started' && renderGettingStarted()}
				{activeComponent === 'login' && renderLogin()}
				{activeComponent === 'modal' && renderModal()}
				{activeComponent === 'mini-loader' && renderMiniLoader()}
				{activeComponent === 'navigation' && renderNavigation()}
				{activeComponent === 'sign-up' && renderSignUp()}
			</div>
			<ToastContainer
				position='bottom-right'
				toastStyle={{ color: '#151515' }}
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				closeButton={false}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				limit={1}
				theme='light'
			/>
		</div>
	);
}
