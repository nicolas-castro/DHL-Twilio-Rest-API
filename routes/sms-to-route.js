const express = require('express');
const router  = express.Router();
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;

const client = require('twilio')(accountSid, authToken);

router.post('/sms/out', (req, res, next) => {
  const { to, from, body } = req.body;

  client.messages
  .create({
     to,
     from: process.env.TWILIO_NUMBER,
     body,
   })
   .then( message => {
    console.log(message.body);
    console.log(message.to);
    res.status(200).json(message);
    })
  .catch( err => next(err) )
  })


module.exports = router;