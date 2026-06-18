const express = require("express");
const app = express();

const dbHost = process.env.DB_HOST;

app.get("/", (req, res) => {
  if (!dbHost) {
    throw new Error("DB_HOST not set");
  }

  res.send("App running with DB: " + dbHost);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});