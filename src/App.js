import Home from './routes/Home/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/Navigation.jsx';
import Authentication from './routes/Authentication/Authentication.jsx';
import Shop from './routes/Shop/Shop';

const App = () => {
	return (
		<Routes>
			{/* here we are persisting the navigation and with index we match the compoentn to home */}
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
