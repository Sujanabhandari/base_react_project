//we need it to read environmental variables
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const db = require("./database/client.js");

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world from server");
});

//parse the body of any request coming from html forms
app.use(express.urlencoded({ extended: true }));

//parse the body of any request not coming through an html form
app.use(express.json());

// console.log(process.env)
app.get("/api/blogs", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * from blog;");
    return res.status(200).send(rows);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});