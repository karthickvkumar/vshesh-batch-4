import React from "react";

const LoginForm = () => {
  return(
    <div>
      <div className="space">
        <label className="lableText">Enter your username :</label>
        <input type="text" placeholder="Enter username" className="inputbox" />
      </div>
      <div className="space">
        <label className="lableText">Enter your Password :</label>
        <input type="password" placeholder="Enter password" className="inputbox"/>
      </div>
      <button className="button">Login</button>
    </div>
  )
}

export default LoginForm;