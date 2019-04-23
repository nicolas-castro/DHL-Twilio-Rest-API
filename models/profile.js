const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const profileSchema = new Schema({
  iata: { type: String, },
  adress: { type: String,  },
  imageUrl: { type: String, },
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
}, 
{
  timestamps: true
});

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;