const { model } = require('mongoose')

const daysArr = [1, 'winter', 'mid']
const keysArr = ['_id', 'seasonIn', 'monthIn']
const daysObj = [{ _id: 0 }]

const newCalendar = (DAYS) => {
  // const DAYS = 150

  for (let id = 32; id <= DAYS; id++) {
    let season = ''
    let day = 1
    if (id < 74) {
      season = 'winter'
    } else if (id < 147) {
      season = 'spring'
    } else if (id < 219) {
      season = 'summer'
    } else if (id < 292) {
      season = 'autumn'
    } else {
      season = 'fall'
    }

    dayW = id % 74 == 0 ? 1 : id % 74

    daysObj[id] = {
      _id: id,
      day: dayW,
      seasonIn: season,
      monthIn: dayW < 37 ? 'early' : dayW == 37 ? 'mid' : 'late',
    }
  }
  return daysObj
}

console.log(newCalendar(120))

module.exports = daysObj
