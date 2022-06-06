
const router = require('express').Router();
const { visited } = require('../../models');
//routes will use /api/SignUp/ {route}
router.get('/', async (req, res) => {
    //get route code here
  res.render('signup');
});
router.post('/', (req, res) => {
    console.log(req.body)
    visited.create({
      id:                 req.body.id,
    location:           req.body.location,
    dateOfDeparture:    req.body.dateOfDeparture,
    returnDate:         req.body.returnDate,
    wouldTravelAgain:   req.body.wouldTravelAgain,
    transportation:     req.body.transportation,
    tripComment:        req.body.tripComment,
  })
    .catch(err => {
        console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    visited.destroy({
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