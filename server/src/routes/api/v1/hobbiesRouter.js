import express from "express"

// import models from "./../../../models/index.js"
// const Hobby = models.Hobby
import { Hobby } from "./../../../models/index.js"

const hobbiesRouter = new express.Router()

hobbiesRouter.get("/", async (req, res) => {
  try {
    const hobbies = await Hobby.query()
    res.status(200).json({ hobbies: hobbies })
  } catch(error) {
    res.status(500).json({ error: "Something went terribly wrong, I probably messed up the database"})
  }
})

hobbiesRouter.post("/", async (req, res) => {
  const hobbyData = req.body

  try {
    const hobby = await Hobby.query().insertAndFetch(hobbyData)
    res.status(201).json({ hobby: hobby })
  } catch(err) {
    res.status(500).json({ error: "woopsy doopsy something went wrong"})
  }
})

export default hobbiesRouter