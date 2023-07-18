import express from "express"

import Hobby from "../../../models/Hobby.js"

const hobbiesRouter = new express.Router()

hobbiesRouter.get("/", async (req, res) => {
  try {
    const hobbies  = await Hobby.query()
    console.log(hobbies);
    return res.status(200).json({ hobbies: hobbies })
    // return res.status(200).json({ hobbies })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

hobbiesRouter.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newHobby = await Hobby.query().insertAndFetch(req.body)
    console.log(newHobby);
    return res.status(201).json({ hobby: newHobby })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

export default hobbiesRouter