import './Login.css';

export default function Login() {
	return (
		<div className='bloqs-login-form-container'>
			<h2>Continue to petpals, </h2>

			<form className='bloqs-login-form'>
				<input type='email' name='email' placeholder='Email' />

				<input type='password' name='password' placeholder='Password' />

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
