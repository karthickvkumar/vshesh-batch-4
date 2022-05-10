import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import LoginForm from "./components/login";
import RegisterPage from "./components/register";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";

import "./css/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="login" element={<LoginForm></LoginForm>}></Route>
        <Route path="register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="about" element={<AboutPage></AboutPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;