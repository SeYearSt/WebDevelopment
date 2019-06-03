const passenger = require('./../models/passenger')

/**
 * @param {Object} data
 */
module.exports = function (id) {
  return new Promise((resolve, reject) => {
    passenger.findById(id, function (err, passenger) {
      if (err) {
        reject(err)
      } else {
        resolve(passenger)
      }
    })
  })
}
