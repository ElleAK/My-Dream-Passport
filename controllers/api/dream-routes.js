
const router = require('express').Router();
const sequelize = require('../../config/connection').default;
const { dream } = require('../../models');


//routes will use /api/SignUp/ {route}
// router.get('/', (req, res) => {
//     //get route code here
//   res.render('signup');
// });

// router.get('/dream', (req, res) => {
//   dream.findAll({
//         attributes: [
//           'id',
//           'dream_location',
//           'dream_season',
//           'dream_year'
//         ],
//         include:[
//           {
//             model: users,
//             attributes: ['username']
//           }
//         ]
//       })
//         .then(dbDreamData => {
//       //    pass a single post object into the dream.handlebars template
//           res.render('dream', dbDreamData[0]);
//         })
//         .catch(err => {
//           console.log(err);
//           res.status(500).json(err);
//         });
//     });

router.post('/', (req, res) => {
    console.log(req.body)
  dream.create({
    id:        req.body.id,
    location:  req.body.location,
    season:    req.body.season,
    // year:      req.body.year,
  })
    .catch(err => {
        console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  dream.destroy({
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