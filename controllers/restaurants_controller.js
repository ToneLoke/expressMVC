var db = require('../models/restaurants'),
  restaurants = db.Restaurant.find

module.exports = {
  restaurantController: {
    getAll: function (req, res) {
      res.json(restaurants)
    },
    update: function (req, res) {
      res.json({message: 'Updated Restaurant'})
    },
    create: function (req, res) {
      console.log('coming from postman:', req.body)
      var restaurant = db.Restaurant.new(req.body)
      restaurants.push(restaurant)
      res.json(restaurants)
    },
    destroy: function (req, res) {
      res.json({message: 'Restaurant deleted!'})
    }
  }
}
