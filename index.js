const express = require("express");
const path = require("path");
const i18n = require("i18n-express");
const hbs = require("express-handlebars");
const app = express();
const rootUrl = path.join(__dirname, "statics");

// settings
app.set("port", process.env.PORT || 3000);
app.engine("hbs", hbs({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "statics");

// middlewares
app.use(express.static(rootUrl));
app.use(
  i18n({
    translationsPath: path.join(__dirname, "i18n"),
    siteLangs: ["en", "es"],
    textsVarName: "t"
  })
);

// routes
app.get("/", (req, res) => {
  res.render("index", { showVideoEn: req.i18n_lang === "en", langEn: req.i18n_lang === "en" });
});

// start server
app.listen(app.get("port"));
