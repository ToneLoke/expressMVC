;(function () {
  'use strict'
  angular.module('myFactory', [])
    .factory('restaurantsFactory', restaurantsFactory)

  restaurantsFactory.$inject = ['$http']

  function restaurantsFactory ($http) {
    var restaurantData = {
      getAll : function () {
        console.log('getting all restaurants')
        return $http.get(apiUrl)
      }

    },
        apiUrl = 'http://localhost:8080/api/v1/restaurants'

    // restaurantData.getAll = function () {
    //   console.log('getting all restaurants')
    //   return $http.get(apiUrl)
    // }

    return restaurantData
  }
}())
