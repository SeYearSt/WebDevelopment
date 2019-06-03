const train = require('../models/train')

module.exports = function(){
    return new Promise((resolve, reject) => {
        train.find({})
          .exec(function (err, trains) {
            if (err) {
              reject(err)
            } else {
              resolve(trains)
            }
          })
      })
    }