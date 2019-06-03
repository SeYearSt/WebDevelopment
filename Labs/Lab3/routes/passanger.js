'use strict'

const express = require('express')
const router = express.Router()

const passangerController = require('./../controllers/passanger')

router.get('/', passangerController.index)
router.get('/list', passangerController.passangerList)
router.get('/add', passangerController.createPassangerForm)
router.post('/add', passangerController.postCreatePassanger)
// router.get('/edit/:id', passangerController.updateProductForm)
// router.post('/edit/:id', passangerController.putUpdateProduct)
// router.get('/remove/:id', passangerController.deleteProductFrom)
// router.post('/remove/:id', passangerController.deleteProduct)

module.exports = router
