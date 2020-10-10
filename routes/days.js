const router = require('express').Router()
const Day = require('../models/Days.js')

// @desc:   Test route to confirm server is working
// @route:  GET /test

let currentTime = new Date().toLocaleString()

router.get('/test', (req, res) => {
  res.send(
    `Day test route is running on /api/v1/days/test at ${currentTime}, ${req.query.data}`
  )
})

// @desc:   Get all days information
// @route:  GET /
router.get('/', (req, res) => {
  Day.find(req.query, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      data.sort((b, a) => {
        return b.day - a.day
      })
      res.status(200).send(data)
    }
  })
  // Day.find(req.query)
  //   .then((days) => res.json(days))
  //   .catch((err) => res.status(400).json(`Error: ${err}`))
})

// @desc:   Create new day
// @route:  POST /add
router.post('/', (req, res) => {
  console.log(req.query.data)
  if (req.query.data == process.env.DATA) {
    const newDay = new Day({
      day: req.body.day,
      seasonIn: req.body.seasonIn,
      monthIn: req.body.monthIn,
      nDay: req.body.nDay,
      holiday: req.body.holiday,
      birthday: req.body.birthday,
    })
    newDay
      .save()
      .then(() => res.json(newDay))
      .catch((err) => res.status(400).json(`Error ${err}`))
  }
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
  if (req.query.data == process.env.DATA) {
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
  }
})

// @desc:   Delete day
// @route:  DELETE /:id
router.delete('/:id', (req, res) => {
  if (req.query.data == process.env.DATA) {
    Day.findOneAndDelete(req.params.id)
      .then(() => res.json(`The day with id ${req.params.id} has been deleted`))
      .catch((err) => res.status(400).json(`Error: ${err}`))
  }
})

module.exports = router
