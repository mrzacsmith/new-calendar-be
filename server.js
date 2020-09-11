const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose')
const connectDB = require('./utils/db.js')

require('dotenv').config()

const server = express()
connectDB()

server.use(helmet())
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())

server.get('/test', (req, res) => {
  res.send(`New calendar data server is running on /test`)
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`\n** Server is listen on port ${PORT}`)
})
