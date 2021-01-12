/* eslint-disable no-console */
import { connection } from "../boot.js"
import HobbySeeder from "./seeders/HobbySeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding hobbies...")
    await HobbySeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder