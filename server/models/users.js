
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  "id":String,
  "password":String
});

module.exports = mongoose.model('user',userSchema);



