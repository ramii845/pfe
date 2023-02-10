const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const colors=require('colors');
const { notFound, errorHandler } = require("./middelwares/errorMiddelware.js");
const userRoutes = require("./routes/userRoutes");
const app =express();
dotenv.config();
connectDB();
app.use(express.json());
app.use("/api/users",userRoutes);
//app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5600;
app.listen(PORT ,console.log(`server started on PORT ${PORT}`.yellow.bold));
app.get("/", (req, res) => {
  res.send("API is running..");
  });
