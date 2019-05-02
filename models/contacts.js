const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const contactsSchema = new Schema({
  firstName: { type: String, },
  lastName: { type: String,  },
  cellNumber: { type: String,  },
  imageUrl: { type: String, },
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
}, 
{
  timestamps: true
});

const Contacts = mongoose.model('Contacts', contactsSchema);
module.exports = Contacts;