//import des packages
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

//Import des routes
const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exit" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("🚀  Server started  🚀");
});
