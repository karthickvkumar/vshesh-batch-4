import React, {useState} from "react";

const LoginForm = () => {

  const [loginForm, setLoginForm] = useState({
    username : "", password : ""
  });

  const [inlineCondition, setInlineCondition] = useState(true);

  const onLogin = () => {
    // alert("Hello...");
    console.log(loginForm)
  }

  const onHandleInput = (event) => {
    // console.log(event.target.value, event.target.name);
    setLoginForm({...loginForm, [event.target.name] : event.target.value});
  }

  const showInlineCondition = () => {
    setInlineCondition(true);
  }
  
  const hideInlineCondition = () => {
    setInlineCondition(false);
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
      <div>
        <h2>The username is : {loginForm.username}</h2>
        <h2>The password is : {loginForm.password}</h2>
      </div>
      <img src={require("../images/shinchu.jpg")} className="img" />
      <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg" className="img" />

      <div>
        <button onClick={() => hideInlineCondition() }>Hide</button>
        <button onClick={() => showInlineCondition() }>Show</button>
        { inlineCondition && <h1>Hello there!!</h1> }
      </div>
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