import express from "express";

import Hobby from "../../../models/Hobby.js";

const hobbiesRouter = new express.Router();

hobbiesRouter.get("/", async (req, res) => {
  try {
    const hobbiesData = await Hobby.query();
    return res.status(200).json({ hobbies: hobbiesData });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

hobbiesRouter.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const formData = req.body;
    cleanUserInput(formData);
    const newHobby = await Hobby.query().insert(formData);
    console.log(newHobby);
    return res.status(201).json({ hobby: newHobby });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: error });
  }
});

export default hobbiesRouter;
