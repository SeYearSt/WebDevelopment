class Passenger extends BaseModel { // eslint-disable-line no-unused-vars, no-undef
    constructor () {
      super('passengers')
      this.fields = this.fields.concat(['name'])
    }
  
  renamePassenger(id, newName){
    var passenger = this.FindById(id)

    if (typeof passenger != 'undefined'){
        console.log(this.Select())
        this.removePassenger(id)
        passenger.name = newName
        this.Create(passenger)
    }        
}

 removePassenger(id){
     var collection = this.Select()
     var index = this.FindIndexById(id)
     collection.splice(index, 1)
     this.Commit(collection)
}

 findPassenger(collection, name){
    let foundPassenger = -1
    this.passengers.forEach(function(passenger){
        if (passenger.name == name){
            foundPassenger = passenger
        }
    })
    return foundPassenger
 }
}