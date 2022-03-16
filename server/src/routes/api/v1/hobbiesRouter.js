import express from "express"

import Hobby from "../../../models/index.js"

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
  // do some stuff
  console.log("req.body", req.body)

  //   We need to grab the user's input from the request body
  const hobbyData = req.body

  // Once we have it, we need to try to insert a new record into our database
  try {
    const newHobby = await Hobby.query().insertAndFetch(hobbyData)
    console.log(newHobby)
    // const newHobby = Hobby.query().insertAndFetch({ name: "Hiking", description: "" })
    // If we're successful, we return a 201 Created status, along with the new record
    return res.status(201).json({ hobby: newHobby })
  }
  catch (err) {
    // If we're unsuccessful, we return a 500 Internal Server Error status, along with the error
    return res.status(500).json({ errors: err })
  }
})

export default hobbiesRouter