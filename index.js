const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.static("./"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(app.get("port"));
