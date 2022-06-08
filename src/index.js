import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context.jsx';
import { ProductProvider } from './contexts/product.context.jsx';
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<ProductProvider>
					<App />
				</ProductProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
