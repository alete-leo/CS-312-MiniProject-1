import express from "express";
import bodyParser from "body-parser";

console.log("Script is running");

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs");
});

/* 
app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", { numberOfLetters: numLetters });
});

*/

// the above is the default code taken from the numLetters exercise, establishing a connection & function for receiving and sending data

app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", { numberOfLetters: numLetters });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

