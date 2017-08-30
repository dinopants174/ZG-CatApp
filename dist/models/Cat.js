"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String
});
const Cat = mongoose.model("Cats", catSchema);
exports.default = Cat;
//# sourceMappingURL=Cat.js.map