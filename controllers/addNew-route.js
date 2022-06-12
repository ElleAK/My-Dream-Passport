const router = require('express').Router();
const sequelize = require('../config/connection');
const { newDestination, visited, users } = require('../models');


router.get('/', (req, res) => {
  console.log(req.session);
  newDestination.findAll({
    attributes: [
      'id',
      'dream_location',
      'dream_season',
      'dream_year'
    ],
    include:[
      {
        model: users,
        attributes: ['username']
      }
    ]
  })
    .then(dbnewDestData => {
      // pass a single post object into the dream.handlebars template
      res.render('dream', dbnewDestData[0]);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
  console.log(req.session);
  visited.findAll({
    attributes: [
      'id',
      'visited_location',
      'visited_departure',
      'visited_returnDate',
      'visited_return',
      'visited_transportation',
      'visited_description'
    ],
    include: [
      {
        model: users,
        attributes: ['username']
      }
    ]
  })
    .then(dbVisitedData => {
      // pass a single post object into the visited.handlebars template
      res.render('visited', dbVisitedData[0]);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;