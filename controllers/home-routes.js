const router = require('express').Router();
const sequelize = require('../config/connection');
const {  } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {
      layout : 'main'
      }
    )
    });


  router.get('/login', (req, res) => {
    res.render('login');
  });

module.exports = router;