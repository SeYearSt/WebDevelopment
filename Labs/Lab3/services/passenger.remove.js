const passenger = require('./../models/passenger')


module.exports = function (idR) {
  console.log(idR)
  passenger.deleteOne({_id: idR}, function(err){
    if (err){
      console.log(err);
    }
  });
}
