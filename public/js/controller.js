;(function () {
  'use strict'
  angular.module('myControllers', [])
    .controller('clientRestController', clientRestController)

  clientRestController.$inject = ['restaurantsFactory']

  function clientRestController (restaurantsFactory) {
    var restCtrl = this
    restCtrl.newRestaurant = {}

    restaurantsFactory.getAll()
      .then(function (response) {
        console.log('Array of restaurants from api', response.data)
        restCtrl.restaurants = response.data

      })

    restCtrl.addRestaurant = function (restaurant){
      restaurantsFactory.create(restaurant)
        .then(function(res){
          console.log('Response from server: ', res)
        })

    }


  }


}())
