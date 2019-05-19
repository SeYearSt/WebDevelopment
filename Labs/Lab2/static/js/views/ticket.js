'use strict'

const ticketModel = new Ticket() // eslint-disable-line no-undef

function initAddForm () {
  const form = window.document.querySelector('#ticket-add-form')
  if(form != null){
    form.addEventListener('submit', function (e) {
      e.preventDefault()
  
      const formData = new FormData(e.target)
      const ticketData = {}
      formData.forEach((value, key) => {
        ticketData[key] = value
      })
  
      ticketModel.Create(ticketData)
  
      e.target.reset()
  
      window.location.replace("/ticket")
    })
  }  
}

function initEditForm () {

  var form = document.querySelector('#ticket-edit-form')
  if(form != null){
      form.addEventListener('submit', function(e){
      e.preventDefault();

      const formData = new FormData(e.target)
      const ticketData = {}
      formData.forEach((value, key) => {
        ticketData[key] = value
      })

      ticketModel.editTicket(parseInt(ticketData.Id), ticketData.passengerName, parseInt(ticketData.trainId))

      window.location.replace("/ticket")
      })
  }
}

// function initRemoveForm () {
//   var form = document.querySelector('#train-remove-form')
//   if (form != null){
//     form.addEventListener('submit', function(e){
//       e.preventDefault()

//       const formData = new FormData(e.target)

//       const trainData = {}
//       formData.forEach((value, key) => {
//         trainData[key] = value
//       })
      
//       if (typeof trainData.Id != 'undefined'){
//         trainModel.removeTrain(parseInt(trainData.Id))
//       }

//       window.location.replace("/train")
//     })
//   }
// }

function initList () {
  window.jQuery('#ticket-list').DataTable({
    data: ticketModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Passenger Name', data: 'passengerName' },
      { title: 'Train Id', data: 'trainId'}
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
//   initRemoveForm()
  initList()
//   // initListEvents()
})
