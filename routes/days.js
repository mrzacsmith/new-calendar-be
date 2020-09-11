const router = require('express').Router()
const Day = require('../models/Days.js')

// @desc:   Test route to confirm server is working
// @route:  GET /test
router.get('/test', (req, res) => {
  res.send(`Day test route is working`)
})

// @desc:   Get all days information
// @route:  GET /
router.get('/', (req, res) => {
  Days.find()
    .then((days) => res.json(days))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// @desc:   Create new day
// @route:  POST /add
router.post('/add', (req, res) => {
  const newDay = new Day({
    dayOYear: req.body.dayOYear,
    seasonIn: req.body.seasonIn,
    monthIn: req.body.monthIn,
    newDate: req.body.newDate,
    holiday: req.body.holiday,
  })
  newDay
    .save()
    .then(() => res.json(`The new day has been created`))
    .catch((err) => res.status(400).json(`Error ${err}`))
})

module.exports = router
