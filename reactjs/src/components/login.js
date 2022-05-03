import React, {useState} from "react";

const LoginForm = () => {

  const [loginForm, setLoginForm] = useState({
    username : "", password : ""
  });

  const onLogin = () => {
    // alert("Hello...");
    console.log(loginForm)
  }

  const onHandleInput = (event) => {
    // console.log(event.target.value, event.target.name);
    setLoginForm({...loginForm, [event.target.name] : event.target.value});
  }

  return(
    <div>
      <div className="space">
        <label className="lableText">Enter your username :</label>
        <input type="text" placeholder="Enter username" className="inputbox" onChange={onHandleInput} name="username" />
      </div>
      <div className="space">
        <label className="lableText">Enter your Password :</label>
        <input type="password" placeholder="Enter password" className="inputbox" onChange={onHandleInput} name="password"/>
      </div>
      <button className="button" onClick={() => onLogin()}>Login</button>
    </div>
  )
}

// import React from "react";

// const ComponentName = () => {
//   return (
//     // HTML
//   )
// }

// export default ComponentName;

export default LoginForm;