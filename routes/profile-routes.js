const express = require('express');
const router  = express.Router();

// include the model:
const Profile = require('../models/profile');

router.get('/profile', (req, res, next) => {
    Profile.find()
    .then(profileFromDB => {
        res.status(200).json(profileFromDB)
    })
    .catch(err => next(err))
})

router.post('/profile/create', (req, res, next) => {
    // console.log('body: ', req.body); ==> here we can see that all
    // the fields have the same names as the ones in the model so we can simply pass
    // req.body to the .create() method
    
    Profile.create(req.body)
    .then( NewProfile => {
        // console.log('Added User Profile: ', New Profile);
        res.status(200).json(NewProfile);
    })
    .catch( err => next(err) )
})

module.exports = router;
