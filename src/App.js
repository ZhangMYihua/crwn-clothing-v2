import Home from './routes/Home/Home.jsx';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './routes/Navigation/Navigation.jsx';

const Shop = () => {
	return <h1>I am Shop</h1>;
};
const App = () => {
	return (
		<Routes>
			{/* here we are persisting the navigation and with index we match the compoentn to home */}
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
			</Route>
		</Routes>
	);
};

export default App;
