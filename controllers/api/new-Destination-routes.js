const router = require('express').Router();
const {newDestination, user} = require('../../models')


router.post('/all', async (req, res) => {
    const {
      ,
      ,
      ,
      ,
      ,
      user_id,
    } = req.body;
    const appointments = await Appointment.create({
      Appointments_time: Appointments_time,
      Appointments_date: Appointments_date,
      Appointments_day: Appointments_day,
      Appointments_text: Appointments_text,
      Appointments_type: Appointments_type,
      user_id,
    })
      .then(appointments => res.json(appointments))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  newDestination