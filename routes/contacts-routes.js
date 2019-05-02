const express = require('express');
const router  = express.Router();

// include the model:
const Contacts = require('../models/contacts');
const User = require('../models/user-model');

router.get('/contacts', (req, res, next) => {
    Contacts.find()
    .then(contactsFromDB => {
        res.status(200).json(contactsFromDB)
    })
    .catch(err => next(err))
})

router.post('/contacts/create', (req, res, next) => {
    // console.log('body: ', req.body); ==> here we can see that all
    // the fields have the same names as the ones in the model so we can simply pass
    // req.body to the .create() method
    const {firstName, lastName, cellNumber, imageUrl} = req.body

    Contacts.create({
        firstName,
        lastName,
        cellNumber,
        imageUrl,
        owner: req.user._id
    })
    .then( NewContact => {
        // console.log('Added New Contct: ', NewContact);
        res.status(200).json(NewContact);
    })
    .catch( err => next(err) )
})

module.exports = router;
