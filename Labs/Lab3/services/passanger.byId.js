const Passanger = require('./../models/passanger')

/**
 * @param {Object} data
 */
module.exports = function (id) {
  return new Promise((resolve, reject) => {
    Passanger.findById(id, function (err, passanger) {
      if (err) {
        reject(err)
      } else {
        resolve(passanger)
      }
    })
  })
}
