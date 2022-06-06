//Dependencies

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const Agenda = require("agenda");
const sequelize = require("./config/connection");


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;



// Set Handlebars as the default template engine.
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use(require('./controllers/'));
app.use(function (req, res, next) {
  res.status(404).send('Cant find route');

})

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
  
  console.log("it worked");