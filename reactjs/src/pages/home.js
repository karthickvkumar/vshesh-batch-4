import React  from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

const HomePage = () => {

  const listUser = () => {
    var url = "https://reqres.in/api/users?page=2";
    axios.get(url)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          })

  }

  return (
    <div>
      <h1>This is a Home Page</h1>
      <button onClick={() => listUser()}>List the User Profile</button>
      <NavLink to="/contact">Go to Contact Page</NavLink>
    </div>
  )
}

export default HomePage;