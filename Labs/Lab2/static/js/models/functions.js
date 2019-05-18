Passenger = require("./passenger");
Shop = require("./shop.js");


// addTrain(train){
//     this.trains.push(train)
// }

// renameTrain(index, newName){
//     if (index < this.trains.length && index >= 0){
//         this.trains[index].name = newName
//     }
//     else{
//         console.log("Train's index cannot be less than number of Trains and must be greate or equal to 0")
//     }
// }

// removeTrain(index){
//     if (index < this.trains.length && index >= 0){
//         this.trains.splice(index, 1)
//     }
//     else{
//         console.log("Train's index cannot be less than number of Trains and must be greate or equal to 0")
//     }
// }

// findTrain(name){
//     let foundTrain = -1
//     this.trains.forEach(function(train){
//         if (train.name == name){
//             foundTrain = train
//         }
//     })
//     return foundTrain
// }

// buyTicket(passenger, ticket){
//     let foundTicket = false
//     for(var i=0; i<this.tickets.length; ++i){
//         if (ticket == this.tickets[i]){
//             foundTicket = true
//             break
//         }
//     }
//     if (!foundTicket){
//         return -1
//     }
//     this.tickets.splice([i], 1)
//     this.saledTickets.push(new SaledTicket(passenger ,ticket.train))
// }

// changeTicket(index, newTrain){

//         if (index < this.tickets.length && index >= 0){
//             this.saledTickets[index].train = newTrain
//         }
//         else{
//             console.log("Ticket's index cannot be less than number of Ticket and must be greate or equal to 0")
//         }
// }

// saleTicket(index){
//     if (index < this.tickets.length && index >= 0){
//         this.saledTickets.splice(index, 1)
//     }
//     else{
//         console.log("Ticket's index cannot be less than number of Ticket and must be greate or equal to 0")
//     }
// }

// findCommonTrain(){
//     let trainsCount = {}
    
//     this.trains.forEach(function(train){
//         trainsCount[train.name] = 0
//     })

//     this.saledTickets.forEach(function(ticket){
//         trainsCount[ticket.train.name] += 1
//     })

//     // console.log(trainsCount)

//     let values = Object.values(trainsCount);
//     let keys = Object.keys(trainsCount);
//     let max = Math.max(...values);

//     return keys[values.indexOf(max)]
// }

// findNotCommonTrain(){
//     let trainsCount = {}
    
//     this.trains.forEach(function(train){
//         trainsCount[train.name] = 0
//     })

//     this.saledTickets.forEach(function(ticket){
//         trainsCount[ticket.train.name] += 1
//     })

//     // console.log(trainsCount)

//     let values = Object.values(trainsCount);
//     let keys = Object.keys(trainsCount);
//     let min = Math.min(...values);

//     return keys[values.indexOf(min)]
// }

var shop = new Shop();
shop.Select();
console.log(shop);


// p = new Passenger();
// console.log(p.GetEmpty());
// console.log(p.Select());
// console.log(p.Commit());
// console.log(p.Create());
// console.log(p);
// p.Create();
// console.log(p.getNextId());
// addPassenger(passengers, p);
// renamePassenger(passengers, 0, "B");
// console.log(passengers);
