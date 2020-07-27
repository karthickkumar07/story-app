const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const bodyparser = require("body-parser");
const DB = require("./config/db");
const cors = require("cors");
dotenv.config({ path: "./config/config.env" });

// db connection
DB();

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use("/auth", require("./routes/auth"));
app.use("/auth", require("./routes/post"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running  on port ${PORT}`));
