import express from "express"

import Hobby from "../../../models/Hobby.js"

const hobbiesRouter = new express.Router()

hobbiesRouter.get("/", async (req, res) => {
  try {
    const hobbies = await Hobby.query()
    return res.status(200).json({ hobbies: hobbies })
    // return res.status(200).json({ hobbies })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

hobbiesRouter.post("/", async (req, res) => {
  try {
    console.log(req.body);
    
    // await Hobby.query().insert({ name: "", description: "" })
    // const newHobby = await Hobby.query().insertAndFetch(req.body)
    const hobby = await Hobby.query().insertAndFetch(req.body)
    // console.log(newHobby);
    return res.status(201).json({ hobby })
    // return res.status(201).json({ hobby: newHobby })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default hobbiesRouter