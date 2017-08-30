"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
/**
 * Controllers (route handlers).
 */
const routersController = require("./controllers/index");
const app = express();
/**
 * Connect to MongoDB.
 */
mongoose.connect('mongodb://zghadyali:abc123test123@ds036577.mlab.com:36577/catsdb', { useMongoClient: true });
mongoose.connection.on("error", () => {
    console.log("MongoDB connection error. Please make sure MongoDB is running.");
    process.exit();
});
/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.get('/', routersController.index);
app.get('/cats', routersController.cats);
app.get('/addcat', routersController.addcat);
app.post('/addcat', routersController.postcat);
app.get('/removecat', routersController.removecat);
app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d"), app.get("port"));
    console.log("  Press CTRL-C to stop\n");
});
module.exports = app;
//# sourceMappingURL=server.js.map