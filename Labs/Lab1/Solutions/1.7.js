'use strict'

class Passenger{
    constructor(name){
        this.name = name
    }
}

class Ticket{
    constructor(passenger, train){
        this.passenger = passenger
        this.train = train
    }
}

class Train{
    constructor(name){
        this.name = name
    }
}

class SaledTicket{
    constructor(passenger, train){
        this.passenger = passenger
        this.train = train
        this.saled = true
    }
}

class Manager{

    constructor(trains, passengers, tickets, saledTickets){
        this.trains = trains
        this.passengers = passengers
        this.tickets = tickets
        this.saledTickets = saledTickets
    }

    addPassenger(passenger){
        this.passengers.push(passenger)
    }

    renamePassenger(index, newName){
        if (index < this.passengers.length && index >= 0){
            this.passengers[index].name = newName
        }
        else{
            console.log("passenger's index cannot be less than number of passengers and must be greate or equal to 0")
        }
    }

    removePassenger(index){
        if (index < this.passengers.length && index >= 0){
            this.passengers.splice(index, 1)
        }
        else{
            console.log("Passenger's index cannot be less than number of passengers and must be greate or equal to 0")
        }
    }

    findPassenger(name){
        let foundPassenger = -1
        this.passengers.forEach(function(passenger){
            if (passenger.name == name){
                foundPassenger = passenger
            }
        })
        return foundPassenger
    }

    addTrain(){
    }

    renameTrain(index, neName){

    }

    removeTrain(index){

    }

    findTrain(name){

    }

    buyTicket(passenger, trainName){

    }

    changeTicket(index, newTrain){

    }
    
    saleTicket(ticket){

    }

    findCommonTrain(){

    }

    findNotCommonTrain(){

    }
}

let passengers = [new Passenger('a'), new Passenger('b'), new Passenger('c')]
let trains = [new Train('a'), new Train('b'), new Train('c'), new Train('d')]
let tickets = [new Ticket(passengers[0], trains[0]), new Ticket(passengers[1], trains[1]), new Ticket(passengers[2], trains[2])]
let manager = new Manager(trains, passengers, tickets, [])

console.log(manager)
manager.addPassenger(new Passenger('d'))
manager.addTrain(new Train('d'))
manager.renamePassenger(0, '1')
console.log(manager)
manager.removePassenger(0)
console.log(manager)
console.log(manager.findPassenger('b'))
console.log(manager.addTrain())


