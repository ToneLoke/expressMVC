module.exports = {
  Restaurant: {
    find: [{
      _id: 0001,
      name: 'Hollywood Buns',
      address: '7269 Hollyweezy Blvd, CA',
      rating: 4,
      type: 'Amerrica'

    }, {
      _id: 0002,
      name: 'ThaiTanic',
      address: 'On a boat in the atlantic ocean',
      rating: 0.5,
      type: 'Ocean'
    }],

    new: function(r) {
      return { name: r.name, address: r.address, rating: r.rating, type: r.type, _id: Math.floor(1000 + Math.random() * 9000)}
    }
  }
}
