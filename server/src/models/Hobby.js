const Model = require("./Model");

class Hobby extends Model {
  static get tableName() {
    return "hobbies";
  }
}

module.exports = Hobby;
