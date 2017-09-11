/**
 * Module dependencies.
 */
import * as express from "express";
import * as path from "path";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as exphbs from "express-handlebars";
import * as mongoose from "mongoose";

/**
 * Controllers (route handlers).
 */
import * as routersController from "./controllers/index";

const app =  express();

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
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist/public')));

//below are my routes and the respective functions they call in ./routes/index.js
import { Request, Response } from "express";
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