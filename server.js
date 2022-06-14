//Dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const Agenda = require("agenda");
// when routes are turned on we lose our logo image
//const routes = require('./controllers/');
const session = require('express-session');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sequelize = require("./config/connection");
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

// turn on routes
//app.use(routes);

// Set Handlebars as the default template engine.
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// handles data from the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// static requests
//app.use(express.static('public'));

//routes
app.use(require('./controllers/'));
app.use(function (req, res, next) {
  res.status(404).send('Cant find route');

})
// app.get('/', (req, res) => {
//   //Serves the body of the page main.handlebars to the container homepage.handlebars
//   res.render('main', {layout : 'homepage'});
//   });

//Starts the server to begin listening
sequelize.sync({ force: false}).then (() => {
app.listen(PORT, () => 
    console.log(`Server listening`));
  });

// this worked with heroku for about a minute
  // app.listen(PORT, () => {
  //   console.log('Server listening on: http://localhost:' + PORT);
  // });

  console.log("it worked");