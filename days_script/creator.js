const { model } = require('mongoose')

const daysArr = [1, 'winter', 'mid']
const keysArr = ['_id', 'seasonIn', 'monthIn']
const daysObj = [{ _id: 0 }]

const newCalendar = (DAYS) => {
  for (let id = 1; id <= DAYS; id++) {
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

    dayW = id % 73 == 0 ? 73 : id % 73

    daysObj[id] = {
      day: id,
      nDay: dayW,
      seasonIn: season,
      monthIn: dayW < 37 ? 'early' : dayW == 37 ? 'mid' : 'late',
      timestamp: Date.now() + id,
      gregDay: '',
    }
  }
  return daysObj
}

console.log(newCalendar(365))

module.exports = daysObj
