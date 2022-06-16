import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Authentication from "./components/routes/authentication/authentication.component";
import CheckOut from "./components/routes/checkout/checkout.component";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component.jsx";
import Shop from "./components/routes/shop/shop";
import { setCurrentUser } from "./store/user/user.action";
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        try {
          await createUserDocFromAuth(user);
        } catch (err) {
          console.log(err);
        }
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
