const router = require('express').Router()
const Day = require('../models/Days.js')

// @desc:   Test route to confirm server is working
// @route:  GET /test
router.get('/test', (req, res) => {
  res.send(`Day test route is running on /api/v1/days/test`)
})

// @desc:   Get all days information
// @route:  GET /
router.get('/', (req, res) => {
  Day.find()
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
    .then(() => res.json(newDay))
    .catch((err) => res.status(400).json(`Error ${err}`))
})

// @desc:   Get day by id
// @route:  GET /:id
router.get('/:id', (req, res) => {
  Day.findById(req.params.id)
    .then((day) => res.json(day))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// @desc:   Update day
// @route:  PUT /:id
router.patch('/:id', (req, res) => {
  Day.findByIdAndUpdate(req.params.id)
    .then((day) => {
      ;(day.dayOYear = req.body.dayOYear),
        (day.seasonIn = req.body.seasonIn),
        (day.monthIn = req.body.monthIn),
        (day.newDate = req.body.newDate),
        (day.holiday = req.body.holiday)
      day
        .save()
        .then(() => res.json(`Day had been updated.`))
        .catch((err) => res.status(400).json(`Error: ${err}`))
    })
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// @desc:   Delete day
// @route:  DELETE /:id
router.delete('/:id', (req, res) => {
  Day.findOneAndDelete(req.params.id)
    .then(() => res.json(`The day with id ${req.params.id} has been delted`))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

module.exports = router
