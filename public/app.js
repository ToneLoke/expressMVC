;(function () {
  'use strict'
  angular.module('myRestaurantApp', ['myControllers', 'ui.router','myFactory'])
    .config(routerConfig)

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']

  function routerConfig ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'clientRestController as restCtrl'
      })
      .state('form', {
        url: '/addRestaurant',
        templateUrl: 'partials/form.html',
        controller: 'clientRestController as restCtrl'
      })
      $urlRouterProvider.otherwise('/')
  }
}())
