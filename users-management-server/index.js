const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "Argentina", email: "argentina@gmail.com" },
  { id: 2, name: "Brazil", email: "brazil@gmail.com" },
  { id: 3, name: "France", email: "france@gmail.com" },
];

// MiddleWare

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("User Management Server is Running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Post Api hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`My Server Is running on PORT: ${port}`);
});
