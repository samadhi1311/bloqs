import './SignUp.css';

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
