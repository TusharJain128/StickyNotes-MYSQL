const express = require("express");
const { db } = require("./database/db");
const route = require("./routes/route");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/", route);


app.listen(process.env.PORT || 3001, () => {
  console.log(`server start on ${process.env.PORT || 3001}`);
});