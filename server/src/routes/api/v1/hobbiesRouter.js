import express from "express"

import Hobby from "../../../models/Hobby.js"

const hobbiesRouter = new express.Router()

hobbiesRouter.get("/", async (req, res) => {
  try {
    const hobbies = await Hobby.query()
    return res.status(200).json({ hobbies })
  }
  catch (err) {
    return res.status(500).json({ errors: err })
  }
})

hobbiesRouter.post("/", async (req, res) => {
  const newHobbyData = req.body

  try {
      const newHobby = await Hobby.query().insertAndFetch(newHobbyData)
      res.status(200).json({ hobby: newHobby })    
  } catch(error){
    res.status(500).json({errors: error})
  }
})

export default hobbiesRouter