const router = require('express').Router();
const apiRoutes = require('./api');

// require home routes
const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

router.use('/', (req, res) => {
  res.render('homepage');
});



module.exports = router;