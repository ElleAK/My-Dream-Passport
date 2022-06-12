
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
      id:                           req.session.id,
      visited_location:             req.body.visited_location,
      visited_departure:            req.body.visited_departure,
      visited_returnDate:           req.body.visited_returnDate,
      visited_return:               req.body.visited_return,
      visited_transportation:       req.body.visited_transportation,
      visited_description:          req.body.visited_description,
  })
    .catch(err => {
        console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
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