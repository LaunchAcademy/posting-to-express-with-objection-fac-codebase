import express from "express";

import Hobby from "../../../models/Hobby.js";
// import { Hobby } from "../../../models/index";

const hobbiesRouter = new express.Router();

hobbiesRouter.get("/", async (req, res) => {
  try {
    const allHobbies = await Hobby.query();
    return res.status(200).json({ hobbies: allHobbies });
  } catch (err) {
    return res.status(500).json({ errors: err });
  }
});

hobbiesRouter.post("/", async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    const newHobby = await Hobby.query().insertAndFetch(formData);
    console.log(newHobby);
    return res.status(201).json({ hobby: newHobby });
  } catch (err) {
    return res.status(500).json({ errors: err });
  }
});

export default hobbiesRouter;
