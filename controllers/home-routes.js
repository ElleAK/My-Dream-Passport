const router = require('express').Router();

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

module.exports = router;