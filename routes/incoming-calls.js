const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const router  = express.Router();



// Create a route that will handle Twilio webhook requests, sent as an
// HTTP POST to /voice in our application
router.post('/voice', (req, res) => {
  // Use the Twilio Node.js SDK to build an XML response
  const twiml = new VoiceResponse();
  twiml.say({ voice: 'alice' }, 'Hello Nicolas Twilio is running on your app.');

  // Render the response as XML in reply to the webhook request
  res.type('text/xml');
  res.send(twiml.toString());
});


module.exports = router;