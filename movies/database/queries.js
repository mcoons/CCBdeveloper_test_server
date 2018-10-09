const database = require("./database-connection");

module.exports = {

  list() {
    return database("michaels_view")
      .select()
      .orderBy("title");
  },

  read(attribute, value) {
    return database("michaels_view")
      .select()
      .where(attribute, value)
      .orderBy("title");
  },

  categories() {
    return database("category")
      .select("name")
      .orderBy("name")
  }

  
};
