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
});

// tell the Express app to listen for requests on our port      
app.listen(localport, () => console.log(`Server is now listening on port ${localport}`));