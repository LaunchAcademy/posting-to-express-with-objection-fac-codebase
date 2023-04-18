const Model = require("./Model");

class Hobby extends Model {
  static tableName() {
    // needs to match name of table from migration file
    return "hobbies";
  }
}

module.exports = Hobby;
