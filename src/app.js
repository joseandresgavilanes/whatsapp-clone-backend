// Dependencies
const express = require('express');
const db = require("./utils/database");

// Files Settings
const { port } = require("./config");
//Routers
const userRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");
const conversationRouter = require("./conversations/conversations.router");
const initModels = require("./models/initModels");

// Initial Configs
const app = express();

app.use(express.json());

db.authenticate()
  .then(() => {
    console.log("Database Authenticated");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => {
    console.log("Database Synced");
  })
  .catch((err) => {
    console.log(err);
  });

initModels();

app.get(
  "/",
  (req, res, next) => {
    console.log("Se esta ejecutando un middleware", req.method);
    next();
  },
  (req, res) => {
    res.status(200).json({
      message: "Server Ok!",
      users: `localhost:${port}/api/v1/users`,
    });
  }
);

// Use Routers
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/conversations", conversationRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
