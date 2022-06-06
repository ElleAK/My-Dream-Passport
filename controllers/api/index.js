const router = require('express').Router();
const newDestinationRoutes = require('./new-Destination-routes');
const visitedRoutes = require('./visited-routes');

router.use('/visited', newDestinationRoutes);
router.use('/newDestination', visitedRoutes);


module.exports = router;