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

const corsOption = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
}

server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

let currentTime = new Date().toLocaleString()

server.get('/', (req, res) => {
  res.json({
    status: 'Success',
    message: 'Server is live',
    date: currentTime,
    author: 'Github: @MrZacSmith',
  })
})

server.get('/api/v1/test', (req, res) => {
  res.send(`New calendar data server is running on /test at ${currentTime}`)
})

server.use('/api/v1/days', DayRouter)

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`\n** Server is listen on port ${PORT}`)
})
