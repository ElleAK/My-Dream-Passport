const router = require('express').Router();
const newDestinationRoutes = require('./new-Destination-routes');
const visitedRoutes = require('./visited-routes');
const login = require('./login-routes')

router.use('/login', login);
router.use('/add-new', newDestinationRoutes);
router.use('/visited', visitedRoutes);

module.exports = router;