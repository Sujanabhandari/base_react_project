//we need it to read environmental variables
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const db = require("./database/client.js");

app.get("/", (req, res) => {
  res.send("Hello world from server");
});

//parse the body of any request coming from html forms
app.use(express.urlencoded({ extended: true }));

//parse the body of any request not coming through an html form
app.use(express.json());

// console.log(process.env)
app.get("/api/users", async (req, res) => {

  try {
    const { rows } = await db.query("SELECT * from users;");
    return res.status(200).send(rows);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
});

app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    //prepared statement to avoid SQL injections
    const {
      rows: [user],
      rowCount,
    } = await db.query(`SELECT * FROM users WHERE id=$1;`, [id]);

    //if there is no movie with the id, return 404
    if (!rowCount)
      return res.status(404).send(`The user with id ${id} does not exist`);

    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
});


app.post("/user", async (req, res) => {

  const { first_name, last_name, age, active} = req.body;

  // if (!first_name || !last_name || !age || !active)
  //   return res
  //     .status(400)
  //     .send("The request body must have values");

  try {
    const {
      rows: [createdUser],
    } = await db.query(
      "INSERT INTO users (first_name,last_name,age, active) VALUES ($1,$2,$3,$4) RETURNING *",
      [first_name, last_name, age, active]
    );

    return res.status(201).send(createdUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
})

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  
  const { first_name, last_name, age} = req.body;
  
  if (!first_name || !last_name || !age)
    return res
      .status(400)
      .send("The request body must have values");

  try {
    //prepared statement to avoid SQL injections
    const {
      rows: [updatedUser],
      rowCount,
    } = await db.query("UPDATE users SET first_name=$1, last_name=$2 WHERE id=$3 RETURNING *", [first_name, last_name, id]);

    //if there is no movie with the id, return 404
    if (!rowCount)
      return res.status(404).send(`The user with id ${id} does not exist`);

    return res.status(200).send(updatedUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const {
      rows: [deletedUsers],
      rowCount,
    } = await db.query("DELETE FROM users WHERE id=$1 RETURNING *", [id]);

    // inform the user if they try to delete a movie that does not exist
    if (!rowCount)
      return res
        .status(404)
        .send(
          `The movie with id ${id} that you are trying to delete does not exist`
        );

    return res.status(200).send(deletedUsers);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
});

app.get("/api/orders", async (req, res) => {

  try {
    const { rows } = await db.query("SELECT * from orders;");
    return res.status(200).send(rows);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
});

app.get("/api/orders/:id", async (req, res) => {
  const { id } = req.params;

  try {
    //prepared statement to avoid SQL injections
    const {
      rows: [order],
      rowCount,
    } = await db.query(`SELECT * FROM orders WHERE id=$1;`, [id]);

    //if there is no movie with the id, return 404
    if (!rowCount)
      return res.status(404).send(`The user with id ${id} does not exist`);

    return res.status(200).send(order);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
});

app.post("/order", async (req, res) => {

  const { price, date, user_id} = req.body;

  if (!price || !date || !user_id)
    return res
      .status(400)
      .send("The request body must have values");

  try {
    const {
      rows: [createdUser],
    } = await db.query(
      "INSERT INTO orders (price,date,user_id) VALUES ($1,$2,$3) RETURNING *",
      [price, date, user_id]
    );

    return res.status(201).send(createdUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
})

app.put("/orders/:id", async (req, res) => {
  const { id } = req.params;
  
  const { first_name, last_name, age} = req.body;
  
  if (!first_name || !last_name || !age)
    return res
      .status(400)
      .send("The request body must have values");

  try {
    //prepared statement to avoid SQL injections
    const {
      rows: [updatedUser],
      rowCount,
    } = await db.query("UPDATE orders SET first_name=$1, last_name=$2 WHERE id=$3 RETURNING *", [first_name, last_name, id]);

    //if there is no movie with the id, return 404
    if (!rowCount)
      return res.status(404).send(`The user with id ${id} does not exist`);

    return res.status(200).send(updatedUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});