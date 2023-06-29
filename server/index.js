const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "mydatabase",
});
app.post("/login", (req, res) => {
  const Lemail = req.body.Lemail;
  const Lpassword = req.body.Lpassword;
  
  db.query(
    "SELECT * FROM users WHERE Uemail = ? ;",
    Lemail,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(Lpassword, result[0].Upassword, (error, response) => {
          if (response) {
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }

        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});
  


app.post("/create", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const passwordhash = bcrypt.hashSync(password, 10);
  const fname = req.body.fname;
  const lname = req.body.lname;
  const phonenumber = req.body.phonenumber;

  db.query(
    "INSERT INTO users (Uemail,Upassword,Ufname,Ulname,Unumber) VALUES (?,?,?,?,?)",
    [email,passwordhash, fname, lname, phonenumber],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );

});

app.post("/Addpledge", (req, res) => {
  const typepawn = req.body.typepawn;
  const band = req.body.band;
  const model = req.body.model;
  const numberserial = req.body.numberserial;
  const pawnprice = req.body.pawnprice;
  const interest = req.body.interest;
  
  db.query(
    "INSERT INTO pledge (Ptype,Pband,Pmodel,Pnumberserial,Pprice,Pinterest) VALUES (?,?,?,?,?,?)",
    [typepawn, band, model,numberserial, pawnprice, interest],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );

});

app.listen(5000, () => {
  console.log("Yey, your server is running on port 5000");
});