const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const UserController = require("./controllers/UserController");
const RoomController = require("./controllers/RoomController");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Working.");
});
app.post("/api/user/signIn", (req, res) => UserController.signIn(req, res));
app.get("/api/user/info", (req, res) => UserController.info(req, res));
app.post("/api/room/create", (req, res) => RoomController.create(req, res));
app.get("/api/room/list", (req, res) => RoomController.list(req, res));
app.delete("/api/room/remove/:id", (req, res) =>
  RoomController.remove(req, res)
);

app.listen(3000, (err) => {
  if (err) console.log(err);
  console.log("Server start on port 3000");
});
