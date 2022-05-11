import React from "react";
import {NavLink} from "react-router-dom";

const ContactPage = () => {
  return(
    <div>
      <h1>This is a Contact Page</h1>
      <NavLink to="/">Go to HomePage</NavLink>
      <br></br>
      {/* Clustor, Indexing
How to skip first 5 records from a collection
.live and .bind
method chaining
web workers
test_user7e017@concord.net */}
      <NavLink to="/about">Click to go About Page</NavLink>
    </div>
  )
}

export default ContactPage;

