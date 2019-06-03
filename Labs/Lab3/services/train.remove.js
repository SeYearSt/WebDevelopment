const train = require('../models/train')

module.exports = function(id){
    return new Promise((resolve, reject) => {
        train.deleteOne({_id: id}, function(err){
            if (err){
                reject(err)
            }else{
                resolve();
            }
        })
    });
}