const mongoose = require('mongoose')

const DaySchema = new mongoose.Schema(
  {
    _id: { type: Number, required: true, unique: true },
    day: { type: String, required: true },
    seasonIn: { type: String, required: true },
    monthIn: { type: String, required: true },
    holiday: { type: String },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Day', DaySchema)
