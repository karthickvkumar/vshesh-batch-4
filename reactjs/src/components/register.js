import React from "react";

const RegisterPage = () => {
  return(
    <div>
       <div className="space">
        <label className="lableText">Enter First Name :</label>
        <input type="text" placeholder="Enter first name" className="inputbox"/>
      </div>
      <div className="space">
        <label className="lableText">Enter Last Name :</label>
        <input type="text" placeholder="Enter last name" className="inputbox"/>
      </div>
      <div className="space">
        <label className="lableText">Enter Email ID :</label>
        <input type="text" placeholder="Enter email id" className="inputbox"/>
      </div>
      <div className="space">
        <label className="lableText">Enter Password :</label>
        <input type="text" placeholder="Enter password" className="inputbox"/>
      </div>
      <div className="space">
        <label className="lableText">Select your DOB :</label>
        <input type="date" className="inputbox"/>
      </div>
      <div className="space">
        <label className="lableText">Select your Gender :</label>
        <input type="radio"/> Male
        <input type="radio"/> Female
        <input type="radio"/> Others
      </div>
      <div className="space">
        <label className="lableText">Select your Hobbies :</label>
        <input type="checkbox"/> Cricket
        <input type="checkbox"/> Football
        <input type="checkbox"/> Hockey
        <input type="checkbox"/> Baseball
        <input type="checkbox"/> Chess
        <input type="checkbox"/> Caramboard
      </div>
      <div className="space">
        <label className="lableText">Enter address :</label>
        <textarea placeholder="Enter address" className="inputbox"></textarea>
      </div>
      <div className="space">
        <label className="lableText">Select City :</label>
        <select className="inputbox">
          <option>Please select any once city</option>
          <option>Chennai</option>
          <option>Mumbai</option>
          <option>Jaipur</option>
          <option>Delhi</option>
        </select>
      </div>
      <button className="button">Create a Account</button>
    </div>
  )
}

export default RegisterPage;