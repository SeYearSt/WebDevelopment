'use strict'

const trainModel = new Train() // eslint-disable-line no-undef

function initAddForm () {
  const form = window.document.querySelector('#train-add-form')
  if(form != null){
    form.addEventListener('submit', function (e) {
      e.preventDefault()

      console.log(e)
  
      const formData = new FormData(e.target)
      const trainData = {}
      formData.forEach((value, key) => {
        trainData[key] = value
      })
  
      trainModel.Create(trainData)
  
      e.target.reset()
  
      window.location.replace("/train")
    })
  }
  
}

function initEditForm () {

  var form = document.querySelector('#train-edit-form')
  if(form != null){
      form.addEventListener('submit', function(e){
      e.preventDefault();

      const formData = new FormData(e.target)
      const passengerData = {}
      formData.forEach((value, key) => {
        passengerData[key] = value
      })

       passengerModel.renamePassenger(parseInt(passengerData.Id), passengerData.name)

      window.location.replace("/passenger")
      })
  }
}

function initRemoveForm () {
  var form = document.querySelector('#train-remove-form')
  if (form != null){
    form.addEventListener('submit', function(e){
      e.preventDefault()

      const formData = new FormData(e.target)

      const passengerData = {}
      formData.forEach((value, key) => {
        passengerData[key] = value
      })
      
      if (typeof passengerData.Id != 'undefined'){
        passengerModel.removePassenger(parseInt(passengerData.Id))
      }

      window.location.replace("/passenger")
    })
  }
}

function initList () {
  window.jQuery('#train-list').DataTable({
    data: trainModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Name', data: 'name' },
      { title: 'Capacity', data: 'capacity'}
    ]
  })
}

function initListEvents () {
  document.addEventListener('shopsListDataChanged', function (e) {
    const dataTable = window.jQuery('#shop-list').DataTable()

    dataTable.clear()
    dataTable.rows.add(e.detail)
    dataTable.draw()
  }, false)
}

window.addEventListener('DOMContentLoaded', e => {
  initAddForm()
  // initEditForm()
  // initRemoveForm()
  initList()
  // initListEvents()
})
