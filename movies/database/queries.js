const database = require("./database-connection");

module.exports = {

  list() {
    return database("film_list")
      .select()
      .orderBy("title");
  }
  
};
