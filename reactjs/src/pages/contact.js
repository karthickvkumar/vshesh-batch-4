import React from "react";
import {NavLink} from "react-router-dom";

const ContactPage = () => {
  return(
    <div>
      <h1>This is a Contact Page</h1>
      <NavLink to="/">Go to HomePage</NavLink>
      <br></br>
      <NavLink to="/about">Click to go About Page</NavLink>
    </div>
  )
}

export default ContactPage;