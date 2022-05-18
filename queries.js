const Pool = require('pg').Pool
let pool=''
const createTable = (request, response) => {

  pool.query('CREATE TABLE IF NOT EXISTS  users (ID SERIAL PRIMARY KEY,name VARCHAR(30),email VARCHAR(30));', (error, results) => {
   
    if(!(error=='' || error==null || error==undefined)){
      response.status(200).json(error.message)
    }
    else{
      response.status(200).json("application initialized successfully !!!")
    }
    })
  }
const getUsers = (request, response) => {
  try {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if(!(error=='' || error==null || error==undefined)){
       response.status(200).json(error.message)
      }
      else{
        if(results!=undefined){
        response.status(200).json(results.rows)
       }
      }
    })
  } catch (error) {
    
  }
    
  }
  
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  try {
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if(!(error=='' || error==null || error==undefined)){
        response.status(200).json(error.message)
      }
      if(results!=undefined){
      response.status(200).json(results.rows)
    }
    })
  } catch (error) {
    
  }
    
  }
  
  const createUser = (request, response) => {
    const { name, email } = request.body
  try {
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if(!(error=='' || error==null || error==undefined)){
        response.status(200).json(error.message)
      }
      if(results!=undefined){
       response.status(201).send(`User `+name +` inserted successfully`)
      }
    })
  } catch (error) {
    
  }
    
  }
  
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  try {
    pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if(!(error=='' || error==null || error==undefined)){
          response.status(200).json(error.message)
        }
        if(results!=undefined){
        response.status(200).send(`User modified with ID: ${id}`)
       }
      }
    )
  } catch (error) {
    
  }
    
  }
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  try {
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if(!(error=='' || error==null || error==undefined)){
        response.status(200).json(error.message)
      }
      if(results!=undefined){
      response.status(200).send(`User deleted with ID: ${id}`)
    }
    })
  } catch (error) {
    
  }
    
  }
  const createDBpool=()=>{
    console.log('Data base pool initialized successfully..!!!!')
    pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_URL,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    })
  }
  
  module.exports = {
    createTable,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createDBpool
  }