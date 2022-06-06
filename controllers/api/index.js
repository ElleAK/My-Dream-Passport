const router = require('express').Router();
const newDestinationRoutes = require('./new-Destination-routes');
const visitedRoutes = require('./visited-routes');
const homepage = require('./homepage-rout');



router.use('/visited', newDestinationRoutes);
router.use('/newDestination', visitedRoutes);
router.use('/homepage', homepage)

module.exports = router;