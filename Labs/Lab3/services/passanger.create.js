const Passanger = require('./../models/passanger')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  const passanger = new Passanger({
    name: data.name,
    surname: data.surname
  })

  return new Promise((resolve, reject) => {
    passanger.save(function (err, createdPassanger) {
      if (err) {
        reject(err)
      } else {
        resolve(createdPassanger)
      }
    })
  })
}
