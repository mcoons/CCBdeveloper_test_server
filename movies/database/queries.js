const database = require("./database-connection");

module.exports = {

  list() {
      return database("michaels_view")
          .select("fid","title","description","category","rating")
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
          .orderBy("name");
  },

  actors(film){
    return database("film_actor")
    .join("film","film.film_id","=","film_actor.film_id")
    .join("actor","actor.actor_id","=","film_actor.actor_id")
    .where("film.title","=",film)
    .select("first_name","last_name")
  }

  
};
