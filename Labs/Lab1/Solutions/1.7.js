'use strict'

class Passenger{
    constructor(name){
        this.name = name
    }
}

class Ticket{
    constructor(train){
        this.train = train
    }
}

class Train{
    constructor(name){
        this.name = name
    }
}

class SaledTicket extends Ticket{
    constructor(passenger, train){
        super(train)
        this.passenger = passenger
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

    addTrain(train){
        this.trains.push(train)
    }

    renameTrain(index, newName){
        if (index < this.trains.length && index >= 0){
            this.trains[index].name = newName
        }
        else{
            console.log("Train's index cannot be less than number of Trains and must be greate or equal to 0")
        }
    }

    removeTrain(index){
        if (index < this.trains.length && index >= 0){
            this.trains.splice(index, 1)
        }
        else{
            console.log("Train's index cannot be less than number of Trains and must be greate or equal to 0")
        }
    }

    findTrain(name){
        let foundTrain = -1
        this.trains.forEach(function(train){
            if (train.name == name){
                foundTrain = train
            }
        })
        return foundTrain
    }

    buyTicket(passenger, ticket){
        let foundTicket = false
        for(var i=0; i<this.tickets.length; ++i){
            if (ticket == this.tickets[i]){
                foundTicket = true
                break
            }
        }
        if (!foundTicket){
            return -1
        }
        this.tickets.splice([i], 1)
        this.saledTickets.push(new SaledTicket(passenger ,ticket.train))
    }

    changeTicket(index, newTrain){

            if (index < this.tickets.length && index >= 0){
                this.saledTickets[index].train = newTrain
            }
            else{
                console.log("Ticket's index cannot be less than number of Ticket and must be greate or equal to 0")
            }
    }
    
    saleTicket(index){
        if (index < this.tickets.length && index >= 0){
            this.saledTickets.splice(index, 1)
        }
        else{
            console.log("Ticket's index cannot be less than number of Ticket and must be greate or equal to 0")
        }
    }

    findCommonTrain(){
        let trainsCount = {}
        
        this.trains.forEach(function(train){
            trainsCount[train.name] = 0
        })

        this.saledTickets.forEach(function(ticket){
            trainsCount[ticket.train.name] += 1
        })

        let maxKey = Object.keys(trainsCount)[0]
        let maxCount = trainsCount[maxKey]

        console.log(trainsCount)
        console.log(maxKey)
        console.log(maxCount)


        for (var key in trainsCount) {
            // check if the property/key is defined in the object itself, not in parent
            if (trainsCount.hasOwnProperty(key)) { 
                if (trainsCount[key] > maxCount){
                    maxCount = trainsCount
                    maxKey = key
                }
                //console.log(trainsCount[key])  
            }
        }
        return maxKey
    }

    findNotCommonTrain(){

    }
}

let passengers = [new Passenger('a'), new Passenger('b'), new Passenger('c'), new Passenger('e')]
let trains = [new Train('a'), new Train('b'), new Train('c'), new Train('d')]
let tickets = [new Ticket(trains[0]), new Ticket(trains[0]), new Ticket(trains[0]), new Ticket(trains[0]), 
new Ticket(trains[1]), new Ticket(trains[1]), new Ticket(trains[1]),
 new Ticket(trains[2]), new Ticket(trains[2]), new Ticket(trains[2])]
let manager = new Manager(trains, passengers, tickets, [])

console.log(manager)
manager.addPassenger(new Passenger('d'))
manager.renamePassenger(0, '1')
console.log(manager)
manager.removePassenger(1)
console.log(manager)
console.log(manager.findPassenger('b'))
manager.addTrain(new Train('d'))
manager.renameTrain(3, '1')
console.log(manager)
console.log(manager.findTrain('1'))
console.log('--------------Buy ticket--------')
manager.buyTicket(passengers[0], tickets[0])
console.log(manager.saledTickets)
console.log('--------------Change ticket--------')
manager.changeTicket(0, trains[1])
console.log(manager.saledTickets)
console.log('--------------Sale ticket--------')
manager.saleTicket(0)
console.log(manager)
console.log('------------Buy few tickets-------')
manager.buyTicket(passengers[0], tickets[0])
manager.buyTicket(passengers[1], tickets[3])
manager.buyTicket(passengers[2], tickets[4])
manager.buyTicket(passengers[3], tickets[5])
manager.buyTicket(passengers[1], tickets[6])

// manager.buyTicket(passengers[2], tickets[2])
console.log(manager.saledTickets)
console.log('----------Most common---------')
console.log(manager.findCommonTrain())

// manager.saleTicket(passengers[1])


