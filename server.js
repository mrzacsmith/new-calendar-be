const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose')
const RateLimit = require('express-rate-limit')
const connectDB = require('./utils/db.js')
const chalk = require('chalk')

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

// Rate limit
const limiter = new RateLimit({
    windowMs: 15*60*1000,
    max: 100,
    delayMs: 0
})

server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

let currentTime = new Date().toLocaleString('en-US', {
  timeZone: 'America/Denver',
})

server.get('/', (req, res) => {
  res.json({
    status: 'Success',
    message: 'Server is live',
    date: currentTime + ' MST',
    author: 'Github: @MrZacSmith',
  })
})

server.get('/api/v1/test', (req, res) => {
  res.send(`New calendar data server is running on /test at ${currentTime}`)
})

server.use('/api/v1/days', DayRouter)

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(
    chalk.yellow(`\n***`) + chalk.green(` Server is listen on port ${PORT}`)
  )
})
