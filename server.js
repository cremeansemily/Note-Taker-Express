// Dependencies
const express = require("express");
const path = require("path")
// Express configuration
//Tells node that we are creating an 'express' server
const app = express();

// Sets an initial port.
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log(__dirname + '/public');

app.use(express.static(__dirname + '/public')); //Serves resources from public folder
app.use(express.static(path.join(__dirname, './assets')));


// ROUTES
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});