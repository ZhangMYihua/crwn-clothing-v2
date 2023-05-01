import './Components/Categories/categories.styles.scss'
import {Home} from "./Routes/Home/Home";
import {Routes, Route} from "react-router-dom";
import {Navigation} from "./Routes/Navigation/Navigation";
import {SignIn} from "./Routes/sign-in/SignIn";

const Shop = () => {
    return <h1>SHOP PAGE</h1>
}
const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigation/>}>
                <Route index element={<Home />} />
                <Route path={'shop'} element={<Shop />}/>
                <Route path={'signin'} element={<SignIn />}/>
            </Route>
        </Routes>
    )
}

export default App;
