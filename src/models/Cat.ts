import * as mongoose from "mongoose";
import { createInterface } from "readline";

interface CatInterface extends mongoose.Document {
    name: string;
    age: number;
    color: string;
}

const catSchema: mongoose.Schema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String
});

const Cat = mongoose.model<CatInterface>("Cats", catSchema);

export default Cat;