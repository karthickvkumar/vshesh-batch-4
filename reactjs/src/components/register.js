import React, {useState} from "react";

const RegisterPage = () => {

  const [register, setRegister] = useState({
    first_name : "",
    last_name : "",
    email_id : "",
    password : "",
    date_of_birth : "",
    gender : "",
    hobbies : "",
    city : "",
    address : ""
  })

  const onHandleInput = (event) => {
    // console.log(event.target.value)
    setRegister({...register, [event.target.name] : event.target.value });
  }

  const createAccount = () => {
    console.log(register)
  }

  return(
    <div>
       <div className="space">
        <label className="lableText">Enter First Name :</label>
        <input type="text" placeholder="Enter first name" className="inputbox" onChange={onHandleInput} name="first_name"/>
      </div>
      <div className="space">
        <label className="lableText">Enter Last Name :</label>
        <input type="text" placeholder="Enter last name" className="inputbox" onChange={onHandleInput} name="last_name"/>
      </div>
      <div className="space">
        <label className="lableText">Enter Email ID :</label>
        <input type="text" placeholder="Enter email id" className="inputbox" onChange={onHandleInput} name="email_id"/>
      </div>
      <div className="space">
        <label className="lableText">Enter Password :</label>
        <input type="password" placeholder="Enter password" className="inputbox" onChange={onHandleInput} name="password"/>
      </div>
      <div className="space">
        <label className="lableText">Select your DOB :</label>
        <input type="date" className="inputbox" onChange={onHandleInput} name="date_of_birth"/>
      </div>
      <div className="space">
        <label className="lableText">Select your Gender :</label>
        <input type="radio" onChange={onHandleInput} name="gender" value="male"/> Male
        <input type="radio" onChange={onHandleInput} name="gender" value="female"/> Female
        <input type="radio" onChange={onHandleInput} name="gender" value="others"/> Others
      </div>
      <div className="space">
        <label className="lableText">Select your Hobbies :</label>
        <input type="checkbox" onChange={onHandleInput} name="hobbies" value="Cricket"/> Cricket
        <input type="checkbox" onChange={onHandleInput} name="hobbies" value="Football"/> Football
        <input type="checkbox" onChange={onHandleInput} name="hobbies" value="Hockey"/> Hockey
        <input type="checkbox" onChange={onHandleInput} name="hobbies" value="Baseball"/> Baseball
        <input type="checkbox" onChange={onHandleInput} name="hobbies" value="Chess"/> Chess
        <input type="checkbox" onChange={onHandleInput} name="hobbies" value="Caramboard"/> Caramboard
      </div>
      <div className="space">
        <label className="lableText">Enter address :</label>
        <textarea placeholder="Enter address" className="inputbox" onChange={onHandleInput} name="address"></textarea>
      </div>
      <div className="space">
        <label className="lableText">Select City :</label>
        <select className="inputbox" onChange={onHandleInput} name="city">
          <option>Please select any once city</option>
          <option>Chennai</option>
          <option>Mumbai</option>
          <option>Jaipur</option>
          <option>Delhi</option>
        </select>
      </div>
      <button className="button" onClick={() => createAccount()}>Create a Account</button>
    </div>
  )
}

export default RegisterPage;