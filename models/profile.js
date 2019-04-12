const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const profileSchema = new Schema({
  campus: { type: String, required: true },
  coarse: { type: String, required: true },
  imageUrl: { type: String, required: true },
}, 
{
  timestamps: true
});

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;