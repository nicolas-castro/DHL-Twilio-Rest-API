const express = require('express');
const router  = express.Router();


router.post('/events', (req, res) => {
  let to = req.body.to;
  let fromNumber = req.body.from;
  let callStatus = req.body.CallStatus;
  let callSid = req.body.callSid;

console.log(to, fromNumber, callStatus, callSid);
  res.send('Event received');
});


module.exports = router;