const mongoose = require('mongoose')

const BirthdaySchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, trim: true },
    notable: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Birthdays', BirthdaySchema)
