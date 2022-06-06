const router = require('express').Router();
const sequelize = require('../config/connection');
const { newDestination, visited } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {
      id: 1,
      post_url: 'https://handlebarsjs.com/guide/',
      title: 'Handlebars Docs',
      created_at: new Date(),
      user: {
        username: 'test_user'
      }
    });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  res.redirect('/');
});

module.exports = router;