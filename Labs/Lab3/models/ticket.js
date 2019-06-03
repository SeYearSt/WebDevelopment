const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    price: {type: Number, required: true, min: 20},
    passenger: {type: String, required: true, min: 1, max: 1},
    train: {type: String, required: true, unique: true, min: 1, max: 1},
    place: {type: Number, required: true, unique: true, max: 3},
    date: {type: String, required: true, min: 10, max: 10}
})

module.exports = mongoose.model('ticket', ticketSchema)
