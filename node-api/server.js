const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const http = require("http").createServer(app);

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  credentials: true,
  origin: "*"
}))

var connection = mysql.createConnection({
  host: "remotemysql.com",
  user: "wym4khPjwJ",
  password: "IpVePeo1GV",
  database: "wym4khPjwJ",
  port: 3306
});

// http://localhost:4000/api/user/list
app.get("/api/user/list", (request, response) => {
  var sql_query = `SELECT * from Karthick_Kumar`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
      return;
    }

    response.status(200).send(result);
  });
});

// http://localhost:4000/api/user/create
app.post("/api/user/create", (request, response) => {
  var name = request.body.name;
  var age = request.body.age;
  var roll_number = request.body.roll_number;
  var location = request.body.location;

  var sql_query = `INSERT INTO Karthick_Kumar (name, age, roll_number, location) VALUES ('${name}', ${age}, '${roll_number}', '${location}')`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
      return;
    }

    response.status(200).send({
      result,
      message : "User is created successfully"
    });
  });
}); 

// http://localhost:4000/api/user/edit/1
app.put("/api/user/edit/:id", (request, response) => {
  var id = request.params.id;
  var name = request.body.name;
  var age = request.body.age;
  var roll_number = request.body.roll_number;
  var location = request.body.location;

  var sql_query = `UPDATE Karthick_Kumar SET name='${name}', age=${age}, roll_number='${roll_number}', location='${location}'  WHERE Id=${id}`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
      return;
    }

    response.status(200).send({
      result,
      message : "User is updated successfully"
    });
  });
}); 

// http://localhost:4000/api/user/delete/1
app.delete("/api/user/delete/:id", (request, response) => {
  var id = request.params.id;

  var sql_query = `DELETE FROM Karthick_Kumar WHERE Id=${id}`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
      return;
    }

    response.status(200).send({
      result,
      message : "User is profile is deleted successfully"
    });
  });
});



const port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("Node JS Server is running on port 4000");
});