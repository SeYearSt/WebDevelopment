const path = require('path')

// встановлюємо express
const express = require('express')
const app = express()

// встановлюємо директорію для віддачі статичного контенту (каталог проекту)
app.use(express.static(__dirname))

// налаштовуємо роботу із шаблонізаотором
app.set('views', path.join(__dirname, '/static/views'))
app.set('view engine', 'pug')

// налаштовуємо маршрутизацію
app.get('/', function (request, response) {
  response.render('pages/index', { title: 'Home' })
})

app.get('/train', function (request, response) {
  response.render('pages/train', { title: 'Train' })
})
app.get('/train/add', function (request, response) {
  response.render('pages/trainAdd', { title: 'Train' })
})
app.get('/train/edit', function (request, response) {
  response.render('pages/trainEdit', { title: 'Train' })
})
app.get('/train/remove', function (request, response) {
  response.render('pages/trainRemove', { title: 'Train' })
})


app.get('/passenger', function (request, response) {
  response.render('pages/passenger', { title: 'Passenger' })
})
app.get('/passenger/add', function (request, response) {
  response.render('pages/passengerAdd', { title: 'Passenger Add' })
})
app.get('/passenger/edit', function (request, response) {
  response.render('pages/passengerEdit', { title: 'Passenger Edit' })
})
app.get('/passenger/remove', function (request, response) {
  response.render('pages/passengerRemove', { title: 'Passenger Remove' })
})

app.get('/ticket', function (request, response) {
  response.render('pages/ticket', { title: 'Ticket' })
})
app.get('/ticket/add', function (request, response) {
  response.render('pages/ticketAdd', { title: 'Ticket Add' })
})
app.get('/ticket/edit', function (request, response) {
  response.render('pages/ticketEdit', { title: 'Ticket Edit' })
})
app.get('/ticket/remove', function (request, response) {
  response.render('pages/ticketRemove', { title: 'Ticket Remove' })
})

app.get('/ticket/saled', function (request, response) {
  response.render('pages/ticketSaled', { title: 'Ticket Saled' })
})
app.get('/ticket/saled/add', function (request, response) {
  response.render('pages/ticketSaledAdd', { title: 'Ticket Saled Add' })
})
app.get('/ticket/saled/edit', function (request, response) {
  response.render('pages/ticketSaledEdit', { title: 'Ticket Saled Edit' })
})
app.get('/ticket/saled/remove', function (request, response) {
  response.render('pages/ticketSaledRemove', { title: 'Ticket Saled Remove' })
})

// запускаємо аплікацію
app.listen(process.env.PORT || 8080)
