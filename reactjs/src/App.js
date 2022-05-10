import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import LoginForm from "./components/login";
import RegisterPage from "./components/register";

import "./css/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginForm></LoginForm>}></Route>
        <Route path="register" element={<RegisterPage></RegisterPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;