const train = require('../models/train')

module.exports = function(data){
    return new Promise((resolve, reject) => {
        const trainNew = new train({
          name: data.name,
          route: data.route,
          volume: data.volume
        })
        trainNew.save(function(err, trainCreated){
          if (err){
            reject(err);
          }
          else{
            resolve(trainCreated);
          }
        });
      })
    }