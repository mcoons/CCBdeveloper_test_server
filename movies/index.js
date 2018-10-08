// require/import the express module(s)
const express = require('express'); 
const queries = require("./database/queries");

// instantiate an instance of the express class as 'app'
const app = express();              

// set a local port number for development
const localport = 3030;

// create a base route to direct root GET requests to
app.get('/', (request, response, next) => response.render('about.ejs'));   

app.get("/movies/", (request, response, next) => {
    queries
        .list()
        .then(movies => { response.json({ movies }); })
        .catch(err => { response.send("error: ", err); });
});

app.get("/movies/title/:title", (request, response, next) => {
    queries
        .read('title', request.params.title)
        .then(movie => { 
            !movie.length
            ? response.status(404).json({message: `The title '${request.params.title}' was not found`})
            : response.json({movie});
        })
        .catch(err => { response.send("error: ", err); });
});

app.get("/movies/rating/:rating", (request, response, next) => {
    queries
        .read('rating',  request.params.rating)
        .then(movies => { 
            !movies.length
            ? response.status(404).json({message: `No titles found with the rating of '${request.params.rating}'`})
            : response.json({movies}); 
        })
        .catch(err => { response.send("error: ", err); });
});

app.get("/movies/category/:category", (request, response, next) => {
    queries
        .read('category',  request.params.category)
        .then(movies => { 
            !movies.length
            ? response.status(404).json({message: `No titles found in the category of '${request.params.category}'`})
            : response.json({movies}); })
        .catch(err => { response.send("error: ", err); });
});

// a catch all route to redirect to about page
app.get('*', (request, response) => response.redirect('/'));      

// tell the Express app to listen for requests on our port      
app.listen(localport, () => console.log(`Server is now listening on port ${localport}`));