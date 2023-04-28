import './Components/Categories/categories.styles.scss'
import {Home} from "./Routes/Home/Home";
import {Routes, Route} from "react-router-dom";
import {Navigation} from "./Routes/Navigation/Navigation";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigation/>}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App;
