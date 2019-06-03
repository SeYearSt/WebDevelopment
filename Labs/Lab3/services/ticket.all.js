const ticket = require('../models/ticket')

module.exports = function(){
    return new Promise((resolve, reject) => {
        ticket.find({})
          .exec(function (err, tickets) {
            if (err) {
              reject(err)
            } else {
              resolve(tickets)
            }
          })
      })
    }