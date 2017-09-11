import * as mongoose from "mongoose";

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String
});

const Cat = mongoose.model("Cats", catSchema);

export default Cat;