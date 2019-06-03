const mongoose = require('mongoose')

const Schema = mongoose.Schema

const trainSchema = new Schema({
    name: { type: String, required: true, unique: true, max: 50 },
    route: {type: String, required: true, unique: true, max: 150},
    volume: {type: Number, required: true, max: 3, min: 1}
})

module.exports = mongoose.model('train', trainSchema)
