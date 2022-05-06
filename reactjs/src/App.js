import React from "react";

import LoginForm from "./components/login";
import RegisterPage from "./components/register";

import "./css/style.css";

const App = () => {
  return (
    <div>
      <h1>Hello, This is a App.js file</h1>
      {/* <LoginForm></LoginForm> */}
      <RegisterPage></RegisterPage>
    </div>
  )
}

export default App;