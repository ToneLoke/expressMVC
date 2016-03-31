module.exports = {
  Restaurant: {
    find: [{
      name: 'Hollywood Buns',
      address: '7269 Hollyweezy Blvd, CA',
      rating: 4,
      type: 'Amerrica'

    }, {
      name: 'ThaiTanic',
      address: 'On a boat in the atlantic ocean',
      rating: 0.5,
      type: 'Ocean'
    }],

    new: function(r) {
      return { name: r.name, address: r.address, rating: r.rating, type: r.type}
    }
  }
}
