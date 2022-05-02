import React from "react";

const LoginForm = () => {

  const onLogin = () => {
    alert("Hello...");
  }

  const onHandleInput = (event) => {
    console.log(event)
  }

  return(
    <div>
      <div className="space">
        <label className="lableText">Enter your username :</label>
        <input type="text" placeholder="Enter username" className="inputbox" onChange={onHandleInput} />
      </div>
      <div className="space">
        <label className="lableText">Enter your Password :</label>
        <input type="password" placeholder="Enter password" className="inputbox" onChange={onHandleInput}/>
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