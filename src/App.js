import { Route, Routes } from 'react-router-dom'
import HomePage from './Routes/Home/HomePage'
import ShopComponent from './Routes/ShopComponent/ShopComponent'
import NavigationComponent from './Routes/Navigation/NavigationComponent'
import AuthenktikationComponent from './Routes/Authenktication/AuthenktikationComponent'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationComponent />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopComponent />} />
          <Route path="signIn" element={<AuthenktikationComponent />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
