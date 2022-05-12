import axios from "axios";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const ContactPage = () => {

  const [form, setForm] = useState({
    name : "",
    job: ""
  })

  const onHandleInput = (event) => {
    setForm({...form, [event.target.name] : event.target.value});
  }

  const formSubmit = () => {
    var url = "https://reqres.in/api/users";
    
    axios.post(url, form)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return(
    <div>
      <h1>This is a Contact Page</h1>
      <NavLink to="/">Go to HomePage</NavLink>
      <br></br>
      <NavLink to="/about">Click to go About Page</NavLink>2
      <div className="space">
        <label className="lableText">Enter your name :</label>
        <input type="text" placeholder="Enter your name" className="inputbox" onChange={onHandleInput} name="name" />
      </div>
      <div className="space">
        <label className="lableText">Enter your Job :</label>
        <input type="text" placeholder="Enter your Job" className="inputbox" onChange={onHandleInput} name="job"/>
      </div>
      <button onClick={() => formSubmit()}>Submit Form</button>
    </div>
  )
}

export default ContactPage;

