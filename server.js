//Dependencies

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



// Starts the server to begin listening
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });