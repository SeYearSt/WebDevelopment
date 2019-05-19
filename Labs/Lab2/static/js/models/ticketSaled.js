class SaledTicket extends BaseModle{
    constructor(){
        super('ticketSaled')
        this.fields = this.fields.concat(["passengerName", "trainId"])
    }

}
