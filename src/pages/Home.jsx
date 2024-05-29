import { Link } from 'react-router-dom';
import { Gradient } from '../components/Gradient';
import { useEffect } from 'react';

export default function Home() {
	const styles = {
		heroContainer: {
			width: '100%',
			height: '100vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
		heroHeading: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '1rem',
			marginBottom: '2rem',
		},
		heroSubHeading: {
			marginBottom: '2rem',
			color: '#252525',
		},
	};

	// Create your instance
	const gradient = new Gradient();

	// Call `initGradient` with the selector to your canvas
	useEffect(() => {
		gradient.initGradient('#gradient-canvas');
	});

	return (
		<>
			<canvas id='gradient-canvas' data-transition-in />

			<section style={styles.heroContainer}>
				<h1 style={styles.heroHeading} className='heroHeading'>
					<span className='material-symbols-rounded' style={{ fontSize: '7rem' }}>
						auto_awesome_mosaic
					</span>
					BLOQS
				</h1>
				<h2 style={styles.heroSubHeading}>
					A collection of styled React components from <a href='https://samadhi1311.github.io/petpals'>PetPals</a>
				</h2>

				<p style={{ maxWidth: '480px', marginBottom: '2rem', textAlign: 'justify' }}>
					'BLOQS' is a handmade collection of open source styled React components built by a team of undergraduate students from University of Vavuniya, Sri Lanka for their{' '}
					<a href='https://samadhi1311.github.io/petpals'>final year project</a> licenced under <a href='https://opensource.org/license/mit'>MIT</a>.
				</p>

				<Link to='/bloqs/components/'>
					<button>
						<span className='material-symbols-rounded'>read_more</span>
						Browse Components
					</button>
				</Link>
			</section>
		</>
	);
}
