// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = process.env.accountSid,
const authToken = process.env.authToken,
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: process.env.MY_PHONE_NUMBER,
         from: '+19542660506'
       })
      .then(call => console.log(call.sid));
