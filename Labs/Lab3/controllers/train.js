'use strict'

const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')

const trainListService = require('../services/train.all')
const trainFindService = require('../services/train.byId')
const trainCreateService = require('../services/train.create')
const trainRemoveService = require('../services/train.remove.js')

module.exports = {
    index(req, res){
        res.render('pages/train/index')
    },

    async trainList(req, res){
        var trainCollection = await trainListService()
        res.render('pages/train/list', {trains: trainCollection})
    },

    addTrainForm(req, res){
        res.render('pages/train/add')

    },

    addTrain:[
        body('name')
          .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
        body('route')
          .isLength({ min: 1 }).trim().withMessage('Route field must be specified.'),
        body('volume')
            .isLength({ min: 1 }).trim().withMessage('Volume field must be specified.'),
        sanitizeBody('name').escape(),
        sanitizeBody('route').escape(),
        sanitizeBody('volume').escape(),
        
        async (req, res) => {
            const trainData = req.body
            const errors = validationResult(req)
    
            if (errors.isEmpty()) {
              try {
                const train = await trainCreateService(trainData)
                req.flash('info', `Product "${train.name}" "${train.route}" is Added`)
                res.redirect('/train/list')
            } catch (error) {
              res.render('pages/train/add', {
                errors: [{ msg: error.message }]
              })
            }
          } else {
            res.render('pages/train/add', {
              errors: errors.array()
            })
          }
        }
    ],

    async trainRemove(req, res){
        trainRemoveService(req.params.id);
        res.redirect('/train/list');
    },

    async editTrainForm(req, res){
        const trainObj = await trainFindService(req.params.id)
        res.render('pages/train/update', {train: trainObj})
    },

    async editTrainPost(req, res){
        const trainData = req.body
        const train = await trainFindService(req.params.id)
        console.log(train)
        console.log(trainData)
        train.name = trainData.name
        train.route = trainData.route
        train.volume = trainData.volume
        train.save()
        res.redirect('/train/list');
    }
}