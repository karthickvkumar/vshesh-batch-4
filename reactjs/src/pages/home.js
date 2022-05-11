import React, {useState}  from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

const HomePage = () => {

  const [userList, setUserList] = useState([]);

  const listUser = () => {
    var url = "https://reqres.in/api/users?page=2";
    axios.get(url)
          .then((response) => {
            var serverData = response.data;
            setUserList(serverData.data);
          })
          .catch((error) => {
            console.log(error);
          })
  }

  var userListData = userList.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.first_name}</td>
        <td>{value.last_name}</td>
        <td>{value.email}</td>
        <td>
          <img src={value.avatar} />
        </td>
      </tr>
    )
  })

  return (
    <div>
      <h1>This is a Home Page</h1>
      <button onClick={() => listUser()}>List the User Profile</button>
      <NavLink to="/contact">Go to Contact Page</NavLink>
      <table id="customers">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>

        <tbody>
          {userListData}
        </tbody>
      </table>
    </div>
  )
}

export default HomePage;