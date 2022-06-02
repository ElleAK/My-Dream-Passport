const router = require('express').Router();
const {newDestination, user} = require('../../models')


router.post('/all', async (req, res) => {
    const {
      id,
      location,
      dateOfDeparture,
      returnDate,
      wouldTravelAgain,
      transportation,
      tripComment,
      user_id,
    } = req.body;
    const Destinations = await newDestination.create({
        id: id,
        location: location,
        dateOfDeparture: dateOfDeparture,
        returnDate: returnDate,
        wouldTravelAgain: wouldTravelAgain,
        transportation: transportation,
        tripComment: tripComment,
        user_id
    })
      .then(Destinations => res.json(Destinations))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
