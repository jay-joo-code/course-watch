const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
  email: String,
  uid: {
    type: String,
    required: true
  },
  watching: {
    type: [{
      type: Schema.Types.ObjectId, 
      ref: 'Class'
    }],
    default: []
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('User', userSchema);
