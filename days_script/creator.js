const daysArr = [1, 'winter', 'mid']
const keysArr = ['_id', 'seasonIn', 'monthIn']
const daysObj = []

const newCalendar = () => {
  const DAYS = 150

  for (let day = 1; day <= DAYS; day++) {
    daysObj[day] = {
      _id: day,
      seasonIn: 'season',
      monthIn: day,
    }
  }
  return daysObj
}

const sample = {
  _id: 1,
  seasonIn: 'winter',
  monthIn: 'mid',
}

console.log(newCalendar())
