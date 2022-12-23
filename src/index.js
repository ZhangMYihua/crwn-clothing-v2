import React from "react";

import { render } from "react-dom";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.scss";

import { UserProvider } from "./contexts/user.context";



const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider> 
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
