import React from "react";
import { render } from "react-dom";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";

const rootElement = document.getElementById("root");

render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<ProductsProvider>
					<App />
				</ProductsProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>,
	rootElement
);
