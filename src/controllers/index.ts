import { Request, Response } from "express";
import { default as Cat } from "../models/Cat";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
  let data: {context: string}

  Cat.find((err: Error, cats: Array<Object>) => {    
    if (err){
      res.sendStatus(500);
      console.log("Error", err);
    } 
    else {
      if (cats.length == 1){
        data = {context: cats.length.toString() + ' cat'};
      } else{
        data = {context: cats.length.toString() + ' cats'};                
      }
      res.render("home", data);
    }
  });
};
  

/**
 * GET /cats
 * Cats page.
 */
export let cats = (req: Request, res: Response) => {
  interface allData {
    catsArray: Array<Object>,
    context: string
  }

  Cat.find((err: Error, cats: Array<Object>) => {
    if (err){
      res.sendStatus(500);
      console.log("Error", err);
    } else {
      let data: allData = {catsArray: cats, context: 'Unfortunately, you do not have any cats. Go and get some!'};
      if (cats.length){
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
export let addcat = (req: Request, res: Response) => {
  res.render("form");
};

/**
 * POST /addcat
 * Post form data from Add Cat page.
 */
export let postcat = (req: Request, res: Response) => {
  let cat = new Cat({name: req.body.name, age: req.body.age, color: req.body.color});
  cat.save((err: Error) => {
    if (err){
      res.sendStatus(500);
      console.log("Error: ", err);
    } else {
      res.status(200).send(cat);
    }
  });
};

/**
 * GET /removecat
 * Remove Cat page.
 */
export let removecat = (req: Request, res: Response) => {
  interface singleData {
    cat: Object,
    context: string
  }
  Cat.findOneAndRemove({}, {sort: {age: -1}}, (err: Error, cat: Object) => {
    if (err){
      res.sendStatus(500);
      console.log("Error: ", err);
    } else {
      let data: singleData = {cat: null, context: "You do not have any cats to send to the farm right now. Go and get some!"};
      if (cat){
        data['cat'] = cat;
        data['context'] = 'Say goodbye to your oldest cat!'
      }
      res.render("indiv", data);
    }
  });
};