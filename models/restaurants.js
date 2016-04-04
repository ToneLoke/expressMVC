var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  restaurantSchema = new Schema({
    name: {type: String, required: true},
    address: String,
    rating: {type: Number,  min: 1, max: 5},
    type: String,
    locations: [],
    createdAt: {type: Date, Default: Date.now}
  })

module.exports = {
  Restaurant : mongoose.model('Restaurant', restaurantSchema)
}
