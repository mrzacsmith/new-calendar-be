const mongoose = require('mongoose')

const DaySchema = new mongoose.Schema(
  {
    day: { type: Number, required: true, unique: true },
    nDay: { type: Number, required: true },
    seasonIn: { type: String, required: true },
    monthIn: { type: String, required: true },
    holiday: { type: String, trim: true },
    birthday: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Day', DaySchema)
