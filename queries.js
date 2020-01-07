

const Pool = require('pg').Pool
const pool = new Pool ({
    user: 'chantee',
    host: 'localhost',
    database: 'remedies',
    password: '',
    port: process.env.PORT || 5432,
})

const getUsers = (request, response) => { 
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getUser = (request, response) => {
    const { username, password } = request.body
    pool.query('SELECT * FROM users WHERE username = $1 and password = $2', [username, password], (error, results) => {
        if (error) {
            throw error
        }
        if (results.rowCount > 0) {
            response.status(200).send({data: username})
        } else {
            response.status(401).send({data: 'User Not Found or Bad Password'})

        }
    })
}
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
   const { firstname, lastname, email, password } = request.body
console.log(request.body)
    pool.query('INSERT INTO users (firstname, lastname, email, username, password) VALUES ($1, $2, $3, $4, $5)', [firstname, lastname, email, email, password], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Account created successfully`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { firstname, lastname, email, password } = request.body
  
    pool.query(
      'UPDATE users SET firstname = $1, lastname = $2, email = $3, password = $4, username = $5 WHERE id = $6',
      [firstname, lastname, email, password, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  module.exports = {
  getUser,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}