'use strict'

const express = require('express')
const router = express.Router()

const passengerController = require('./../controllers/passenger')

router.get('/', passengerController.index)
router.get('/list', passengerController.passengerList)
router.get('/add', passengerController.createpassengerForm)
router.post('/add', passengerController.postCreatepassenger)
router.get('/edit/:id', passengerController.updatePassengerForm)
router.post('/edit/:id', passengerController.putUpdatePassenger)
router.get('/remove/:id', passengerController.removePassengerFrom)
router.post('/remove/:id', passengerController.removePassenger)

module.exports = router
