const Model = require("./Model.js")

class Hobby extends Model {
  static get tableName(){
    return "hobbies"
  }
}

module.exports = Hobby

