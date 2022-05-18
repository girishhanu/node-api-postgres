const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', db.createTable)

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.get('/createTable', db.createTable)
app.listen(port, () => {
  process.env['DB_URL']='localhost'
  process.env['DB_USER']='girish'
  process.env['DB_NAME']='girish'
  process.env['DB_PASSWORD']='giri@123'
  process.env['DB_PORT']=5432
  console.log(`App running on port ${port}.`)
  db.createDBpool()
})