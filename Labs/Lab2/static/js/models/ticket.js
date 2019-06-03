class Ticket extends BaseModel{
    constructor(collectionName){
        super(collectionName)
        this.fields = this.fields.concat(["passengerName", "trainId"])
    }

    removeTicket(id){
        var collection = this.Select()
        var index = this.FindIndexById(id)
        collection.splice(index, 1)
        this.Commit(collection)
    }

    editTicket(id, passengerName, trainId){
        var ticket = this.FindById(id)

        if (typeof ticket != 'undefined'){
            this.removeTicket(id)
            ticket.passengerName = passengerName
            ticket.trainId = trainId
            this.Create(ticket)
        }
    }

}