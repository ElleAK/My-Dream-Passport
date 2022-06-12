const router = require('express').Router();
const sequelize = require('../config/connection');
const { newDestination, visited, users } = require('../models');


// 
router.get('/', (req, res) => {
  res.render('homepage', {
    layout: 'main'
  }
  )
});

// router.get('/', (req, res) => {
  //console.log(req.session);
//   newDestination.findAll({
//     attributes: [
//       'id',
//       'dream_location',
//       'dream_season',
//       'dream_year'
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       // pass a single post object into the homepage template
//       res.render('homepage', dbPostData[0]);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


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