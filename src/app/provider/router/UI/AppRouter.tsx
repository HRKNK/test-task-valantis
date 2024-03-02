import App from '@/app/App';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,
	},
]);

export { router };
