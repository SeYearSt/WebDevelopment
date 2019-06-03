const Passanger = require('./../models/passanger')

/**
 * @param {Object} data
 */
module.exports = function () {
  return new Promise((resolve, reject) => {
    Passanger.find({})
      .exec(function (err, passangers) {
        if (err) {
            // console.log(passangers)
          reject(err)
        } else {
        // console.log(passangers)
          resolve(passangers)
        }
      })
  })
}
