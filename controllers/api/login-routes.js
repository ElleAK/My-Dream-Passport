const router = require('express').Router();
//routes will use /api/SignUp/ {route}
router.get('/', async (req, res) => {
  res.render('login');
});

module.exports = router;