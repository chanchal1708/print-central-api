import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const serverURI = `${process.env.MONGODBURI}/${process.env.DBNAME}`;

mongoose.connect(serverURI, {});
mongoose.connection.on("error", (err) => {
  console.log("Database not connected...", err);
});
const con = mongoose.connection.on("connected", (err, res) => {
  console.log("Database connected..................................");
});

export default con;
