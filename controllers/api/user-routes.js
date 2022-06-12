const router = require('express').Router();
const { users, dream, visited } = require('../../models');


router.get('/:id', (req, res) => {
    users.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      },
      include: [
        {
          model: dream,
          attributes: ['id', 'dream_location', 'dream_season', 'dream_year']
        },
        {
          model: visited,
          attributes: ['id', 'visited_location', 'visited_departure', 'visited_returnDate', 'visited_return', 'visited_transportation', 'visited_description'],
        },
      ]
    })
      .then(dbUsersData => {
        if (!dbUsersData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUsersData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// create new users
router.post('/', async (req, res) => {
    users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
        .then(dbUsersData => {
          req.session.save(() => {
            req.session.user_id = dbUsersData.id;
            req.session.username = dbUsersData.username;
            req.session.loggedIn = true;
      
            res.json(dbUsersData);
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

// Login
router.post('/login', (req, res) => {
    users.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUsersData => {
if (!dbUsersData) {
    res.status(400)
      .json({ message: 'Please enter the correct email address!' });
    return;
  }
  const correctPassword = dbUsersData.checkPassword(req.body.password);
  if (!correctPassword) {
    res
      .status(400)
      .json({ message: 'Please enter the correct password!' });
    return;
  }
// set up login session
req.session.save(() => {
    req.session.user_id = dbUsersData.id;
    req.session.username = dbUsersData.username;
    req.session.loggedIn = true;

    res
      .status(200)
      .json({ user: dbUsersData, message: 'You are now logged in!' });
  });
});
});

  // Logout
router.post('/logout', (req, res) => {
    // When the user logs out, destroy the session
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  
//get users
router.get('/', (req, res) => {
    users.findAll({
        attributes: {exclude: ['password'] }
    })
    .then(dbUsersData => res.json(dbUsersData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})



  module.exports = router;