'use strict'

const express = require('express')
const router = express.Router()

const trainController = require('../controllers/train')

router.get('/', trainController.index)
router.get('/list', trainController.trainList)
router.get('/add', trainController.addTrainForm)
router.post('/add', trainController.addTrain)

module.exports = router;