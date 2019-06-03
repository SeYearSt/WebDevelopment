const passenger = require('./../models/passenger')

/**
 * @param {Object} data
 */
module.exports = function () {
  return new Promise((resolve, reject) => {
    passenger.find({})
      .exec(function (err, passengers) {
        if (err) {
            // console.log(passengers)
          reject(err)
        } else {
        // console.log(passengers)
          resolve(passengers)
        }
      })
  })
}
