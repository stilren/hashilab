"use strict";

const express = require("express");
const api = require("./src/api");

// Constants
const PORT = process.env.PORT || 8080;
// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world\n");
});
app.get("/api/links", api.links);
app.post("/api/links", api.link);
app.get("/api/links/:id", api.link);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
