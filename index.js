import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import DB from "./src/databaseConnection/DBConnection.js";
import module from "./src/Module/route.js";
import cors from "cors";

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(cors());

// Middleware
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(bodyParser.json({ limit: "50mb" }));

global.con = DB.con;

app.use("/v1", module);

// Default route
app.get("/", async (req, res) => {
  res.send("Hello");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
