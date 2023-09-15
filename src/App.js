import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/home.component";
import Navigation from "./routes/navigation/navigation.components";
import Authentication from "./routes/Authentication/authentication.component";
import Shop from "./Shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
// import {
//   // onAuthStateChangedListener,
//   // createUserDocumentFromAuth,
//   getCurrentUser,
// } from "./utils/Firebase/firebase.utils";

import { checkUserSession, setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch(); // will never change

  useEffect(() => {
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }
    //   dispatch(setCurrentUser(user));
    // });
    // return unsubscribe;

    // getCurrentUser().then((res) => console.log(res));

    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
