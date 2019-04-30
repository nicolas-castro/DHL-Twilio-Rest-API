const express = require('express');
const router  = express.Router();
const CallerID = process.env.TWILIO_NUMBER
const VoiceResponse = require('twilio').twiml.VoiceResponse;


router.post('/voiceout', (req, res, next) => {
  const accountSid = process.env.accountSid;
  const authToken = process.env.authToken;
  const client = require('twilio')(accountSid, authToken);

  client.calls
        .create({
          url: `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls.json`,
          callerId: CallerID,          
          to: process.env.MY_PHONE_NUMBER,
          from: process.env.TWILIO_NUMBER,
          statusCallback: 'https://767b3040.ngrok.io/api/events',
          statusCallbackMethod: 'POST',
          statusCallbackEvent: ['initiated', 'ringing', 'answered', 'completed'],
        })
        .then( call => {
          console.log(call.body);
          res.status(200).json(call);
          })
        .catch( err => next(err) )

})

module.exports = router;

// https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Calls.json