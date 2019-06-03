'use strict'

const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')

const passengerListService = require('../services/passenger.all')
const passengerFindService = require('../services/passenger.byId')
const passengerCreateService = require('../services/passenger.create')
const passengerRemoveService = require('../services/passenger.remove')

module.exports = {
  index (req, res) {
    res.render('pages/passenger/index')
  },
  async passengerList (req, res) {
    try {
      const passengerList = await passengerListService()
      res.render('pages/passenger/list', {
        passengers: passengerList
      })
    } catch (error) {
      res.render('pages/passenger/list', {
        passengers: [],
        errors: [{ msg: error.message }]
      })
    }
  },
  createpassengerForm (req, res) {
    res.render('pages/passenger/add')
  },

  postCreatepassenger: [
    body('name')
      .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
    body('surname')
      .isLength({ min: 1 }).trim().withMessage('Surname field must be specified.'),
    sanitizeBody('name').escape(),
    sanitizeBody('surname').escape(),
    async (req, res) => {
        const success = true
        const passengerData = req.body
        const errors = validationResult(req)

        if (errors.isEmpty()) {
          try {
            const passenger = await passengerCreateService(req.body)
            req.flash('info', `Product "${passenger.name}" "${passenger.surname}" is Added`)
            res.redirect('/passenger/list')
        } catch (error) {
          res.render('pages/passenger/add', {
            errors: [{ msg: error.message }]
          })
        }
      } else {
        res.render('pages/passenger/add', {
          errors: errors.array()
        })
      }
    }
  ],
  updatePassengerForm (req, res) {
    passengerFindService(req.params.id).then(passengerObj => {
      res.render('pages/passenger/update', {passenger: passengerObj})
    })
  },
  putUpdatePassenger (req, res) {
    const passengerData = req.body
    var passenger = passengerFindService(req.body.id).then(passenger => {
    passenger.name = passengerData.name
    passenger.surname = passengerData.surname
    passenger.save()
    res.redirect('/passenger/list')
    })
  },

  removePassengerFrom (req, res) {
    passengerFindService(req.params.id).then(passengerObj => {
      res.render('pages/passenger/remove', {passenger:  passengerObj})
    })
  },

  removePassenger (req, res) {
    passengerRemoveService(req.body.id)
    res.redirect('/passenger/list')
  }
  // deleteProduct (req, res) {
  //   const success = true
  //   const productData = req.body
  //   const mockProduct = _getMockProduct(productData.id)

  //   if (success) {
  //     req.flash('info', `Product "#${mockProduct.id} ${mockProduct.name}" is Deleted`)
  //     res.redirect('/product/list')
  //   } else {
  //     res.render('pages/product/delete', {
  //       product: mockProduct,
  //       errors: [{ 'msg': 'Error Omg' }]
  //     })
  //   }
  // }
}
