const router = require('express').Router();
const sequelize = require('../config/connection').default;
const { dream, visited, users } = require('../models');

// 
router.get('/', (req, res) => {
  res.render('homepage', {
    layout: 'main'
  }
  )
});

router.get('/dream', (req, res) => {
  res.render('dream');
  // console.log(req.session);
  // dream.findAll({
  //   attributes: [
  //     'id',
  //     'dream_location',
  //     'dream_season',
  //     'dream_year',
  //   ],
  //   include: [
  //     {
  //       model: users,
  //       attributes: ['username']
  //     }
  //   ]
  // })
  //   .then(dbDreamData => {
  //     // pass a single post object into the dream.handlebars template
  //     res.render('dream', dbDreamData[0]);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });
 });

router.get('/visited', (req, res) => {
  res.render('visited');
  // console.log(req.session);
  // visited.findAll({
  //   attributes: [
  //     'id',
  //     'visited_location',
  //     'visited_departure',
  //     'visited_returnDate',
  //     'visited_return',
  //     'visited_transportation',
  //     'visited_description'
  //   ],
  //   include: [
  //     {
  //       model: users,
  //       attributes: ['username']
  //     }
  //   ]
  // })
  //   .then(dbVisitedData => {
  //     res.render('visited');
  //     // pass a single post object into the visited.handlebars template
  //     // res.render('visited', dbVisitedData[0]);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });
});

router.get('/add-new', (req, res) => {
  res.render('add-new');
});

// login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

//logout route
router.get('/logout', (req, res) => {
  res.redirect('/');
});

module.exports = router;