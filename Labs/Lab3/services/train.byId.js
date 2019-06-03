const trainModel = require('../models/train')

/**
 * @param {Object} data
 */
module.exports = function (id) {
  return new Promise((resolve, reject) => {
    trainModel.findById(id, function (err, train) {
      if (err) {
        reject(err)
      } else {
        resolve(train)
      }
    })
  })
}
