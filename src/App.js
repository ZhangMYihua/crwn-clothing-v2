import { Route, Routes } from 'react-router-dom'
import HomePage from './Routes/Home/HomePage'
import ShopComponent from './Routes/ShopComponent/ShopComponent'
import NavigationComponent from './Routes/Navigation/NavigationComponent'
import SignInComponent from './Routes/sign-in/SignInComponent'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationComponent />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopComponent />} />
          <Route path="signIn" element={<SignInComponent />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
