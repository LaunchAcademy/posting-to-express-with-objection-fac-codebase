import Hobby from "../../models/Hobby.js"

class HobbySeeder {
  static async seed() {
    await Hobby.query().insert({ name: "Cross Stitching", description: "Making tons of little x's with a needle and thread to make beautiful (or snarky) patterns" })
    await Hobby.query().insert({ name: "Running" })
  }
}

export default HobbySeeder