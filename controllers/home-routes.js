const router = require('express').Router();
const sequelize = require('../config/connection');
const { newDestination, visited } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {
      layout : 'main'
      }
    )
    });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  res.redirect('/');
});

module.exports = router;