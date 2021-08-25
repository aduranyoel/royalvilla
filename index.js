const express = require("express");
const path = require("path");
const i18n = require("i18n-express");
const handlebars = require('handlebars');
const expressHandlebars = require("express-handlebars");
const app = express();
const rootUrl = path.join(__dirname, "statics");

// settings
app.set("port", process.env.PORT || 3000);
const hbs = expressHandlebars.create({
    handlebars,
    extname: ".hbs",
    cache: true,
    helpers: {
        title: 'Rental House Osmany',
        appName: 'Rental House Osmany',
        siteUrl: 'https://banescasarentaosmany.herokuapp.com/',
        siteDomain: 'banescasarentaosmany.herokuapp.com'
    }
});
app.engine("hbs", hbs.engine);
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
    res.render("index", {showVideoEn: req.i18n_lang === "en", langEn: req.i18n_lang === "en", lang: req.i18n_lang});
});

// start server
const port = app.get("port");
app.listen(port, () => console.log("server listening on port " + port));
