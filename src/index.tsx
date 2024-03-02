import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/provider/router/public';
import { setupStore } from '@/app/provider/store/config/store';
import { Provider } from 'react-redux';
import App from './app/App';

const store = setupStore();
const container = document.getElementById('root');

if (!container) throw new Error('root not found!');

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<Provider store={store}>
		<App></App>
	</Provider>
);
