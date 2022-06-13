
const router = require('express').Router();
const dreamRoutes = require('./dream-routes');
const visitedRoutes = require('./visited-routes');
//const homepage = require('./homepage-rout');
const homeRoutes = require('../home-routes');
const userRoutes = require('./user-routes');


router.use('/users', userRoutes);
router.use('/visited', visitedRoutes);
router.use('/dream', dreamRoutes);
router.use('/homepage', homeRoutes);

module.exports = router;