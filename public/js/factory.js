;(function () {
  'use strict'
  angular.module('myFactory', [])
    .factory('restaurantsFactory', restaurantsFactory)

  restaurantsFactory.$inject = ['$http']

  function restaurantsFactory ($http) {
    var restaurantData = {},
        apiUrl = 'http://localhost:8080/api/v1/restaurants'

    restaurantData.getAll = function () {
      console.log('getting all restaurants')
      return $http.get(apiUrl)
    }

    restaurantData.create = function (restaurant) {
      console.log('creating restaurant')
      return $http.post(apiUrl, restaurant)
    }

    restaurantData.getSingle = function(id){
      console.log('getting single restaurant data:',id)
      return $http.get(apiUrl + '/' + id)
    }
    restaurantData.destroy = function(id){
      console.log('getting single restaurant data:',id)
      return $http.delete(apiUrl + '/' + id)
    }
    restaurantData.update = function(id, rest){
      console.log('getting single restaurant data:',id)
      return $http.put(apiUrl + '/' + id, rest)
    }
    return restaurantData
  }
}())
