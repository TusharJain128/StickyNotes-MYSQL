const express = require("express");
const { db } = require("./database/db");
const route = require("./routes/route");
const cors = require("cors");

const app = express();

// Configure CORS properly
const corsOptions = {
  origin: [
    'https://tushar-stickynotes.netlify.app',
    'http://localhost:3000',
    'http://localhost:3001'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", route);

app.listen(process.env.PORT || 3001, () => {
  console.log(`server start on ${process.env.PORT || 3001}`);
});