'use strict'

const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')

const passangerListService = require('../services/passanger.all')
const passangerCreateService = require('./../services/passanger.create')

function _getMockProduct (id = null) {
  return {
    id: 33,
    name: 'Prod1',
    weight: 1,
    volume: 5
  }
}

module.exports = {
  index (req, res) {
    // console.log('')
    res.render('pages/passanger/index')
  },
  async passangerList (req, res) {
    try {
      const passangerList = await passangerListService()
      res.render('pages/passanger/list', {
        passangers: passangerList
      })
    } catch (error) {
      res.render('pages/passanger/list', {
        passangers: [],
        errors: [{ msg: error.message }]
      })
    }
  },
  createPassangerForm (req, res) {
    res.render('pages/passanger/add')
  },

  postCreatePassanger: [
    body('name')
      .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
    body('surname')
      .isLength({ min: 1 }).trim().withMessage('Surname field must be specified.'),
    sanitizeBody('name').escape(),
    sanitizeBody('surname').escape(),
    async (req, res) => {
        const success = true
        const passangerData = req.body
        const errors = validationResult(req)

        if (errors.isEmpty()) {
          try {
            const passanger = await passangerCreateService(req.body)
            req.flash('info', `Product "${passanger.name}" "${passanger.surname}" is Added`)
            res.redirect('/passanger/list')
        } catch (error) {
          res.render('pages/passanger/add', {
            errors: [{ msg: error.message }]
          })
        }
      } else {
        res.render('pages/passanger/add', {
          errors: errors.array()
        })
      }
    }
  ]
  // updateProductForm (req, res) {
  //   const mockProduct = _getMockProduct(req.body.id)

  //   res.render('pages/product/update', { product: mockProduct })
  // },
  // putUpdateProduct (req, res) {
  //   const success = true
  //   const productData = req.body
  //   const mockProduct = _getMockProduct(productData.id)

  //   if (success) {
  //     req.flash('info', `Product "#${productData.id} ${productData.name}" is Updated`)
  //     res.redirect('/product/list')
  //   } else {
  //     res.render('pages/product/update', {
  //       product: mockProduct,
  //       newProduct: productData,
  //       errors: [{ 'msg': 'Error Omg' }]
  //     })
  //   }
  // },
  // deleteProductFrom (req, res) {
  //   const mockProduct = _getMockProduct(req.body.id)

  //   res.render('pages/product/delete', { product: mockProduct })
  // },
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
