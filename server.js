//Dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const Agenda = require("agenda");
const sequelize = require("./config/connection");
const routes = require('./controllers/');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// handles data from the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set Handlebars as the default template engine.
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// static requests
app.use(express.static('public'));

app.use(require('./controllers/'));

app.get('/', (req, res) => {
  //Serves the body of the page main.handlebars to the container homepage.handlebars
  res.render('main', {layout : 'homepage'});
  });

// Starts the server to begin listening
sequelize.sync({ force: false}).then (() => {
app.listen(PORT, () => 
    console.log(`Server listening`));
  });
  
  console.log("it worked");