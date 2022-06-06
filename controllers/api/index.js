const router = require('express').Router();
const newDestinationRoutes = require('./new-Destination-routes');
const visitedRoutes = require('./visited-routes');



router.use('/add-new', newDestinationRoutes);
router.use('/visited', visitedRoutes);

module.exports = router;