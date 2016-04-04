var db = require('../models/restaurants')

module.exports = {
  restaurantController: {
    getAll: function (req, res) {
      db.Restaurant.find({}, function (err, restaurants) {
        if (err) {
          res.json(err)
        } else {
          res.json(restaurants)
        }
      })
    },
    getSingle: function (req, res) {
      var id = req.params.id

      db.Restaurant.findOne({_id: id}, function (err, rest) {
        if (err) {
          res.json(err)
        } else {
          console.log('Getting a single Restaurant')
          res.json(rest)
        }
      })
    },
    update: function (req, res) {
      var id = req.params.id
      db.Restaurant.findOne({_id: id}, function (err, rest) {
        if (req.body.name) { rest.name = req.body.name}
        if (req.body.rating) { rest.rating = req.body.rating}
        rest.save(function (err, r) {
          res.json(r)
        })
      })
    },
    create: function (req, res) {
      console.log('coming from postman:', req.body)
      var restaurant = new db.Restaurant(req.body)
      restaurant.save(function (err, rest) {
        if (err) res.json(err)
        console.log('Restaurant Created!!')
        console.log('details: %s', restaurant)
        res.json(rest)
      })
    },
    destroy: function (req, res) {
      var id = req.params.id
      db.Restaurant.remove({_id: id}, function (err) {
        if (err) res.json(err)
        res.json({message: 'Deleted User!'})
      })
    }
  }
}
