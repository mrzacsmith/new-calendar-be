const mongoose = require('mongoose')
const chalk = require('chalk')

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    console.log(
      chalk.yellow(`***`) +
        chalk.green(` MongoDB Connected: ${connect.connection.host}\n`)
    )
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDB
