const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const smsToSchema = new Schema({
  to: { type: String, },
  from: { type: String,  },
  body: { type: String, },
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
}, 
{
  timestamps: true
});

const SMSTo = mongoose.model('SMSTo', smsToSchema);
module.exports = SMSTo;