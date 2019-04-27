const express = require('express');
const router  = express.Router();
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const SMSTo  = require('../models/sms-out-model');


const client = require('twilio')(accountSid, authToken);

router.post('/sms/out', (req, res, next) => {
  const { to, from, body } = req.body;

  client.messages
  .create({
     to,
     from,
     body,
   })
   .then( (message, NewSMSOut) => {
    console.log(message.sid);
    res.status(200).json(NewSMSOut);
    })
  .catch( err => next(err) )
  })


module.exports = router;