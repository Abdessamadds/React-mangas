const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const blogRoutes = require("./src/routes/blogs");


// setting envirenmont variables
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// initializing express app
const app = express();

// middleWare
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/blogs", blogRoutes);

// connect to db
mongoose
  .connect(MONGO_URI)
  .then(() => {
    // listenning for requests
    app.listen(PORT, () => {
      console.log(`connected to db and listening on http://localhost:${PORT}`);
    });

  })
  .catch((error) => {
    console.log(error);
  });

