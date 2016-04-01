var db = require('../models/restaurants'),
  restaurants = db.Restaurant.find

module.exports = {
  restaurantController: {
    getAll: function(req, res) {
      res.json(restaurants)
    },
    getSingle: function(req, res) {
      var id = req.params.id
      var restaurant = restaurants.filter(function(r) {
        return r._id == id
      })
      console.log(restaurant)
      res.json(restaurant)
    },
    update: function(req, res) {
      var id = req.params.id
      var restaurant = restaurants.filter(function(r) {
        return r._id == id
      })
      restaurant = req.body
      res.json(restaurant)
    },
    create: function(req, res) {
      console.log('coming from postman:', req.body)
      var restaurant = db.Restaurant.new(req.body)
      restaurants.push(restaurant)
      res.json(restaurants)
    },
    destroy: function(req, res) {
      var id = req.params.id
      var restaurant = restaurants.filter(function(r) {
        return r._id == id
      })
      console.log(restaurant)

      restaurants.splice(restaurants.indexOf(restaurant[0]),1)
      res.json(restaurants)
    }
  }
}
