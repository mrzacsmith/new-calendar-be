const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose')
const connectDB = require('./utils/db.js')

const DayRouter = require('./routes/days.js')

require('dotenv').config()

const server = express()
connectDB()

server.use(helmet())
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())

server.get('/api/v1/test', (req, res) => {
  res.send(`New calendar data server is running on /test`)
})

server.use('/api/v1/days', DayRouter)

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`\n** Server is listen on port ${PORT}`)
})