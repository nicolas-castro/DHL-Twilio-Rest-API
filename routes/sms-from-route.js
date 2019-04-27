const express = require('express');
const router  = express.Router();
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);


  router.post('/sms/in', (req, res) => {
    console.log(req.body.Body)
    const msgContent = req.body;

    res.status(200).json(msgContent.Body)
    })
    

  router.get('/sms/in', (req, res, next) => {

    client.messages
    .list({
      to: '+19542660506',
      limit: 20,
    })
    .then(messages => {
      messages.forEach(m => console.log(m.body))
      res.status(200).json(messages.forEach(m => m.body));
    })
    .catch( err => next(err) )
    })

module.exports = router;