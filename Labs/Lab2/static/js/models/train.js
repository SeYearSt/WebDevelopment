class Train extends BaseModel{
    constructor(){
        super("trains")
        this.fields = this.fields.concat("name", "capacity")
    }

    removeTrain(id){
        var collection = this.Select()
        var index = this.FindIndexById(id)
        collection.splice(index, 1)
        this.Commit(collection)
}

    renameTrain(id, newName, newCapacity){
        var train = this.FindById(id)

        if (typeof train != 'undefined'){
            this.removeTrain()
            train.name = newName
            train.capacity = newCapacity
            this.Create(train)
        }       
    }
}