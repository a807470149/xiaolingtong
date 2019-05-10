var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopCarSchema = new Schema({
  "userid": String,
  "product_id": Number,
  "product_name": String,
  "number": Number,
  "price": String,
  "banner": String
});

module.exports = mongoose.model('cart', shopCarSchema);