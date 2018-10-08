const database = require("./database-connection");

module.exports = {

  list() {
    return database("film_list")
      .select()
      .orderBy("title");
  },

  read(attribute, value) {
    return database("film_list")
      .select()
      .where(attribute, value)
      .orderBy("title");
  }
  
};
