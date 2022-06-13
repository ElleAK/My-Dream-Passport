
const router = require('express').Router();
const dreamRoutes = require('./dream-routes');
const visitedRoutes = require('./visited-routes');
const homeRoutes = require('../home-routes');
const userRoutes = require('./user-routes');



router.use('/dream', visitedRoutes);
router.use('/visited', dreamRoutes);
router.use('/homepage', homeRoutes);
router.use('/users', userRoutes);

module.exports = router;