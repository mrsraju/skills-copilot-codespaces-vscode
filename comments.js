// Create web server

// Import libraries
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Import database
const {sequelize} = require('./models')

// Import config
const config = require('./config/config')

// Create express app
const app = express()

// Use libraries
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Import routes
require('./routes')(app)

// Start server
sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })