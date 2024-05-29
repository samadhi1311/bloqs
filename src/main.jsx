import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Components from './pages/Components';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: '/bloqs/', element: <Home /> },
			{ path: '/bloqs/components', element: <Components /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
