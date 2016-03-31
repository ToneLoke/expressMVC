;(function () {
  'use strict'
  angular.module('myControllers', [])
    .controller('clientRestController', clientRestController)

  clientRestController.$inject = ['restaurantsFactory']

  function clientRestController (restaurantsFactory) {
    var restCtrl = this

    restaurantsFactory.getAll()
      .then(function (response) {
        console.log('Array of restaurants from api', response.data)
        restCtrl.restaurants = response.data

      })
  }
}())
