const mongoose = require('mongoose')

const DaySchema = new mongoose.Schema(
  {
    dayOYear: { type: String, required: true },
    seasonIn: { type: String, required: true },
    monthIn: { type: String, required: true },
    newDate: { type: Number, required: true },
    holiday: { type: String },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Day', DaySchema)
