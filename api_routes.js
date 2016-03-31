var
  apiRouter = require('express').Router(),
  ctrl      = require('./controllers/restaurants_controller')

  apiRouter.route('/restaurants')
    .get(ctrl.restaurantController.getAll)
    .put(ctrl.restaurantController.update)
    .post(ctrl.restaurantController.create)
    .delete(ctrl.restaurantController.destroy)


module.exports  = apiRouter
