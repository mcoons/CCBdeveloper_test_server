# Moviegoers API

This is an API for the MovieGoers database.  It is built with docker containers.  
Development port is 3000 and production port is 3030.

## Installation
  * install Docker
    * Here are the instructions to install Docker for ([Mac](https://docs.docker.com/docker-for-mac/install/)) or ([Windows](https://docs.docker.com/docker-for-windows/install/)).
  * clone the repo
    * `git clone https://github.com/mcoons/CCBdeveloper_test_server.git`
  * change to the repo directory
  * run `docker-compose up -d`
  * navigate to http://localhost:3030/ for the help page

## Basic routes
/ - This help page

/movies - Query all movies

-- The /movies route can be filtered by: title, rating and category
  *  /movies?title=*break*
  *  /movies?category=*new*
  *  /movies?rating=*g*
  *  /movies?title=*break*&category=*new*&rating=*g* 

-- The title filter includes partial matching

**Current categories:** Action Animation Children Classics Comedy Documentary Drama Family Foreign Games Horror Music New Sci-Fi Sports Travel

### Example object data returned
```javascript
{
    "fid": 1,
    "title": "ACADEMY DINOSAUR",
    "description": "A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies",
    "category": "Documentary",
    "rating": "PG"
}
```
## Pre-filtered routes

/movies/fid/*film_id* - Query by Film ID

/movies/title/*movie_title* - Query by Film Title

/movies/rating/*rating* - Query by Rating

/movies/category/*category* - Query by Category

### Example object data returned
```javascript
{
    "FID": 1,
    "title": "ACADEMY DINOSAUR",
    "description": "A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies",
    "released": 2006,
    "category": "Documentary",
    "language": "English",
    "price": 0.99,
    "length": 86,
    "rating": "PG",
    "features": "Deleted Scenes,Behind the Scenes",
    "actors": "Penelope Guiness, Christian Gable, Lucille Tracy, Sandra Peck, Johnny Cage, Mena Temple, Warren Nolte, Oprah Kilmer, Rock Dukakis, Mary Keitel"
}
```
/actors/*movie_title* - Query actors by Film Title

### Example object data returned
```javascript
{
    "first_name": "PENELOPE",
    "last_name": "GUINESS"
}   
```
