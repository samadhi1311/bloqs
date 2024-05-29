import { Link, Outlet } from 'react-router-dom';
import './main.css';

function Layout() {
	return (
		<>
			<header>
				<nav>
					<Link to='/bloqs/'>BLOQS</Link>
					<Link to='/bloqs/components'>Components</Link>
					<Link to={'https://github.com/samadhi1311/bloqs'}>GitHub</Link>
				</nav>
			</header>

			<main>
				<Outlet />
			</main>
		</>
	);
}

export default Layout;
