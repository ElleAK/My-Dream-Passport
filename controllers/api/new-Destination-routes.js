
const router = require('express').Router();
// const sequelize = require('../../config/connection');
const { newDestination } = require('../../models');

//routes will use /api/SignUp/ {route}
router.get('/', async (req, res) => {
    //get route code here
  res.render('signup');
});
router.post('/', (req, res) => {
    console.log(req.body)
  newDestination.create({
    id:        req.body.id,
    location:  req.body.location,
    season:    req.body.season,
    year:      req.body.year,
  })
    .catch(err => {
        console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  newDestination.destroy({
    where: {
      id: req.params.id
    }
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;