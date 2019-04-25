const express = require('express');
const router  = express.Router();


router.post('/https://api.twilio.com/2010-04-01/Accounts/{acountSid}/Calls.json', (req, res, next) => {
  console.log('here = == = = = = = =');
  const acountSid = process.env.accountSid;
  const authToken = process.env.authToken;
  const client = require('twilio')(acountSid, authToken);

  client.calls
        .create({
          url: 'http://demo.twilio.com/docs/voice.xml',
          to: process.env.MY_PHONE_NUMBER,
          from: '+19542660506'
        })
        .then(call => console.log(call.sid));
})

module.exports = router;

// https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Calls.json