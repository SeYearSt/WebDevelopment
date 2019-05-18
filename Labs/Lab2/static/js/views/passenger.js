'use strict'

const passengerModel = new Passenger() // eslint-disable-line no-undef
function initAddForm () {
  const form = window.document.querySelector('#shop-add-form')
  if(form != null){
    form.addEventListener('submit', function (e) {
      e.preventDefault()
  
      const formData = new FormData(e.target)
      const shopData = {}
      formData.forEach((value, key) => {
        shopData[key] = value
      })
  
      passengerModel.Create(shopData)
  
      e.target.reset()
  
      window.location.replace("/passenger")
    })
  }
  
}

function initEditForm () {

  var form = document.querySelector('#shop-edit-form')
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
  var form = document.querySelector('#shop-remove-form')
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
  window.jQuery('#shop-list').DataTable({
    data: passengerModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Name', data: 'name' }
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
  initEditForm()
  initRemoveForm()
  initList()
  initListEvents()
})
