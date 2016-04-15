;
(function() {
  'use strict'
  angular.module('myControllers', ['ui.router'])
    .controller('clientRestController', clientRestController)

  clientRestController.$inject = ['restaurantsFactory', '$location', '$stateParams']

  function clientRestController(restaurantsFactory, $location, $stateParams) {
    var restCtrl = this
    restCtrl.edit = false
    restCtrl.newRestaurant = {}

    restaurantsFactory.getAll()
      .then(function(response) {
        console.log('Array of restaurants from api', response.data)
        restCtrl.restaurants = response.data

      })

    restCtrl.addRestaurant = function(restaurant) {
      restaurantsFactory.create(restaurant)
        .then(function(res) {
          console.log('Response from server: ', res)
          $location.path('/')
        })

    }
    restCtrl.delete = function(id) {
      restaurantsFactory.destroy(id)
        .then(function(res) {
          console.log('Response from server: ', res)
          $location.path('/')
        })
    }
    restCtrl.editMe = function () {
      restCtrl.edit = true
    }
    restCtrl.editRestaurant = function(rest) {
      restaurantsFactory.update(rest._id,rest)
        .then(function(res) {
          console.log('Response from server: ', res)
          $location.path('/')
        })
    }

    if ($stateParams.id) {
      restaurantsFactory.getSingle($stateParams.id)
        .then(function(res) {
          console.log("grabbed single record", res.data)
          restCtrl.currentRest = res.data
        })

    }

  }


}())
