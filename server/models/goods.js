var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtSchema = new Schema({
  "product_id": Number,
  "product_name": String,
  "price": String,
  "banner": String
});

module.exports = mongoose.model('Good', produtSchema);
