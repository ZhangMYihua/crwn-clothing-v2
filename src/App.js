import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/home/home.component';
import Navigation from './Routes/Navigation/navigation.component';
import SignIn from './Routes/Sign-in/sign-in.component';

const Shop = () => {
	return <h1>Shop component</h1>;
};

const App = () => {
	return (
		<Routes>
			{/* nested routes */}
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='sign-in' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
