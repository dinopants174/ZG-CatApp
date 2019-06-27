"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cat_1 = require("../models/Cat");
/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
    let data;
    Cat_1.default.find((err, cats) => {
        if (err) {
            res.sendStatus(500);
            console.log("Error", err);
        }
        else {
            if (cats.length == 1) {
                data = { context: cats.length.toString() + ' cat' };
            }
            else {
                data = { context: cats.length.toString() + ' cats' };
            }
            res.render("home", data);
        }
    });
};
/**
 * GET /cats
 * Cats page.
 */
exports.cats = (req, res) => {
    Cat_1.default.find((err, cats) => {
        if (err) {
            res.sendStatus(500);
            console.log("Error", err);
        }
        else {
            let data = { catsArray: cats, context: 'Unfortunately, you do not have any cats. Go and get some!' };
            if (cats.length) {
                data['context'] = 'Your cats are below:';
            }
            res.render("list", data);
        }
    });
};
/**
 * GET /addcat
 * Add Cat page.
 */
exports.addcat = (req, res) => {
    res.render("form");
};
/**
 * POST /addcat
 * Post form data from Add Cat page.
 */
exports.postcat = (req, res) => {
    let cat = new Cat_1.default({ name: req.body.name, age: req.body.age, color: req.body.color });
    cat.save((err) => {
        if (err) {
            res.sendStatus(500);
            console.log("Error: ", err);
        }
        else {
            res.status(200).send(cat);
        }
    });
};
/**
 * GET /removecat
 * Remove Cat page.
 */
exports.removecat = (req, res) => {
    Cat_1.default.findOneAndRemove({}, { sort: { age: -1 } }, (err, cat) => {
        if (err) {
            res.sendStatus(500);
            console.log("Error: ", err);
        }
        else {
            let data = { cat: null, context: "You do not have any cats to send to the farm right now. Go and get some!" };
            if (cat) {
                data['cat'] = cat;
                data['context'] = 'Say goodbye to your oldest cat!';
            }
            res.render("indiv", data);
        }
    });
};
//# sourceMappingURL=index.js.map