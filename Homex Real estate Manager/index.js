const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.use(express.static(__dirname));
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/DB2");
console.log("Connection Successful! Now you are ready to go!");
var User_schema = mongoose.Schema({
  name: String,
  mail: String,
  subject: String,
});

var User = mongoose.model("Book", User_schema, "bookstore");
app.post("/", (req, res) => {
  const username = req.body.username;
  const mail = req.body.mail;
  const subject = req.body.subject;
  const other = req.body.message;
  console.log("Username: " + username);
  console.log("Mail: " + mail);
  console.log("Subject:" + subject);
  console.log("Message:" + other);

  var User_data = new User({
    name: req.body.username,
    password: req.body.mail,
    subject: req.body.subject,
    Message: req.body.message,
  });
  User_data.save();
});
app.listen(3000);
