import React from "react";

const LoginForm = () => {
  return(
    <div>
      <div>
        <label>Enter your username :</label>
        <input type="text" placeholder="Enter username" />
      </div>
      <div>
        <label>Enter your Password :</label>
        <input type="password" placeholder="Enter password"/>
      </div>
      <button>Login</button>
    </div>
  )
}

export default LoginForm;