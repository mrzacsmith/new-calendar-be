const fs = require('fs')
const daysObj = require('./creator.js')

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

storeData(daysObj, './new-calendar-data.json')
