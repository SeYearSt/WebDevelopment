const passenger = require('./../models/passenger')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  const passengerNew = new passenger({
    name: data.name,
    surname: data.surname
  })

  return new Promise((resolve, reject) => {
    passengerNew.save(function (err, createdpassenger) {
      if (err) {
        reject(err)
      } else {
        resolve(createdpassenger)
      }
    })
  })
}
