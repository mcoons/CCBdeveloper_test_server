// require/import the express module(s)
const express = require('express'); 
const queries = require("./database/queries");

// instantiate an instance of the express class as 'app'
const app = express();              

// set a local port number for development
const localport = 3000;

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || localport;

// create a base route to direct root GET requests to
app.get('/', (request, response) => {
    let cats = '';
    queries
        .categories()
        .then(categories => {
            categories.forEach(element => { cats += element.name + ' ' });
            response.render('about.ejs',{"categories": cats})
        });
});  


app.get("/movies/", (request, response, next) => {
    queries
        .list()
        .then(movies => { 

            if (typeof request.query.title != 'undefined') {
                movies = movies.filter(function(movie){
                    if(movie.title.toLowerCase() === request.query.title.toLowerCase() ||
                       movie.title.toLowerCase().includes(request.query.title.toLowerCase())){
                        return movie;
                    }
                });
            } 

            if (typeof request.query.rating != 'undefined') {
                movies = movies.filter(function(movie){
                    if(movie.rating.toLowerCase() === request.query.rating.toLowerCase()){
                        return movie;
                    }
                });
            } 
  
            if (typeof request.query.category != 'undefined') {
                movies = movies.filter(function(movie){
                    if(movie.category.toLowerCase() === request.query.category.toLowerCase()){
                        return movie;
                    }
                });
            } 

            response.json({ movies });                
        })
        .catch(err => { response.send("error: ", err); });
});


app.get("/movies/fid/:fid", (request, response, next) => {
    queries
        .read('FID', request.params.fid)
        .then(movie => { 
            !movie.length
            ? response.status(404).json({message: `The FID '${request.params.fid}' was not found`})
            : response.json({movie});
        })
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
app.listen(port, () => console.log(`Server is now listening on port ${port} using the ${env} configuration.`));
